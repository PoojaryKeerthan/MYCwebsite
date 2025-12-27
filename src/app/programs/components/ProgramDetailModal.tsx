// 'use client';

// import React, { useEffect } from 'react';
// import Icon from '../../../components/ui/AppIcon';
// import AppImage from '../../../components/ui/AppImage';

// interface ProgramDetailModalProps {
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
//     fullDescription: string;
//     objectives: string[];
//     requirements: string[];
//     benefits: string[];
//   } | null;
//   isOpen: boolean;
//   onClose: () => void;
//   onRegister: (programId: number) => void;
// }

// const ProgramDetailModal = ({ program, isOpen, onClose, onRegister }: ProgramDetailModalProps) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen || !program) return null;

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

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
//       <div className="bg-card rounded-xl shadow-brand-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
//           <h2 className="text-2xl font-poppins font-bold text-text-primary">Program Details</h2>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
//           >
//             <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
//           </button>
//         </div>

//         <div className="p-6">
//           <div className="relative h-64 rounded-xl overflow-hidden mb-6">
//             <AppImage
//               src={program.image[0]}
//               alt={program.alt}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute top-4 left-4">
//               <span className={`px-4 py-2 rounded-full text-sm font-nunito font-bold ${getCategoryColor(program.category)}`}>
//                 {program.category}
//               </span>
//             </div>
//           </div>

//           <h3 className="text-3xl font-poppins font-bold text-text-primary mb-4">
//             {program.title}
//           </h3>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//             <div className="bg-muted rounded-lg p-4">
//               <div className="flex items-center space-x-2 mb-2">
//                 <Icon name="ClockIcon" size={20} className="text-primary" />
//                 <span className="text-xs font-source font-medium text-text-secondary">Duration</span>
//               </div>
//               <p className="text-sm font-source font-semibold text-text-primary">{program.duration}</p>
//             </div>

//             <div className="bg-muted rounded-lg p-4">
//               <div className="flex items-center space-x-2 mb-2">
//                 <Icon name="AcademicCapIcon" size={20} className="text-primary" />
//                 <span className="text-xs font-source font-medium text-text-secondary">Level</span>
//               </div>
//               <p className="text-sm font-source font-semibold text-text-primary">{program.level}</p>
//             </div>

//             <div className="bg-muted rounded-lg p-4">
//               <div className="flex items-center space-x-2 mb-2">
//                 <Icon name="CalendarIcon" size={20} className="text-primary" />
//                 <span className="text-xs font-source font-medium text-text-secondary">Schedule</span>
//               </div>
//               <p className="text-sm font-source font-semibold text-text-primary">{program.schedule}</p>
//             </div>

//             <div className="bg-muted rounded-lg p-4">
//               <div className="flex items-center space-x-2 mb-2">
//                 <Icon name="UsersIcon" size={20} className="text-primary" />
//                 <span className="text-xs font-source font-medium text-text-secondary">Enrolled</span>
//               </div>
//               <p className="text-sm font-source font-semibold text-text-primary">{program.participants}</p>
//             </div>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">About This Program</h4>
//             <p className="text-base font-source text-text-secondary leading-relaxed">
//               {program.fullDescription}
//             </p>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">Learning Objectives</h4>
//             <ul className="space-y-2">
//               {program.objectives.map((objective, index) => (
//                 <li key={index} className="flex items-start space-x-3">
//                   <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
//                   <span className="text-base font-source text-text-secondary">{objective}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">Requirements</h4>
//             <ul className="space-y-2">
//               {program.requirements.map((requirement, index) => (
//                 <li key={index} className="flex items-start space-x-3">
//                   <Icon name="DocumentCheckIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
//                   <span className="text-base font-source text-text-secondary">{requirement}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">Program Benefits</h4>
//             <ul className="space-y-2">
//               {program.benefits.map((benefit, index) => (
//                 <li key={index} className="flex items-start space-x-3">
//                   <Icon name="SparklesIcon" size={20} className="text-accent flex-shrink-0 mt-0.5" />
//                   <span className="text-base font-source text-text-secondary">{benefit}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="mb-6">
//             <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">Program Tags</h4>
//             <div className="flex flex-wrap gap-2">
//               {program.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1.5 bg-muted text-text-secondary text-sm font-source rounded-lg"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="flex space-x-4">
//             <button
//               onClick={onClose}
//               className="flex-1 px-6 py-3 border-2 border-border text-text-primary font-nunito font-bold text-base rounded-lg hover:bg-muted transition-all duration-300"
//             >
//               Close
//             </button>
//             <button
//               onClick={() => {
//                 onRegister(program.id);
//                 onClose();
//               }}
//               className="flex-1 px-6 py-3 bg-accent text-accent-foreground font-nunito font-bold text-base rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
//             >
//               Register for Program
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgramDetailModal;

'use client';

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgramDetailModalProps {
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
    fullDescription: string;
    objectives: string[];
    requirements: string[];
    benefits: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister: (programId: number) => void;
}

const ProgramDetailModal = ({ program, isOpen, onClose, onRegister }: ProgramDetailModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel Logic (Placed at top to avoid Hook errors)
  useEffect(() => {
    if (!isOpen || !program || program.image.length <= 1) {
      setCurrentIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % program.image.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isOpen, program]);

  // Scroll Lock Logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !program) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card rounded-xl shadow-brand-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-poppins font-bold text-text-primary">Program Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
          </button>
        </div>

        <div className="p-6">
          {/* IMAGE CAROUSEL (Your design with added motion) */}
          <div className="relative h-80 rounded-xl overflow-hidden mb-6">
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
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            {/* <div className="absolute top-4 left-4 z-10">
              <span className={`px-4 py-2 rounded-full text-sm font-nunito font-bold ${getCategoryColor(program.category)}`}>
                {program.category}
              </span>
            </div> */}

            {/* Carousel Dots (Only shows if multiple images exist) */}
            {program.image.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {program.image.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <h3 className="text-3xl font-poppins font-bold text-text-primary mb-4">
            {program.title}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="ClockIcon" size={20} className="text-primary" />
                <span className="text-xs font-source font-medium text-text-secondary">Duration</span>
              </div>
              <p className="text-sm font-source font-semibold text-text-primary">{program.duration}</p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="AcademicCapIcon" size={20} className="text-primary" />
                <span className="text-xs font-source font-medium text-text-secondary">Level</span>
              </div>
              <p className="text-sm font-source font-semibold text-text-primary">{program.level}</p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="CalendarIcon" size={20} className="text-primary" />
                <span className="text-xs font-source font-medium text-text-secondary">Schedule</span>
              </div>
              <p className="text-sm font-source font-semibold text-text-primary">{program.schedule}</p>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="UsersIcon" size={20} className="text-primary" />
                <span className="text-xs font-source font-medium text-text-secondary">Enrolled</span>
              </div>
              <p className="text-sm font-source font-semibold text-text-primary">{program.participants}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">About This Program</h4>
            <p className="text-base font-source text-text-secondary leading-relaxed">
              {program.fullDescription}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">Learning Objectives</h4>
            <ul className="space-y-2">
              {program.objectives.map((objective, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success flex-shrink-0 mt-0.5" />
                  <span className="text-base font-source text-text-secondary">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">Requirements</h4>
            <ul className="space-y-2">
              {program.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name="DocumentCheckIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base font-source text-text-secondary">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">Program Benefits</h4>
            <ul className="space-y-2">
              {program.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Icon name="SparklesIcon" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base font-source text-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-poppins font-semibold text-text-primary mb-3">Program Tags</h4>
            <div className="flex flex-wrap gap-2">
              {program.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-muted text-text-secondary text-sm font-source rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-border text-text-primary font-nunito font-bold text-base rounded-lg hover:bg-muted transition-all duration-300"
            >
              Close
            </button>
            <button
              // onClick={() => {
              //   onRegister(program.id);
              //   onClose();
              // }}
              className="flex-1 px-6 py-3 bg-red-600 text-accent-foreground font-nunito font-bold text-base rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
            >
              Registration closed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetailModal;