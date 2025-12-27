'use client';

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface RegistrationModalProps {
  program: {
    id: number;
    title: string;
    category: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: RegistrationFormData) => void;
}

interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  experience: string;
  motivation: string;
  availability: string;
}

const RegistrationModal = ({ program, isOpen, onClose, onSubmit }: RegistrationModalProps) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    motivation: '',
    availability: '',
  });

  const [errors, setErrors] = useState<Partial<RegistrationFormData>>({});

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof RegistrationFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<RegistrationFormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.experience) newErrors.experience = 'Experience level is required';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation is required';
    if (!formData.availability) newErrors.availability = 'Availability is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        experience: '',
        motivation: '',
        availability: '',
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="bg-card rounded-xl shadow-brand-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-poppins font-bold text-text-primary">Program Registration</h2>
            <p className="text-sm font-source text-text-secondary mt-1">{program.title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-300"
          >
            <Icon name="XMarkIcon" size={24} className="text-text-secondary" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-source font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg font-source text-sm text-text-primary focus:outline-none focus:border-primary transition-colors duration-300 ${
                errors.fullName ? 'border-error' : 'border-border'
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-error font-source">{errors.fullName}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-source font-medium text-text-primary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border-2 rounded-lg font-source text-sm text-text-primary focus:outline-none focus:border-primary transition-colors duration-300 ${
                  errors.email ? 'border-error' : 'border-border'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-error font-source">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-source font-medium text-text-primary mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border-2 rounded-lg font-source text-sm text-text-primary focus:outline-none focus:border-primary transition-colors duration-300 ${
                  errors.phone ? 'border-error' : 'border-border'
                }`}
                placeholder="+233 XX XXX XXXX"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-error font-source">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="age" className="block text-sm font-source font-medium text-text-primary mb-2">
                Age Group *
              </label>
              <select
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border-2 rounded-lg font-source text-sm text-text-primary focus:outline-none focus:border-primary transition-colors duration-300 ${
                  errors.age ? 'border-error' : 'border-border'
                }`}
              >
                <option value="">Select age group</option>
                <option value="16-18">16-18 years</option>
                <option value="19-21">19-21 years</option>
                <option value="22-25">22-25 years</option>
              </select>
              {errors.age && (
                <p className="mt-1 text-xs text-error font-source">{errors.age}</p>
              )}
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-source font-medium text-text-primary mb-2">
                Experience Level *
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border-2 rounded-lg font-source text-sm text-text-primary focus:outline-none focus:border-primary transition-colors duration-300 ${
                  errors.experience ? 'border-error' : 'border-border'
                }`}
              >
                <option value="">Select experience level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              {errors.experience && (
                <p className="mt-1 text-xs text-error font-source">{errors.experience}</p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="availability" className="block text-sm font-source font-medium text-text-primary mb-2">
              Availability *
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg font-source text-sm text-text-primary focus:outline-none focus:border-primary transition-colors duration-300 ${
                errors.availability ? 'border-error' : 'border-border'
              }`}
            >
              <option value="">Select your availability</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
              <option value="Both">Both Weekdays & Weekends</option>
            </select>
            {errors.availability && (
              <p className="mt-1 text-xs text-error font-source">{errors.availability}</p>
            )}
          </div>

          <div>
            <label htmlFor="motivation" className="block text-sm font-source font-medium text-text-primary mb-2">
              Why do you want to join this program? *
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 bg-background border-2 rounded-lg font-source text-sm text-text-primary focus:outline-none focus:border-primary transition-colors duration-300 resize-none ${
                errors.motivation ? 'border-error' : 'border-border'
              }`}
              placeholder="Tell us about your motivation and goals..."
            />
            {errors.motivation && (
              <p className="mt-1 text-xs text-error font-source">{errors.motivation}</p>
            )}
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-border text-text-primary font-nunito font-bold text-base rounded-lg hover:bg-muted transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-accent text-accent-foreground font-nunito font-bold text-base rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;