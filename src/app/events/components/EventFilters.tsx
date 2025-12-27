'use client';

import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface EventFiltersProps {
  selectedCategory: string;
  selectedMonth: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onMonthChange: (month: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const EventFilters = ({
  selectedCategory,
  selectedMonth,
  searchQuery,
  onCategoryChange,
  onMonthChange,
  onSearchChange,
  onClearFilters
}: EventFiltersProps) => {
  const categories = [
    { value: 'all', label: 'All Categories', icon: 'ViewColumnsIcon' },
    { value: 'Leadership', label: 'Leadership', icon: 'UserGroupIcon' },
    { value: 'Community Service', label: 'Community Service', icon: 'HeartIcon' },
    { value: 'Social', label: 'Social', icon: 'SparklesIcon' },
    { value: 'Educational', label: 'Educational', icon: 'AcademicCapIcon' },
    { value: 'Sports', label: 'Sports', icon: 'TrophyIcon' },
    { value: 'Arts & Culture', label: 'Arts & Culture', icon: 'PaintBrushIcon' }
  ];

  const months = [
    { value: 'all', label: 'All Months' },
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || selectedMonth !== 'all' || searchQuery !== '';

  return (
    <div className="bg-card rounded-lg shadow-brand p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-poppins font-bold text-text-primary">Filter Events</h3>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm font-source text-primary hover:text-secondary transition-colors duration-300 flex items-center space-x-1"
          >
            <Icon name="XMarkIcon" size={16} />
            <span>Clear All</span>
          </button>
        )}
      </div>

      <div className="relative">
        <Icon
          name="MagnifyingGlassIcon"
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
        />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg font-source text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      <div>
        <label className="block text-sm font-source font-medium text-text-primary mb-2">
          Category
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => onCategoryChange(category.value)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-source text-sm transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-muted text-text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <Icon name={category.icon as any} size={16} />
              <span className="truncate">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-source font-medium text-text-primary mb-2">
          Month
        </label>
        <select
          value={selectedMonth}
          onChange={(e) => onMonthChange(e.target.value)}
          className="w-full px-4 py-3 bg-muted border border-border rounded-lg font-source text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EventFilters;