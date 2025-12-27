'use client';

import React from 'react';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface EventDetailsModalProps {
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
    fullDescription: string;
    spotsAvailable: number;
    totalSpots: number;
    isRegistered: boolean;
    organizer: string;
    contactEmail: string;
    contactPhone: string;
    requirements: string[];
    benefits: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister: (eventId: number) => void;
}

const EventDetailsModal = ({ event, isOpen, onClose, onRegister }: EventDetailsModalProps) => {
  if (!isOpen || !event) return null;

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

  const isFull = event.spotsAvailable === 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-brand-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-poppins font-bold text-text-primary">Event Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-primary" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden mb-6">
            <AppImage
              src={event.image}
              alt={event.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-sm font-nunito font-bold ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
            </div>
            {event.isRegistered && (
              <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full flex items-center space-x-1">
                <Icon name="CheckCircleIcon" size={18} variant="solid" />
                <span className="text-sm font-nunito font-bold">Registered</span>
              </div>
            )}
          </div>

          <h3 className="text-3xl font-poppins font-bold text-text-primary mb-4">
            {event.title}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-3 text-text-secondary">
              <Icon name="CalendarIcon" size={20} />
              <span className="font-source">{event.date}</span>
            </div>
            <div className="flex items-center space-x-3 text-text-secondary">
              <Icon name="ClockIcon" size={20} />
              <span className="font-source">{event.time}</span>
            </div>
            <div className="flex items-center space-x-3 text-text-secondary">
              <Icon name="MapPinIcon" size={20} />
              <span className="font-source">{event.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-text-secondary">
              <Icon name="UserIcon" size={20} />
              <span className="font-source">{event.organizer}</span>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-source font-medium text-text-primary">
                {isFull ? 'Event Full' : `${event.spotsAvailable} spots available`}
              </span>
              <span className="text-sm font-source text-text-secondary">
                {event.totalSpots} total spots
              </span>
            </div>
            <div className="w-full bg-background rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${((event.totalSpots - event.spotsAvailable) / event.totalSpots) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-6 mb-6">
            <div>
              <h4 className="text-lg font-poppins font-bold text-text-primary mb-2">About This Event</h4>
              <p className="text-base font-source text-text-secondary leading-relaxed">
                {event.fullDescription}
              </p>
            </div>

            {event.requirements.length > 0 && (
              <div>
                <h4 className="text-lg font-poppins font-bold text-text-primary mb-2">Requirements</h4>
                <ul className="space-y-2">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                      <span className="text-base font-source text-text-secondary">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.benefits.length > 0 && (
              <div>
                <h4 className="text-lg font-poppins font-bold text-text-primary mb-2">What You'll Gain</h4>
                <ul className="space-y-2">
                  {event.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="StarIcon" size={20} className="text-accent flex-shrink-0 mt-0.5" variant="solid" />
                      <span className="text-base font-source text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-lg font-poppins font-bold text-text-primary mb-2">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="EnvelopeIcon" size={18} />
                  <a href={`mailto:${event.contactEmail}`} className="font-source hover:text-primary transition-colors duration-300">
                    {event.contactEmail}
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="PhoneIcon" size={18} />
                  <a href={`tel:${event.contactPhone}`} className="font-source hover:text-primary transition-colors duration-300">
                    {event.contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-muted text-text-primary font-nunito font-bold text-base rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Close
            </button>
            {!event.isRegistered && (
              <button
                onClick={() => {
                  onRegister(event.id);
                  onClose();
                }}
                disabled={true}
                className={`flex-1 px-6 py-3 font-nunito font-bold text-base rounded-lg transition-all duration-300 ${
                  isFull
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-accent text-accent-foreground hover:shadow-brand-lg cursor-pointer'
                }`}
              >
                {isFull ? 'Event Full' : 'Register Now'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;