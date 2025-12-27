'use client';

import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  category: string;
}

interface UpcomingEventsListProps {
  events: UpcomingEvent[];
  onEventClick: (eventId: number) => void;
}

const UpcomingEventsList = ({ events, onEventClick }: UpcomingEventsListProps) => {
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Leadership': 'UserGroupIcon',
      'Community Service': 'HeartIcon',
      'Social': 'SparklesIcon',
      'Educational': 'AcademicCapIcon',
      'Sports': 'TrophyIcon',
      'Arts & Culture': 'PaintBrushIcon'
    };
    return icons[category] || 'CalendarIcon';
  };

  if (events.length === 0) {
    return (
      <div className="bg-card rounded-lg shadow-brand p-6">
        <h3 className="text-xl font-poppins font-bold text-text-primary mb-4">Upcoming Events</h3>
        <div className="text-center py-8">
          <Icon name="CalendarDaysIcon" size={48} className="text-muted-foreground mx-auto mb-3" />
          <p className="text-base font-source text-text-secondary">No upcoming events found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-brand p-6">
      <h3 className="text-xl font-poppins font-bold text-text-primary mb-4">Upcoming Events</h3>
      <div className="space-y-3">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => onEventClick(event.id)}
            className="w-full flex items-center space-x-4 p-4 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent-foreground transition-colors duration-300">
              <Icon name={getCategoryIcon(event.category) as any} size={24} className="text-accent-foreground group-hover:text-accent" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-poppins font-semibold text-base mb-1 line-clamp-1">
                {event.title}
              </h4>
              <div className="flex items-center space-x-3 text-sm opacity-80">
                <span className="font-source">{event.date}</span>
                <span>•</span>
                <span className="font-source">{event.time}</span>
              </div>
            </div>
            <Icon name="ChevronRightIcon" size={20} className="flex-shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventsList;