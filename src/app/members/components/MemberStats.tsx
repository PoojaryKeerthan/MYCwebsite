import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface MemberStatsProps {
  totalMembers: number;
  activeMentors: number;
  totalVolunteerHours: number;
  upcomingEvents: number;
}

const MemberStats = ({
  totalMembers,
  activeMentors,
  totalVolunteerHours,
  upcomingEvents,
}: MemberStatsProps) => {
  const stats = [
    {
      icon: 'UsersIcon',
      label: 'Total Members',
      value: totalMembers,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: 'AcademicCapIcon',
      label: 'Active Mentors',
      value: activeMentors,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: 'ClockIcon',
      label: 'Volunteer Hours',
      value: totalVolunteerHours.toLocaleString(),
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      icon: 'CalendarIcon',
      label: 'Upcoming Events',
      value: upcomingEvents,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg shadow-brand p-6 hover:shadow-brand-lg transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <Icon name={stat.icon as any} size={24} className={stat.color} />
            </div>
          </div>
          <p className="text-3xl font-poppins font-bold text-text-primary mb-1">
            {stat.value}
          </p>
          <p className="text-sm font-source text-text-secondary">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberStats;