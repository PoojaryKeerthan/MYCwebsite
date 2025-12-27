'use client';

import React, { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';
import ApplicationTypeSelector from './ApplicationTypeSelector';
import MembershipTierCard from './MembershipTierCard';
import ProgressIndicator from './ProgressIndicator';

interface FormData {
  applicationType: string;
  membershipTier: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  region: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  guardianConsent: boolean;
  interests: string[];
  experience: string;
  motivation: string;
  availability: string[];
  organizationName: string;
  organizationType: string;
  contactPerson: string;
  partnershipGoals: string;
  graduationYear: string;
  currentOccupation: string;
  mentorshipAreas: string[];
  commitmentLevel: string;
  agreeToTerms: boolean;
  newsletter: boolean;
}

const JoinUsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    applicationType: '',
    membershipTier: '',
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    region: '',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    guardianConsent: false,
    interests: [],
    experience: '',
    motivation: '',
    availability: [],
    organizationName: '',
    organizationType: '',
    contactPerson: '',
    partnershipGoals: '',
    graduationYear: '',
    currentOccupation: '',
    mentorshipAreas: [],
    commitmentLevel: '',
    agreeToTerms: false,
    newsletter: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const membershipTiers = [
    {
      id: 'basic',
      name: 'Basic Member',
      description: 'Perfect for getting started with our community',
      price: 'GHS 50',
      priceSubtext: 'per year',
      popular: false,
      icon: 'UserIcon',
      benefits: [
        { text: 'Access to monthly social events', included: true },
        { text: 'Community newsletter subscription', included: true },
        { text: 'Member directory access', included: true },
        { text: 'Leadership training workshops', included: false },
        { text: 'Priority event registration', included: false },
        { text: 'Mentorship program access', included: false },
      ],
    },
    {
      id: 'active',
      name: 'Active Member',
      description: 'For those ready to engage deeply with our programs',
      price: 'GHS 120',
      priceSubtext: 'per year',
      popular: true,
      icon: 'SparklesIcon',
      benefits: [
        { text: 'Access to monthly social events', included: true },
        { text: 'Community newsletter subscription', included: true },
        { text: 'Member directory access', included: true },
        { text: 'Leadership training workshops', included: true },
        { text: 'Priority event registration', included: true },
        { text: 'Mentorship program access', included: false },
      ],
    },
    {
      id: 'premium',
      name: 'Premium Member',
      description: 'Complete access to all programs and exclusive benefits',
      price: 'GHS 200',
      priceSubtext: 'per year',
      popular: false,
      icon: 'StarIcon',
      benefits: [
        { text: 'Access to monthly social events', included: true },
        { text: 'Community newsletter subscription', included: true },
        { text: 'Member directory access', included: true },
        { text: 'Leadership training workshops', included: true },
        { text: 'Priority event registration', included: true },
        { text: 'Mentorship program access', included: true },
      ],
    },
  ];

  const steps = [
    { id: 1, title: 'Application Type', description: 'Choose your path' },
    { id: 2, title: 'Membership Tier', description: 'Select your level' },
    { id: 3, title: 'Personal Info', description: 'Tell us about you' },
    { id: 4, title: 'Additional Details', description: 'Complete your profile' },
    { id: 5, title: 'Review & Submit', description: 'Confirm details' },
  ];

  const interestOptions = [
    'Leadership Development',
    'Community Service',
    'Sports & Fitness',
    'Arts & Culture',
    'Educational Workshops',
    'Environmental Projects',
    'Technology & Innovation',
    'Public Speaking',
  ];

  const availabilityOptions = ['Weekday Mornings', 'Weekday Afternoons', 'Weekday Evenings', 'Weekends'];

  const mentorshipAreas = [
    'Career Guidance',
    'Academic Support',
    'Leadership Skills',
    'Personal Development',
    'Business & Entrepreneurship',
    'Creative Arts',
  ];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    const currentArray = formData[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    handleInputChange(field, newArray);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1 && !formData.applicationType) {
      newErrors.applicationType = 'Please select an application type';
    }

    if (step === 2 && formData.applicationType === 'youth' && !formData.membershipTier) {
      newErrors.membershipTier = 'Please select a membership tier';
    }

    if (step === 3) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) newErrors.gender = 'Gender is required';
    }

    if (step === 4) {
      if (formData.applicationType === 'youth') {
        if (formData.interests.length === 0) newErrors.interests = 'Select at least one interest';
        if (!formData.motivation.trim()) newErrors.motivation = 'Please share your motivation';
      } else if (formData.applicationType === 'volunteer') {
        if (formData.availability.length === 0) newErrors.availability = 'Select your availability';
        if (!formData.experience.trim()) newErrors.experience = 'Please share your experience';
      } else if (formData.applicationType === 'partnership') {
        if (!formData.organizationName.trim()) newErrors.organizationName = 'Organization name is required';
        if (!formData.organizationType) newErrors.organizationType = 'Organization type is required';
        if (!formData.partnershipGoals.trim()) newErrors.partnershipGoals = 'Partnership goals are required';
      } else if (formData.applicationType === 'alumni') {
        if (!formData.graduationYear) newErrors.graduationYear = 'Graduation year is required';
        if (formData.mentorshipAreas.length === 0)
          newErrors.mentorshipAreas = 'Select at least one mentorship area';
      }
    }

    if (step === 5 && !formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 1 && formData.applicationType !== 'youth') {
        setCurrentStep(3);
      } else {
        setCurrentStep((prev) => Math.min(prev + 1, 5));
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep === 3 && formData.applicationType !== 'youth') {
      setCurrentStep(1);
    } else {
      setCurrentStep((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setCurrentStep(1);
      setFormData({
        applicationType: '',
        membershipTier: '',
        fullName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        city: '',
        region: '',
        guardianName: '',
        guardianPhone: '',
        guardianEmail: '',
        guardianConsent: false,
        interests: [],
        experience: '',
        motivation: '',
        availability: [],
        organizationName: '',
        organizationType: '',
        contactPerson: '',
        partnershipGoals: '',
        graduationYear: '',
        currentOccupation: '',
        mentorshipAreas: [],
        commitmentLevel: '',
        agreeToTerms: false,
        newsletter: true,
      });
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20 lg:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded-lg w-3/4 mx-auto" />
              <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-48 bg-muted rounded-xl" />
                <div className="h-48 bg-muted rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background pt-20 lg:pt-24 pb-16 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="CheckIcon" size={40} className="text-success-foreground" />
          </div>
          <h2 className="text-3xl font-poppins font-bold text-text-primary mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-text-secondary mb-6">
            Thank you for your interest in joining Mardoli Youth Hub. We&apos;ll review your application and get
            back to you within 3-5 business days via email.
          </p>
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-text-secondary">
              Check your email ({formData.email}) for a confirmation message and next steps.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 lg:pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-poppins font-bold text-text-primary mb-4">
              Join Our Community
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Take the first step towards personal growth, leadership development, and making a positive impact in
              our community
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8 mb-8">
            <ProgressIndicator currentStep={currentStep} totalSteps={5} steps={steps} />
          </div>

          <div className="bg-card rounded-2xl shadow-brand-lg p-6 lg:p-8">
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-poppins font-bold text-text-primary mb-2">
                  Select Application Type
                </h2>
                <p className="text-text-secondary mb-8">Choose the option that best describes your interest</p>
                <ApplicationTypeSelector
                  selectedType={formData.applicationType}
                  onTypeSelect={(type) => handleInputChange('applicationType', type)}
                />
                {errors.applicationType && (
                  <p className="text-error text-sm mt-4 flex items-center">
                    <Icon name="ExclamationCircleIcon" size={16} className="mr-1" />
                    {errors.applicationType}
                  </p>
                )}
              </div>
            )}

            {currentStep === 2 && formData.applicationType === 'youth' && (
              <div>
                <h2 className="text-2xl font-poppins font-bold text-text-primary mb-2">
                  Choose Your Membership Tier
                </h2>
                <p className="text-text-secondary mb-8">
                  Select the membership level that aligns with your goals and commitment
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {membershipTiers.map((tier) => (
                    <MembershipTierCard
                      key={tier.id}
                      tier={tier}
                      onSelect={(id) => handleInputChange('membershipTier', id)}
                      isSelected={formData.membershipTier === tier.id}
                    />
                  ))}
                </div>
                {errors.membershipTier && (
                  <p className="text-error text-sm mt-4 flex items-center">
                    <Icon name="ExclamationCircleIcon" size={16} className="mr-1" />
                    {errors.membershipTier}
                  </p>
                )}
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-poppins font-bold text-text-primary mb-2">Personal Information</h2>
                <p className="text-text-secondary mb-8">Please provide your basic details</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-source font-medium text-text-primary mb-2">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.fullName ? 'border-error' : 'border-input'
                      } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-error text-xs mt-1 flex items-center">
                        <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-source font-medium text-text-primary mb-2">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-error' : 'border-input'
                      } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-error text-xs mt-1 flex items-center">
                        <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-source font-medium text-text-primary mb-2">
                      Phone Number <span className="text-error">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phone ? 'border-error' : 'border-input'
                      } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                      placeholder="+233 XX XXX XXXX"
                    />
                    {errors.phone && (
                      <p className="text-error text-xs mt-1 flex items-center">
                        <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-source font-medium text-text-primary mb-2">
                      Date of Birth <span className="text-error">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.dateOfBirth ? 'border-error' : 'border-input'
                      } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-error text-xs mt-1 flex items-center">
                        <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-source font-medium text-text-primary mb-2">
                      Gender <span className="text-error">*</span>
                    </label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.gender ? 'border-error' : 'border-input'
                      } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    {errors.gender && (
                      <p className="text-error text-xs mt-1 flex items-center">
                        <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                        {errors.gender}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-source font-medium text-text-primary mb-2">
                      City/Town
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-source font-medium text-text-primary mb-2">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Enter your full address"
                    />
                  </div>
                </div>

                {formData.applicationType === 'youth' && (
                  <div className="mt-8 p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-poppins font-semibold text-text-primary mb-4 flex items-center">
                      <Icon name="ShieldCheckIcon" size={24} className="text-primary mr-2" />
                      Parent/Guardian Information (For applicants under 18)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-source font-medium text-text-primary mb-2">
                          Guardian Name
                        </label>
                        <input
                          type="text"
                          value={formData.guardianName}
                          onChange={(e) => handleInputChange('guardianName', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Guardian's full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-source font-medium text-text-primary mb-2">
                          Guardian Phone
                        </label>
                        <input
                          type="tel"
                          value={formData.guardianPhone}
                          onChange={(e) => handleInputChange('guardianPhone', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.guardianConsent}
                            onChange={(e) => handleInputChange('guardianConsent', e.target.checked)}
                            className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-ring"
                          />
                          <span className="text-sm text-text-primary">
                            I confirm that my parent/guardian consents to my participation in Mardoli Youth Hub
                            activities
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-poppins font-bold text-text-primary mb-2">Additional Details</h2>
                <p className="text-text-secondary mb-8">Help us understand your interests and goals</p>

                {formData.applicationType === 'youth' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-source font-medium text-text-primary mb-3">
                        Areas of Interest <span className="text-error">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {interestOptions.map((interest) => (
                          <label key={interest} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.interests.includes(interest)}
                              onChange={() => handleCheckboxChange('interests', interest)}
                              className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-ring"
                            />
                            <span className="text-sm text-text-primary">{interest}</span>
                          </label>
                        ))}
                      </div>
                      {errors.interests && (
                        <p className="text-error text-xs mt-2 flex items-center">
                          <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                          {errors.interests}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-source font-medium text-text-primary mb-2">
                        Why do you want to join Mardoli Youth Hub? <span className="text-error">*</span>
                      </label>
                      <textarea
                        value={formData.motivation}
                        onChange={(e) => handleInputChange('motivation', e.target.value)}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.motivation ? 'border-error' : 'border-input'
                        } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring resize-none`}
                        placeholder="Share your motivation and what you hope to achieve..."
                      />
                      {errors.motivation && (
                        <p className="text-error text-xs mt-1 flex items-center">
                          <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                          {errors.motivation}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {formData.applicationType === 'volunteer' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-source font-medium text-text-primary mb-3">
                        Availability <span className="text-error">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {availabilityOptions.map((option) => (
                          <label key={option} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.availability.includes(option)}
                              onChange={() => handleCheckboxChange('availability', option)}
                              className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-ring"
                            />
                            <span className="text-sm text-text-primary">{option}</span>
                          </label>
                        ))}
                      </div>
                      {errors.availability && (
                        <p className="text-error text-xs mt-2 flex items-center">
                          <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                          {errors.availability}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-source font-medium text-text-primary mb-2">
                        Previous Volunteer Experience <span className="text-error">*</span>
                      </label>
                      <textarea
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.experience ? 'border-error' : 'border-input'
                        } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring resize-none`}
                        placeholder="Describe any relevant volunteer or community service experience..."
                      />
                      {errors.experience && (
                        <p className="text-error text-xs mt-1 flex items-center">
                          <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                          {errors.experience}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {formData.applicationType === 'partnership' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-source font-medium text-text-primary mb-2">
                          Organization Name <span className="text-error">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.organizationName}
                          onChange={(e) => handleInputChange('organizationName', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.organizationName ? 'border-error' : 'border-input'
                          } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                          placeholder="Your organization name"
                        />
                        {errors.organizationName && (
                          <p className="text-error text-xs mt-1 flex items-center">
                            <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                            {errors.organizationName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-source font-medium text-text-primary mb-2">
                          Organization Type <span className="text-error">*</span>
                        </label>
                        <select
                          value={formData.organizationType}
                          onChange={(e) => handleInputChange('organizationType', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.organizationType ? 'border-error' : 'border-input'
                          } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                        >
                          <option value="">Select type</option>
                          <option value="business">Business/Corporate</option>
                          <option value="ngo">NGO/Non-Profit</option>
                          <option value="government">Government Agency</option>
                          <option value="educational">Educational Institution</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.organizationType && (
                          <p className="text-error text-xs mt-1 flex items-center">
                            <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                            {errors.organizationType}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-source font-medium text-text-primary mb-2">
                          Contact Person
                        </label>
                        <input
                          type="text"
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Primary contact person"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-source font-medium text-text-primary mb-2">
                        Partnership Goals <span className="text-error">*</span>
                      </label>
                      <textarea
                        value={formData.partnershipGoals}
                        onChange={(e) => handleInputChange('partnershipGoals', e.target.value)}
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.partnershipGoals ? 'border-error' : 'border-input'
                        } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring resize-none`}
                        placeholder="Describe your partnership objectives and how you envision collaborating with us..."
                      />
                      {errors.partnershipGoals && (
                        <p className="text-error text-xs mt-1 flex items-center">
                          <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                          {errors.partnershipGoals}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {formData.applicationType === 'alumni' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-source font-medium text-text-primary mb-2">
                          Year of Graduation <span className="text-error">*</span>
                        </label>
                        <input
                          type="number"
                          value={formData.graduationYear}
                          onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.graduationYear ? 'border-error' : 'border-input'
                          } bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring`}
                          placeholder="YYYY"
                          min="2000"
                          max="2024"
                        />
                        {errors.graduationYear && (
                          <p className="text-error text-xs mt-1 flex items-center">
                            <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                            {errors.graduationYear}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-source font-medium text-text-primary mb-2">
                          Current Occupation
                        </label>
                        <input
                          type="text"
                          value={formData.currentOccupation}
                          onChange={(e) => handleInputChange('currentOccupation', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Your current role/profession"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-source font-medium text-text-primary mb-3">
                        Mentorship Areas <span className="text-error">*</span>
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {mentorshipAreas.map((area) => (
                          <label key={area} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.mentorshipAreas.includes(area)}
                              onChange={() => handleCheckboxChange('mentorshipAreas', area)}
                              className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-ring"
                            />
                            <span className="text-sm text-text-primary">{area}</span>
                          </label>
                        ))}
                      </div>
                      {errors.mentorshipAreas && (
                        <p className="text-error text-xs mt-2 flex items-center">
                          <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                          {errors.mentorshipAreas}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-source font-medium text-text-primary mb-2">
                        Commitment Level
                      </label>
                      <select
                        value={formData.commitmentLevel}
                        onChange={(e) => handleInputChange('commitmentLevel', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-text-primary focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select commitment level</option>
                        <option value="occasional">Occasional (Few times a year)</option>
                        <option value="monthly">Monthly (Once a month)</option>
                        <option value="regular">Regular (2-3 times a month)</option>
                        <option value="dedicated">Dedicated (Weekly)</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-2xl font-poppins font-bold text-text-primary mb-2">Review & Submit</h2>
                <p className="text-text-secondary mb-8">Please review your information before submitting</p>

                <div className="space-y-6">
                  <div className="bg-muted rounded-lg p-6">
                    <h3 className="text-lg font-poppins font-semibold text-text-primary mb-4">
                      Application Summary
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-text-secondary">Application Type</p>
                        <p className="text-base font-source font-medium text-text-primary capitalize">
                          {formData.applicationType.replace('-', ' ')}
                        </p>
                      </div>
                      {formData.membershipTier && (
                        <div>
                          <p className="text-sm text-text-secondary">Membership Tier</p>
                          <p className="text-base font-source font-medium text-text-primary capitalize">
                            {formData.membershipTier} Member
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm text-text-secondary">Full Name</p>
                        <p className="text-base font-source font-medium text-text-primary">{formData.fullName}</p>
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">Email</p>
                        <p className="text-base font-source font-medium text-text-primary">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">Phone</p>
                        <p className="text-base font-source font-medium text-text-primary">{formData.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-text-secondary">Date of Birth</p>
                        <p className="text-base font-source font-medium text-text-primary">
                          {formData.dateOfBirth}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                        className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-ring mt-0.5"
                      />
                      <span className="text-sm text-text-primary">
                        I agree to the{' '}
                        <a href="#" className="text-primary hover:underline">
                          Terms and Conditions
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{' '}
                        of Mardoli Youth Hub <span className="text-error">*</span>
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-error text-xs flex items-center">
                        <Icon name="ExclamationCircleIcon" size={12} className="mr-1" />
                        {errors.agreeToTerms}
                      </p>
                    )}

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                        className="w-5 h-5 rounded border-input text-primary focus:ring-2 focus:ring-ring mt-0.5"
                      />
                      <span className="text-sm text-text-primary">
                        I would like to receive updates, newsletters, and event notifications from Mardoli Youth
                        Hub
                      </span>
                    </label>
                  </div>

                  <div className="bg-accent/10 border border-accent rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="InformationCircleIcon" size={24} className="text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-source font-medium text-text-primary mb-1">
                          What happens next?
                        </p>
                        <ul className="text-sm text-text-secondary space-y-1">
                          <li>• You&apos;ll receive a confirmation email within 24 hours</li>
                          <li>• Our team will review your application within 3-5 business days</li>
                          <li>• We&apos;ll contact you via email with the next steps</li>
                          <li>• Welcome package will be sent upon approval</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 px-6 py-3 rounded-lg border border-border text-text-primary font-nunito font-semibold hover:bg-muted transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="ChevronLeftIcon" size={20} />
                <span>Previous</span>
              </button>

              {currentStep < 5 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-nunito font-bold hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Next Step</span>
                  <Icon name="ChevronRightIcon" size={20} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center space-x-2 px-8 py-3 rounded-lg bg-success text-success-foreground font-nunito font-bold hover:shadow-brand-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={20} />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsInteractive;