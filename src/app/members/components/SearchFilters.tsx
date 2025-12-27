import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedRole: string;
  onRoleChange: (value: string) => void;
  selectedMentorship: string;
  onMentorshipChange: (value: string) => void;
  selectedSkill: string;
  onSkillChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

const SearchFilters = ({
  searchQuery,
  onSearchChange,
  selectedRole,
  onRoleChange,
  selectedMentorship,
  onMentorshipChange,
  selectedSkill,
  onSkillChange,
  sortBy,
  onSortChange,
}: SearchFiltersProps) => {
  const roles = ['All Roles', 'Active Member', 'Team Leader', 'Volunteer Coordinator', 'Event Organizer', 'Alumni','President','Vice President'];
  const mentorshipOptions = ['All', 'Mentors', 'Mentees', 'Both'];
  const skills = ['All Skills', 'Leadership', 'Communication', 'Event Planning', 'Community Service', 'Public Speaking', 'Project Management'];
  const sortOptions = [
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'hours', label: 'Volunteer Hours' },
    { value: 'events', label: 'Events Attended' },
    { value: 'achievements', label: 'Achievements' },
    { value: 'joinDate', label: 'Join Date' },
  ];

  return (
    <div className="bg-card rounded-lg shadow-brand p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
          />
          <input
            type="text"
            placeholder="Search members..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg font-source text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <select
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value)}
          className="w-full px-4 py-2.5 border border-border rounded-lg font-source text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-background cursor-pointer"
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>

        <select
          value={selectedMentorship}
          onChange={(e) => onMentorshipChange(e.target.value)}
          className="w-full px-4 py-2.5 border border-border rounded-lg font-source text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-background cursor-pointer"
        >
          {mentorshipOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={selectedSkill}
          onChange={(e) => onSkillChange(e.target.value)}
          className="w-full px-4 py-2.5 border border-border rounded-lg font-source text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-background cursor-pointer"
        >
          {skills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-4 py-2.5 border border-border rounded-lg font-source text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-background cursor-pointer"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              Sort: {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;