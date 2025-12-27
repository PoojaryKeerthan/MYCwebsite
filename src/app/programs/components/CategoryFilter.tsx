import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface CategoryFilterProps {
  categories: Array<{
    id: string;
    name: string;
    icon: string;
    count: number;
  }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-card rounded-xl shadow-brand p-6">
      <h3 className="text-lg font-poppins font-semibold text-text-primary mb-4 flex items-center space-x-2">
        <Icon name="FunnelIcon" size={20} className="text-primary" />
        <span>Filter by Category</span>
      </h3>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-source font-medium text-sm transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-brand'
                : 'bg-muted text-text-primary hover:bg-primary/10'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon name={category.icon as any} size={20} />
              <span>{category.name}</span>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${
              activeCategory === category.id
                ? 'bg-primary-foreground/20'
                : 'bg-background'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;