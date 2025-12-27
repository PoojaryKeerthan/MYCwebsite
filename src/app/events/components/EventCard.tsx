'use client';

import React from 'react';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    category: string;
    image: string;
    alt: string;
    description: string;
    spotsAvailable: number;
    totalSpots: number;
    isRegistered: boolean;
  };
  onRegister: (eventId: number) => void;
  onViewDetails: (eventId: number) => void;
}

const EventCard = ({ event, onRegister, onViewDetails }: EventCardProps) => {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Leadership': 'bg-primary text-primary-foreground',
      'Community Service': 'bg-forest text-forest-foreground',
      'Social': 'bg-accent text-accent-foreground',
      'Educational': 'bg-secondary text-secondary-foreground',
      'Sports': 'bg-success text-success-foreground',
      'Arts & Culture': 'bg-golden text-golden-foreground'
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  const spotsPercentage = (event.spotsAvailable / event.totalSpots) * 100;
  const isFull = event.spotsAvailable === 0;

  return (
    <div className="bg-card rounded-lg shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={event.image}
          alt={event.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-nunito font-bold ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        {event.isRegistered && (
          <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full flex items-center space-x-1">
            <Icon name="CheckCircleIcon" size={16} variant="solid" />
            <span className="text-xs font-nunito font-bold">Registered</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-poppins font-bold text-text-primary mb-3 line-clamp-2">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="CalendarIcon" size={18} />
            <span className="text-sm font-source">{event.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="ClockIcon" size={18} />
            <span className="text-sm font-source">{event.time}</span>
          </div>
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="MapPinIcon" size={18} />
            <span className="text-sm font-source">{event.location}</span>
          </div>
        </div>

        <p className="text-sm text-text-secondary font-source mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-source text-text-secondary">
              {isFull ? 'Event Full' : `${event.spotsAvailable} spots left`}
            </span>
            <span className="text-xs font-source text-text-secondary">
              {event.totalSpots} total
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                spotsPercentage > 50 ? 'bg-success' : spotsPercentage > 20 ? 'bg-warning' : 'bg-error'
              }`}
              style={{ width: `${100 - spotsPercentage}%` }}
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => onViewDetails(event.id)}
            className="flex-1 px-4 py-2.5 bg-muted text-text-primary font-nunito font-bold text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Details
          </button>
          {!event.isRegistered && (
            <button

              onClick={() => onRegister(event.id)}
              disabled={true}
              className={`flex-1 px-4 py-2.5 font-nunito font-bold text-sm rounded-lg transition-all duration-300 ${
                isFull
                  ? 'bg-muted text-muted-foreground cursor-not-allowed'
                  : 'bg-accent text-accent-foreground hover:shadow-brand-lg cursor-pointer'
              }`}
            >
              {isFull ? 'Full' : 'Register'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;