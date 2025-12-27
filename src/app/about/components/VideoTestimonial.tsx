'use client';

import React, { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface VideoTestimonialProps {
  name: string;
  role: string;
  organization: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoUrl: string;
}

const VideoTestimonial = ({
  name,
  role,
  organization,
  thumbnail,
  thumbnailAlt,
  videoUrl
}: VideoTestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300">
      <div className="relative aspect-video bg-gray-900">
        {!isPlaying ? (
          <>
            <AppImage
              src={thumbnail}
              alt={thumbnailAlt}
              className="w-full h-full object-cover opacity-80"
            />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group"
              aria-label={`Play video testimonial from ${name}`}
            >
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-brand-lg group-hover:scale-110 transition-transform duration-300">
                <Icon name="PlayIcon" size={32} className="text-accent-foreground ml-1" />
              </div>
            </button>
          </>
        ) : (
          <iframe
            src={videoUrl}
            title={`Video testimonial from ${name}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      
      <div className="p-6">
        <h4 className="font-poppins font-semibold text-lg text-primary mb-1">{name}</h4>
        <p className="font-source text-sm text-secondary">{role}</p>
        <p className="font-source text-sm text-text-secondary">{organization}</p>
      </div>
    </div>
  );
};

export default VideoTestimonial;