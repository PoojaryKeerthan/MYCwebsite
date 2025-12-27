import React from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ name, role, image, imageAlt, testimonial, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <AppImage
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-poppins font-semibold text-lg text-primary">{name}</h4>
          <p className="font-source text-sm text-text-secondary">{role}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="StarIcon"
            size={20}
            variant={index < rating ? 'solid' : 'outline'}
            className={index < rating ? 'text-accent' : 'text-gray-300'}
          />
        ))}
      </div>
      
      <blockquote className="font-crimson text-text-secondary italic leading-relaxed">
        "{testimonial}"
      </blockquote>
      
      <div className="mt-4 pt-4 border-t border-border">
        <Icon name="CheckBadgeIcon" size={20} className="text-success inline mr-2" />
        <span className="font-source text-sm text-text-secondary">Verified Member</span>
      </div>
    </div>
  );
};

export default TestimonialCard;