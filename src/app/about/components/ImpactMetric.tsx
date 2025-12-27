'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface ImpactMetricProps {
  value: number;
  label: string;
  icon: string;
  suffix?: string;
  prefix?: string;
}

const ImpactMetric = ({ value, label, icon, suffix = '', prefix = '' }: ImpactMetricProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isHydrated]);

  useEffect(() => {
    if (!isVisible || !isHydrated) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value, isHydrated]);

  if (!isHydrated) {
    return (
      <div ref={elementRef} className="text-center p-6 bg-card rounded-xl shadow-brand">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name={icon as any} size={32} className="text-white" />
        </div>
        <div className="font-poppins font-bold text-4xl text-primary mb-2">
          {prefix}{value}{suffix}
        </div>
        <p className="font-source text-text-secondary">{label}</p>
      </div>
    );
  }

  return (
    <div ref={elementRef} className="text-center p-6 bg-card rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={icon as any} size={32} className="text-white" />
      </div>
      <div className="font-poppins font-bold text-4xl text-primary mb-2">
        {prefix}{count}{suffix}
      </div>
      <p className="font-source text-text-secondary">{label}</p>
    </div>
  );
};

export default ImpactMetric;