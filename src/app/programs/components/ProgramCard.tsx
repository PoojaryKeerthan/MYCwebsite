{// {import React from 'react';
// import Icon from '../../../components/ui/AppIcon';
// import AppImage from '../../../components/ui/AppImage';

// interface ProgramCardProps {
//   program: {
//     id: number;
//     title: string;
//     category: string;
//     description: string;
//     duration: string;
//     level: string;
//     participants: number;
//     image: string[];
//     alt: string;
//     tags: string[];
//     schedule: string;
//     instructor: string;
//   };
//   onRegister: (programId: number) => void;
//   onViewDetails: (programId: number) => void;
// }

// const ProgramCard = ({ program, onRegister, onViewDetails }: ProgramCardProps) => {
//   const getCategoryColor = (category: string) => {
//     const colors: Record<string, string> = {
//       'Leadership Training': 'bg-primary text-primary-foreground',
//       'Community Service': 'bg-forest text-forest-foreground',
//       'Social Events': 'bg-accent text-accent-foreground',
//       'Educational Workshops': 'bg-secondary text-secondary-foreground',
//       'Sports & Fitness': 'bg-success text-success-foreground',
//       'Arts & Culture': 'bg-golden text-golden-foreground',
//     };
//     return colors[category] || 'bg-muted text-muted-foreground';
//   };

//   const getLevelIcon = (level: string) => {
//     const icons: Record<string, string> = {
//       'Beginner': 'StarIcon',
//       'Intermediate': 'FireIcon',
//       'Advanced': 'BoltIcon',
//     };
//     return icons[level] || 'StarIcon';
//   };

//   return (
//     <div className="bg-card rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group">
//       <div className="relative h-48 overflow-hidden">
//         <AppImage
//           src={program.image[0]}
//           alt={program.alt}
//           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//         />
//         <div className="absolute top-4 left-4">
//           <span className={`px-3 py-1 rounded-full text-xs font-nunito font-bold ${getCategoryColor(program.category)}`}>
//             {program.category}
//           </span>
//         </div>
//         <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
//           <Icon name={getLevelIcon(program.level) as any} size={16} className="text-accent" />
//           <span className="text-xs font-source font-medium text-text-primary">{program.level}</span>
//         </div>
//       </div>

//       <div className="p-6">
//         <h3 className="text-xl font-poppins font-semibold text-text-primary mb-2 line-clamp-2">
//           {program.title}
//         </h3>
        
//         <p className="text-sm text-text-secondary mb-4 line-clamp-3">
//           {program.description}
//         </p>

//         <div className="space-y-3 mb-4">
//           <div className="flex items-center space-x-2 text-sm text-text-secondary">
//             <Icon name="ClockIcon" size={16} className="text-primary" />
//             <span className="font-source">{program.duration}</span>
//           </div>
          
//           <div className="flex items-center space-x-2 text-sm text-text-secondary">
//             <Icon name="CalendarIcon" size={16} className="text-primary" />
//             <span className="font-source">{program.schedule}</span>
//           </div>
          
//           <div className="flex items-center space-x-2 text-sm text-text-secondary">
//             <Icon name="UserIcon" size={16} className="text-primary" />
//             <span className="font-source">{program.instructor}</span>
//           </div>
          
//           <div className="flex items-center space-x-2 text-sm text-text-secondary">
//             <Icon name="UsersIcon" size={16} className="text-primary" />
//             <span className="font-source">{program.participants} participants enrolled</span>
//           </div>
//         </div>

//         <div className="flex flex-wrap gap-2 mb-4">
//           {program.tags.slice(0, 3).map((tag, index) => (
//             <span
//               key={index}
//               className="px-2 py-1 bg-muted text-text-secondary text-xs font-source rounded-md"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={() => onViewDetails(program.id)}
//             className="flex-1 px-4 py-2.5 border-2 border-primary text-primary font-nunito font-bold text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//           >
//             View Details
//           </button>
//           <button
//             onClick={() => onRegister(program.id)}
//             className="flex-1 px-4 py-2.5 bg-accent text-accent-foreground font-nunito font-bold text-sm rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
//           >
//             Register Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgramCard;
}
import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgramCardProps {
  program: {
    id: number;
    title: string;
    category: string;
    description: string;
    duration: string;
    level: string;
    participants: number;
    image: string[];
    alt: string;
    tags: string[];
    schedule: string;
    instructor: string;
  };
  onRegister: (programId: number) => void;
  onViewDetails: (programId: number) => void;
}

const ProgramCard = ({ program, onRegister, onViewDetails }: ProgramCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Logic
  useEffect(() => {
    if (program.image.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % program.image.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [program.image.length]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Leadership Training': 'bg-primary text-primary-foreground',
      'Community Service': 'bg-forest text-forest-foreground',
      'Social Events': 'bg-accent text-accent-foreground',
      'Educational Workshops': 'bg-secondary text-secondary-foreground',
      'Sports & Fitness': 'bg-success text-success-foreground',
      'Arts & Culture': 'bg-golden text-golden-foreground',
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  const getLevelIcon = (level: string) => {
    const icons: Record<string, string> = {
      'Beginner': 'StarIcon',
      'Intermediate': 'FireIcon',
      'Advanced': 'BoltIcon',
    };
    return icons[level] || 'StarIcon';
  };

  return (
    <div className="bg-card rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group">
      {/* IMAGE CAROUSEL SECTION */}
      <div className="relative h-48 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <AppImage
              src={program.image[currentIndex]}
              alt={program.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-xs font-nunito font-bold ${getCategoryColor(program.category)}`}>
            {program.category}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-10 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
          <Icon name={getLevelIcon(program.level) as any} size={16} className="text-accent" />
          <span className="text-xs font-source font-medium text-text-primary">{program.level}</span>
        </div>

        {/* Carousel Dots */}
        {program.image.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {program.image.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-4 bg-white" : "w-1 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-poppins font-semibold text-text-primary mb-2 line-clamp-2">
          {program.title}
        </h3>
        
        <p className="text-sm text-text-secondary mb-4 line-clamp-3">
          {program.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="ClockIcon" size={16} className="text-primary" />
            <span className="font-source">{program.duration}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="CalendarIcon" size={16} className="text-primary" />
            <span className="font-source">{program.schedule}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="UserIcon" size={16} className="text-primary" />
            <span className="font-source">{program.instructor}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-text-secondary">
            <Icon name="UsersIcon" size={16} className="text-primary" />
            <span className="font-source">{program.participants} participants enrolled</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {program.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-text-secondary text-xs font-source rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(program.id)}
            className="flex-1 px-4 py-2.5 border-2 border-primary text-primary font-nunito font-bold text-sm rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Details
          </button>
          {/* <button
            // onClick={() => onRegister(program.id)}
            className="flex-1 px-4 py-2.5 bg-red-600 text-accent-foreground font-nunito font-bold text-sm rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
          >
            Registration closed
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;