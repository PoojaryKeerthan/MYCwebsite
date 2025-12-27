import React from 'react';
import Icon from "../../../components/ui/AppIcon";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface OurStorySectionProps {
  title: string;
  description: string;
  milestones: Milestone[];
}

const OurStorySection = ({ title, description, milestones }: OurStorySectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
            {title}
          </h2>
          <p className="font-source text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-card rounded-xl p-6 shadow-2xl hover:shadow-brand-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={milestone.icon as any} size={24} className="text-white" />
                      </div>
                      <span className="font-poppins font-bold text-2xl text-accent">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-primary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-source text-text-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-full border-8 border-white shadow-brand flex items-center justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;