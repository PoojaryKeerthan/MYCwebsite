import React from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  participants: number;
  category: string;
}

interface ProgramPreviewProps {
  programs: Program[];
}

const ProgramPreview = ({ programs }: ProgramPreviewProps) => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Programs & Activities
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Discover diverse opportunities for growth, leadership, and community impact through our carefully designed programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={program.image}
                  alt={program.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  {program.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={program.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{program.title}</h3>
                </div>

                <p className="text-text-secondary mb-4 line-clamp-3">{program.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <Icon name="UsersIcon" size={16} />
                    <span>{program.participants} participants</span>
                  </div>
                  <Link
                    href="/programs"
                    className="text-primary font-semibold hover:text-secondary transition-colors duration-300 flex items-center gap-1"
                  >
                    Learn More
                    <Icon name="ArrowRightIcon" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-nunito font-bold text-base lg:text-lg rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
          >
            View All Programs
            <Icon name="ArrowRightIcon" size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramPreview;