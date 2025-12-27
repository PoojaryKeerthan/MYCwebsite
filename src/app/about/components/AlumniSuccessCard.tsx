import React from 'react';
import AppImage from '../../../components/ui/AppImage'
import Icon from '../../../components/ui/AppIcon';

interface AlumniSuccessCardProps {
  name: string;
  currentRole: string;
  company: string;
  image: string;
  imageAlt: string;
  story: string;
  yearJoined: string;
  achievements: string[];
}

const AlumniSuccessCard = ({
  name,
  currentRole,
  company,
  image,
  imageAlt,
  story,
  yearJoined,
  achievements
}: AlumniSuccessCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-all duration-300">
      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
          <AppImage
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full">
            <span className="font-nunito font-bold text-sm text-accent-foreground">
              Alumni {yearJoined}
            </span>
          </div>
        </div>
        
        <div className="md:col-span-3 p-6">
          <div className="mb-4">
            <h3 className="font-poppins font-bold text-2xl text-primary mb-2">{name}</h3>
            <p className="font-source text-lg text-secondary">{currentRole}</p>
            <p className="font-source text-text-secondary">{company}</p>
          </div>
          
          <p className="font-source text-text-secondary leading-relaxed mb-4">
            {story}
          </p>
          
          <div className="space-y-2">
            <h4 className="font-poppins font-semibold text-primary flex items-center gap-2">
              <Icon name="TrophyIcon" size={20} className="text-accent" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="font-source text-sm text-text-secondary">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSuccessCard;