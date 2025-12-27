'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface Member {
  id: number;
  name: string;
  role: string;
  achievement: string;
  quote: string;
  image: string;
  alt: string;
  joinedYear: number;
}

interface MemberSpotlightProps {
  members: Member[];
}

const MemberSpotlight = ({ members }: MemberSpotlightProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, members.length]);

  const handlePrevious = () => {
    if (!isHydrated) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!isHydrated) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  const currentMember = isHydrated ? members[currentIndex] : members[0];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const imageVariants = {
    enter: {
      scale: 1.1,
      opacity: 0,
    },
    center: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.9,
      opacity: 0,
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Member Spotlights
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Meet the inspiring individuals who are making a difference in our community.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-brand-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <AppImage
                      src={currentMember.image}
                      alt={currentMember.alt}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-primary text-white rounded-lg">
                  <span className="text-sm font-semibold">Member since {currentMember.joinedYear}</span>
                </div>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <div className="mb-6">
                      <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-accent mb-4" />
                      <blockquote className="text-xl lg:text-2xl font-crimson italic text-text-primary mb-6">
                        "{currentMember.quote}"
                      </blockquote>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                        {currentMember.name}
                      </h3>
                      <p className="text-lg text-secondary font-semibold mb-2">{currentMember.role}</p>
                      <div className="flex items-start gap-2 text-text-secondary">
                        <Icon name="TrophyIcon" size={20} className="text-accent mt-1 flex-shrink-0" />
                        <p>{currentMember.achievement}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePrevious}
                    className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
                    aria-label="Previous member"
                  >
                    <Icon name="ChevronLeftIcon" size={24} />
                  </button>
                  <div className="flex gap-2">
                    {members.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
                    aria-label="Next member"
                  >
                    <Icon name="ChevronRightIcon" size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/members"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-nunito font-bold text-base lg:text-lg rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
            >
              Meet All Members
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberSpotlight;