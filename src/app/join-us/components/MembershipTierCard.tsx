import React from 'react';
import Icon from '../../../components/ui/AppIcon';

interface Benefit {
  text: string;
  included: boolean;
}

interface MembershipTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceSubtext: string;
  popular: boolean;
  benefits: Benefit[];
  icon: string;
}

interface MembershipTierCardProps {
  tier: MembershipTier;
  onSelect: (tierId: string) => void;
  isSelected: boolean;
}

const MembershipTierCard = ({ tier, onSelect, isSelected }: MembershipTierCardProps) => {
  return (
    <div
      className={`relative bg-card rounded-xl border-2 transition-all duration-300 ${
        isSelected
          ? 'border-primary shadow-brand-lg scale-105'
          : 'border-border hover:border-primary/50 hover:shadow-brand'
      } ${tier.popular ? 'ring-2 ring-accent ring-offset-2' : ''}`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-nunito font-bold shadow-brand">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={tier.icon as any} size={28} className="text-primary" />
          </div>
          {isSelected && (
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="CheckIcon" size={20} className="text-primary-foreground" />
            </div>
          )}
        </div>

        <h3 className="text-2xl font-poppins font-bold text-text-primary mb-2">{tier.name}</h3>
        <p className="text-text-secondary text-sm mb-6">{tier.description}</p>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-poppins font-bold text-primary">{tier.price}</span>
            <span className="text-text-secondary text-sm ml-2">{tier.priceSubtext}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {tier.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <Icon
                name={benefit.included ? 'CheckCircleIcon' : 'XCircleIcon'}
                size={20}
                className={benefit.included ? 'text-success mt-0.5' : 'text-muted-foreground mt-0.5'}
                variant="solid"
              />
              <span
                className={`ml-3 text-sm ${
                  benefit.included ? 'text-text-primary' : 'text-muted-foreground line-through'
                }`}
              >
                {benefit.text}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onSelect(tier.id)}
          className={`w-full py-3 rounded-lg font-nunito font-bold text-base transition-all duration-300 ${
            isSelected
              ? 'bg-primary text-primary-foreground shadow-brand-lg'
              : 'bg-muted text-text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-brand'
          }`}
        >
          {isSelected ? 'Selected' : 'Select Plan'}
        </button>
      </div>
    </div>
  );
};

export default MembershipTierCard;