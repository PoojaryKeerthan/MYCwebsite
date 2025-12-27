import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 border-l-4 border-accent">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
          <Icon name={icon as any} size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-poppins font-semibold text-xl text-primary mb-2">{title}</h3>
          <p className="font-source text-text-secondary leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;