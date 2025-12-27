'use client';

import React from 'react';
import LeadershipCard from './LeadershipCard';
import ImpactMetric from './ImpactMetric';
import TestimonialCard from './TestimonialCard';
import PartnerLogo from './PartnerLogo';
import ValueCard from './ValueCard';
import AlumniSuccessCard from './AlumniSuccessCard';
import VideoTestimonial from './VideoTestimonial';

interface Leader {
  name: string;
  position: string;
  image: string;
  imageAlt: string;
  bio: string;
  vision: string;
  email: string;
}

interface Metric {
  value: number;
  label: string;
  icon: string;
  suffix?: string;
  prefix?: string;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  testimonial: string;
  rating: number;
}

interface Partner {
  name: string;
  logo: string;
  logoAlt: string;
  category: string;
}

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface Alumni {
  name: string;
  currentRole: string;
  company: string;
  image: string;
  imageAlt: string;
  story: string;
  yearJoined: string;
  achievements: string[];
}

interface VideoTestimonialData {
  name: string;
  role: string;
  organization: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoUrl: string;
}

interface AboutInteractiveProps {
  leaders: Leader[];
  metrics: Metric[];
  testimonials: Testimonial[];
  partners: Partner[];
  values: Value[];
  alumni: Alumni[];
  videoTestimonials: VideoTestimonialData[];
}

const AboutInteractive = ({
  leaders,
  metrics,
  testimonials,
  partners,
  values,
  alumni,
  videoTestimonials
}: AboutInteractiveProps) => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Leadership Team
            </h2>
            <p className="font-source text-lg text-text-secondary max-w-2xl mx-auto">
              Meet the dedicated individuals guiding Mardoli Youths club towards excellence and community impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <LeadershipCard key={index} {...leader} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Community Impact
            </h2>
            <p className="font-source text-lg text-text-secondary max-w-2xl mx-auto">
              Measurable outcomes that demonstrate our commitment to youth empowerment and community development
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <ImpactMetric key={index} {...metric} />
            ))}
          </div>

          <div className="mb-16">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-primary mb-8 text-center">
              Member Testimonials
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-primary mb-8 text-center">
              Community Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <PartnerLogo key={index} {...partner} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Our Values & Culture
            </h2>
            <p className="font-source text-lg text-text-secondary max-w-2xl mx-auto">
              The principles that guide our mission and shape our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Alumni Success Stories
            </h2>
            <p className="font-source text-lg text-text-secondary max-w-2xl mx-auto">
              Long-term impact on career and personal development outcomes
            </p>
          </div>
          
          <div className="space-y-8">
            {alumni.map((alumnus, index) => (
              <AlumniSuccessCard key={index} {...alumnus} />
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-4">
              Community Leader Testimonials
            </h2>
            <p className="font-source text-lg text-text-secondary max-w-2xl mx-auto">
              Hear from government partners and community leaders about our impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <VideoTestimonial key={index} {...video} />
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutInteractive;