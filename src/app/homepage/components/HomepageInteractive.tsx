'use client';

import React from 'react';
import HeroSection from './HeroSection';
import ImpactStats from './ImpactStats';
import ProgramPreview from './ProgramPreview';
import MemberSpotlight from './MemberSpotlight';
import UpcomingEvents from './UpcomingEvents';
import TestimonialCarousel from './TestimonialCarousel';
import CallToAction from './CallToAction';
import Footer from './Footer';

interface HomepageInteractiveProps {
  heroData: {
    title: string;
    subtitle: string;
    ctaButtons: Array<{
      label: string;
      href: string;
      variant: 'primary' | 'secondary';
    }>;
    backgroundImage: string;
    backgroundAlt: string;
  };
  statsData: Array<{
    icon: string;
    value: number;
    suffix: string;
    label: string;
    color: string;
  }>;
  programsData: Array<{
    id: number;
    title: string;
    description: string;
    icon: string;
    image: string;
    alt: string;
    participants: number;
    category: string;
  }>;
  membersData: Array<{
    id: number;
    name: string;
    role: string;
    achievement: string;
    quote: string;
    image: string;
    alt: string;
    joinedYear: number;
  }>;
  eventsData: Array<{
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    description: string;
    image: string;
    alt: string;
    spotsLeft: number;
  }>;
  testimonialsData: Array<{
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
    alt: string;
    rating: number;
  }>;
}

const HomepageInteractive = ({
  heroData,
  statsData,
  programsData,
  membersData,
  eventsData,
  testimonialsData,
}: HomepageInteractiveProps) => {
  return (
    <>
      <HeroSection {...heroData} />
      <ImpactStats stats={statsData} />
      <ProgramPreview programs={programsData} />
      <MemberSpotlight members={membersData} />
      <UpcomingEvents events={eventsData} />
      <TestimonialCarousel testimonials={testimonialsData} />
      <CallToAction />
      <Footer />
    </>
  );
};

export default HomepageInteractive;