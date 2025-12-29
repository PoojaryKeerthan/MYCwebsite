'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface AppImageProps {
    src: string | StaticImageData; // Allow StaticImageData objects
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;
    [key: string]: any;
}

function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no_image.png',
    ...props
}: AppImageProps) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setImageSrc(src);
        setHasError(false);
        setIsLoading(true);
    }, [src]);

    // Handle string vs object logic
    const isString = typeof imageSrc === 'string';
    const isExternal = isString && (imageSrc.startsWith('http://') || imageSrc.startsWith('https://'));

    const handleError = () => {
        if (!hasError && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        }
        setIsLoading(false);
    };

    const commonClassName = `${className} ${isLoading ? 'bg-gray-200' : ''} ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`;

    // If it's a standard external URL string, use <img> to avoid Next.js domain whitelist issues
    if (isExternal) {
        return (
            <div className={fill ? `relative h-full w-full ${className}` : className}>
                <img
                    src={imageSrc as string}
                    alt={alt}
                    className={`${commonClassName} ${fill ? 'absolute inset-0 w-full h-full object-cover' : ''}`}
                    onError={handleError}
                    onLoad={() => setIsLoading(false)}
                    onClick={onClick}
                    {...props}
                />
            </div>
        );
    }

    // For local imports (Objects) or local paths (Strings), use Next.js Image
    return (
        <div className={fill ? `relative h-full w-full ${className}` : className}>
            <Image
                src={imageSrc}
                alt={alt}
                // Only provide width/height if NOT using fill
                width={!fill ? (width || 400) : undefined}
                height={!fill ? (height || 300) : undefined}
                fill={fill}
                priority={priority}
                quality={quality}
                placeholder={isString ? placeholder : (placeholder === 'blur' ? 'blur' : 'empty')}
                blurDataURL={blurDataURL}
                sizes={fill ? (sizes || '100vw') : sizes}
                className={commonClassName}
                onError={handleError}

                onLoadingComplete={() => setIsLoading(false)}
                onClick={onClick}
                style={fill ? { objectFit: 'cover' } : {}}
                {...props}
            />
        </div>
    );
}

export default AppImage;