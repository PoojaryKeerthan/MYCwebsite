'use client';

import React, { useState } from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface LeadershipCardProps {
  name: string;
  position: string;
  image: string;
  imageAlt: string;
  bio: string;
  vision: string;
  email: string;
}

const LeadershipCard = ({ name, position, image, imageAlt, bio, vision, email }: LeadershipCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={image}
          alt={imageAlt}
          className="scale:100 w-full h-78 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#8B1538]/80 via-[#8B1538]/10 to-transparent pointer-events-none"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div> */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="font-poppins font-bold text-xl mb-1 text-white">{name}</h3>
          <p className="font-source text-sm text-white/90">{position}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <p className="font-source text-text-secondary leading-relaxed line-clamp-3">
            {bio}
          </p>
        </div>

        {isExpanded && (
          <div className="mb-4 p-4 bg-muted rounded-lg border-l-4 border-accent">
            <h4 className="font-poppins font-semibold text-primary mb-2 flex items-center gap-2">
              <Icon name="LightBulbIcon" size={20} className="text-accent" />
              Vision Statement
            </h4>
            <p className="font-crimson text-text-secondary italic leading-relaxed">
              {vision}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <a
           
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300"
          >
            <Icon name="EnvelopeIcon" size={20} />
            <span className="font-source text-sm">Contact</span>
          </a>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300"
          >
            <span className="font-nunito font-semibold text-sm">
              {isExpanded ? 'Show Less' : 'Read More'}
            </span>
            <Icon
              name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
              size={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;