import React from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-16 text-white text-center shadow-brand-lg">
          <Icon name="SparklesIcon" size={64} className="mx-auto mb-6 text-accent" />
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of young leaders in Mardoli District who are creating positive change. Your journey to personal growth and community impact starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/join-us"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-nunito font-bold text-base lg:text-lg rounded-lg shadow-brand-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Become a Member
              <Icon name="UserPlusIcon" size={20} className="ml-2" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-nunito font-bold text-base lg:text-lg rounded-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Programs
              <Icon name="AcademicCapIcon" size={20} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <Icon name="CheckCircleIcon" size={24} className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Free Membership</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="CheckCircleIcon" size={24} className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Expert Mentorship</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="CheckCircleIcon" size={24} className="text-accent flex-shrink-0" />
              <span className="text-sm md:text-base">Community Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;