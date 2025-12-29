'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';
import { IMAGES } from '@/constants/Images';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaButtons: {
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  }[];
  backgroundImage: string;
  backgroundAlt: string;
}
const HeroSection = ({ 
  title, 
  subtitle, 
  ctaButtons, 
  backgroundImage, 
  backgroundAlt 
}: HeroSectionProps) => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            title: "Empowering Youth Through Community Leadership",
            subtitle: "Join a vibrant community of youth leaders making real impact in Mardoli District",
            image: IMAGES.MycRunners,
            alt: "Youth solidarity outdoors"
        },
        {
            title: "Building Strong Leaders for Local Communities",
            subtitle: "Discover programs designed to unlock your potential and create lasting change",
            image: IMAGES.FlagHoist3,
            alt: "Community flag hoisting event"
        },
        {
            title: "Creating Opportunities for Youth Growth",
            subtitle: "Access leadership training, community service, and personal development resources",
            image: IMAGES.Cleaning2,
            alt: "Youth participating in community cleaning"
        }
    ];

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (!isHydrated) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [isHydrated, heroSlides.length]);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
            {/* Carousel Track */}
            <div
                className="absolute inset-0 z-0 flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {heroSlides.map((slide, index) => (
                    <div key={index} className="relative min-w-full h-full">
                        <AppImage
                            src={slide.image}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Fixed Dark Overlay (Does not slide) */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70 z-10 backdrop-blur-[2px] bg-black/40" />

            {/* Content Container */}
            <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
                <div className="max-w-4xl text-white">
                    {/* Content Fade Effect */}
                    <div key={currentSlide} className="animate-fade-in">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white/70">
                            {heroSlides[currentSlide].title}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl">
                            {heroSlides[currentSlide].subtitle}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Link
                            href="/join-us"
                            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-nunito font-bold text-base lg:text-lg rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Join Our Community
                            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
                        </Link>
                        <Link
                            href="/programs"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-nunito font-bold text-base lg:text-lg rounded-lg hover:bg-white/20 transition-all duration-300"
                        >
                            Explore Programs
                        </Link>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex gap-3">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSlideChange(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-12 bg-accent' : 'w-8 bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-48 transform -translate-x-1/2 z-20 animate-bounce">
                <Icon name="ChevronDownIcon" size={32} className="text-white" />
            </div>


        </section>

    );
};

export default HeroSection;


