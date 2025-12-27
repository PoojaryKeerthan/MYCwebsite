'use client';

import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface ApplicationType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface ApplicationTypeSelectorProps {
  selectedType: string;
  onTypeSelect: (typeId: string) => void;
}

const ApplicationTypeSelector = ({ selectedType, onTypeSelect }: ApplicationTypeSelectorProps) => {
  const applicationTypes: ApplicationType[] = [
    {
      id: 'youth',
      title: 'Youth Membership',
      description: 'For individuals aged 16-25 seeking personal development and leadership opportunities',
      icon: 'UserGroupIcon',
      color: 'primary',
    },
    {
      id: 'volunteer',
      title: 'Volunteer Application',
      description: 'Join our community service initiatives and make a positive impact',
      icon: 'HandRaisedIcon',
      color: 'accent',
    },
    {
      id: 'partnership',
      title: 'Partnership Inquiry',
      description: 'For businesses and organizations interested in collaboration opportunities',
      icon: 'BuildingOfficeIcon',
      color: 'secondary',
    },
    {
      id: 'alumni',
      title: 'Alumni Reconnection',
      description: 'Former members wanting to give back through mentorship and support',
      icon: 'AcademicCapIcon',
      color: 'forest',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
      {applicationTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onTypeSelect(type.id)}
          className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
            selectedType === type.id
              ? 'border-primary bg-primary/5 shadow-brand-lg scale-105'
              : 'border-border bg-card hover:border-primary/50 hover:shadow-brand'
          }`}
        >
          <div className="flex items-start space-x-4">
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                selectedType === type.id ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <Icon
                name={type.icon as any}
                size={24}
                className={selectedType === type.id ? 'text-primary-foreground' : 'text-text-primary'}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-poppins font-semibold text-text-primary mb-2">{type.title}</h3>
              <p className="text-sm text-text-secondary">{type.description}</p>
            </div>
            {selectedType === type.id && (
              <Icon name="CheckCircleIcon" size={24} className="text-primary flex-shrink-0" variant="solid" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ApplicationTypeSelector;