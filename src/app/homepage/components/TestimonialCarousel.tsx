'use client';

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  alt: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  const handleDotClick = (index: number) => {
    if (!isHydrated) return;
    setCurrentIndex(index);
  };

  const currentTestimonial = isHydrated ? testimonials[currentIndex] : testimonials[0];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Real stories from real people whose lives have been transformed through our community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-accent">
                <AppImage
                  src={currentTestimonial.image}
                  alt={currentTestimonial.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    name="StarIcon"
                    size={24}
                    variant={index < currentTestimonial.rating ? 'solid' : 'outline'}
                    className={index < currentTestimonial.rating ? 'text-accent' : 'text-white/40'}
                  />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl font-crimson italic mb-6 max-w-3xl">
                "{currentTestimonial.content}"
              </blockquote>

              <div>
                <h4 className="text-xl font-bold mb-1">{currentTestimonial.name}</h4>
                <p className="text-white/80">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-12 bg-accent' : 'w-3 bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;