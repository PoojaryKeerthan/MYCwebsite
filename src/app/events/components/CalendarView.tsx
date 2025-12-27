'use client';

import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  category: string;
}

interface CalendarViewProps {
  events: CalendarEvent[];
  currentMonth: number;
  currentYear: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onDateClick: (date: number) => void;
  selectedDate: number | null;
}

const CalendarView = ({
  events,
  currentMonth,
  currentYear,
  onPrevMonth,
  onNextMonth,
  onDateClick,
  selectedDate
}: CalendarViewProps) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const getEventsForDate = (date: number) => {
    const dateStr = `${date.toString().padStart(2, '0')}/${(currentMonth + 1).toString().padStart(2, '0')}/${currentYear}`;
    return events.filter(event => event.date === dateStr);
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalCells = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
      const dayNumber = i - firstDayOfMonth + 1;
      const isValidDay = dayNumber > 0 && dayNumber <= daysInMonth;
      const dayEvents = isValidDay ? getEventsForDate(dayNumber) : [];
      const hasEvents = dayEvents.length > 0;
      const isSelected = selectedDate === dayNumber;
      const isToday = new Date().getDate() === dayNumber && 
                      new Date().getMonth() === currentMonth && 
                      new Date().getFullYear() === currentYear;

      days.push(
        <button
          key={i}
          onClick={() => isValidDay && onDateClick(dayNumber)}
          disabled={!isValidDay}
          className={`aspect-square p-2 rounded-lg transition-all duration-300 relative ${
            !isValidDay
              ? 'bg-transparent cursor-default'
              : isSelected
              ? 'bg-primary text-primary-foreground shadow-brand'
              : isToday
              ? 'bg-accent text-accent-foreground'
              : hasEvents
              ? 'bg-muted hover:bg-primary hover:text-primary-foreground'
              : 'hover:bg-muted'
          }`}
        >
          {isValidDay && (
            <>
              <span className="text-sm font-source font-medium">{dayNumber}</span>
              {hasEvents && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                  {dayEvents.slice(0, 3).map((_, idx) => (
                    <div key={idx} className="w-1 h-1 rounded-full bg-current opacity-70" />
                  ))}
                </div>
              )}
            </>
          )}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="bg-card rounded-lg shadow-brand p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-poppins font-bold text-text-primary">
          {monthNames[currentMonth]} {currentYear}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={onPrevMonth}
            className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Previous month"
          >
            <Icon name="ChevronLeftIcon" size={20} />
          </button>
          <button
            onClick={onNextMonth}
            className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Next month"
          >
            <Icon name="ChevronRightIcon" size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-source font-medium text-text-secondary py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default CalendarView;