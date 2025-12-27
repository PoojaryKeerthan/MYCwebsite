import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface LevelFilterProps {
  levels: Array<{
    id: string;
    name: string;
    icon: string;
  }>;
  activeLevel: string;
  onLevelChange: (levelId: string) => void;
}

const LevelFilter = ({ levels, activeLevel, onLevelChange }: LevelFilterProps) => {
  return (
    <div className="bg-card rounded-xl shadow-brand p-6">
      <h3 className="text-lg font-poppins font-semibold text-text-primary mb-4 flex items-center space-x-2">
        <Icon name="AdjustmentsHorizontalIcon" size={20} className="text-primary" />
        <span>Difficulty Level</span>
      </h3>
      
      <div className="space-y-2">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => onLevelChange(level.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-source font-medium text-sm transition-all duration-300 ${
              activeLevel === level.id
                ? 'bg-primary text-primary-foreground shadow-brand'
                : 'bg-muted text-text-primary hover:bg-primary/10'
            }`}
          >
            <Icon name={level.icon as any} size={20} />
            <span>{level.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelFilter;