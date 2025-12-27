'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface StatItem {
  icon: string;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

interface ImpactStatsProps {
  stats: StatItem[];
}

const ImpactStats = ({ stats }: ImpactStatsProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isHydrated]);

  useEffect(() => {
    if (!isVisible || !isHydrated) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.floor(increment * currentStep), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible, isHydrated, stats]);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Community Impact
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Real numbers, real change. See how we're transforming lives in Panemangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} mb-4`}>
                <Icon name={stat.icon as any} size={32} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isHydrated ? counts[index] : 0}{stat.suffix}
              </div>
              <div className="text-base md:text-lg text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;