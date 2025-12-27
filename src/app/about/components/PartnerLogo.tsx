import React from 'react';
import AppImage from '../../../components/ui/AppImage';

interface PartnerLogoProps {
  name: string;
  logo: string;
  logoAlt: string;
  category: string;
}

const PartnerLogo = ({ name, logo, logoAlt, category }: PartnerLogoProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 flex flex-col items-center justify-center text-center group">
      <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-lg">
        <AppImage
          src={logo}
          alt={logoAlt}
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <h4 className="font-poppins font-semibold text-primary mb-1">{name}</h4>
      <span className="font-source text-sm text-text-secondary">{category}</span>
    </div>
  );
};

export default PartnerLogo;