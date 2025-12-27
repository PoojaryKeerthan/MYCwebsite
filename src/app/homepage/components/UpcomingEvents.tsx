import React from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  spotsLeft: number;
}

interface UpcomingEventsProps {
  events: Event[];
}

const UpcomingEvents = ({ events }: UpcomingEventsProps) => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
              Join us for exciting activities, workshops, and community gatherings.
            </p>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-nunito font-bold text-base rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
          >
            View All Events
            <Icon name="CalendarIcon" size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                  <AppImage
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                    {event.category}
                  </div>
                </div>

                <div className="p-6 flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Icon name="CalendarDaysIcon" size={18} className="text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Icon name="ClockIcon" size={18} className="text-primary" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Icon name="MapPinIcon" size={18} className="text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-4 line-clamp-2">{event.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Icon name="UserGroupIcon" size={18} className="text-accent" />
                      <span className="text-sm font-semibold text-accent">
                        {event.spotsLeft} spots left
                      </span>
                    </div>
                    <Link
                      href="/events"
                      className="text-primary font-semibold hover:text-secondary transition-colors duration-300 flex items-center gap-1"
                    >
                      Register
                      <Icon name="ArrowRightIcon" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;