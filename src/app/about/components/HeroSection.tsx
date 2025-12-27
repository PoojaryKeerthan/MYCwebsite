import React from 'react';
import AppImage from '../../../components/ui/AppImage';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
}

const HeroSection = ({ title, subtitle, description, heroImage, heroImageAlt }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(244,162,97,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-accent rounded-full">
              <span className="text-accent-foreground font-nunito font-bold text-sm">{subtitle}</span>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              {title}
            </h1>
            <p className="font-source text-lg md:text-xl text-white/90 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-brand-lg border-4 border-white/20">
              <AppImage
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-[400px] lg:h-[500px] object-cover scale-110 hover:scale-125 cursor-pointer transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;