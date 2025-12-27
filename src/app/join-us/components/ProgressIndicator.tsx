import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: Step[];
}

const ProgressIndicator = ({ currentStep, totalSteps, steps }: ProgressIndicatorProps) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-nunito font-bold text-sm lg:text-base transition-all duration-300 ${
                  currentStep > step.id
                    ? 'bg-success text-success-foreground'
                    : currentStep === step.id
                    ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {currentStep > step.id ? (
                  <Icon name="CheckIcon" size={20} />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              <div className="mt-2 text-center hidden lg:block">
                <p
                  className={`text-sm font-source font-medium ${
                    currentStep >= step.id ? 'text-text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-text-secondary mt-1">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 lg:mx-4 relative" style={{ maxWidth: '120px' }}>
                <div className="absolute inset-0 bg-muted rounded-full" />
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-500 ${
                    currentStep > step.id ? 'bg-success' : 'bg-muted'
                  }`}
                  style={{
                    width: currentStep > step.id ? '100%' : '0%',
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="lg:hidden text-center mb-6">
        <p className="text-base font-source font-medium text-text-primary">
          {steps[currentStep - 1]?.title}
        </p>
        <p className="text-sm text-text-secondary mt-1">
          {steps[currentStep - 1]?.description}
        </p>
      </div>

      <div className="bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-500 rounded-full"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      <p className="text-sm text-text-secondary text-center mt-2">
        Step {currentStep} of {totalSteps}
      </p>
    </div>
  );
};

export default ProgressIndicator;