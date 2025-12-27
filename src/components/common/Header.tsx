'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';


interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { label: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { label: 'About', href: '/about', icon: 'InformationCircleIcon' },
    { label: 'Programs', href: '/programs', icon: 'AcademicCapIcon' },
    { label: 'Members', href: '/members', icon: 'UsersIcon' },
    { label: 'Events', href: '/events', icon: 'CalendarIcon' },
  ];

  const ctaButton = { label: 'Join Us', href: '/join-us' };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-card transition-all duration-300 ${isScrolled ? 'shadow-brand' : ''
          } ${className}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 lg:h-20">
            <Link href="/homepage" className="flex items-center space-x-3 flex-shrink-0">
              <div className="relative w-20 h-14 sm:h-16 lg:h-40 rounded-xl overflow-hidden group-hover:ring-primary/30 transition-all duration-300">
                <Image
                  src="/images/MYC_LOGO.png"
                  alt="Mardoli Youths Club Logo"
                  fill
                  // sizes="(min-width: 1024px) 100px, (min-width: 640px) 64px, 56px"
                  priority
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col relative right-6 lg:right-0">
                <span className="font-poppins font-bold text-lg lg:text-xl text-primary leading-tight">
                  Mardoli
                </span>
                <span className="font-poppins font-semibold text-xs lg:text-sm text-secondary leading-tight">
                  Youths Club
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center space-x-2 px-4 py-2 font-source font-medium text-sm xl:text-base transition-all duration-300 ${isActiveRoute(item.href)
                      ? 'text-primary'
                      : 'text-text-primary hover:text-primary'
                    }`}
                >
                  <Icon name={item.icon as any} size={20} />
                  <span>{item.label}</span>

                  {/* Active underline */}
                  {isActiveRoute(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                  )}

                  {/* Hover underline animation */}
                  {!isActiveRoute(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  )}
                </Link>
              ))}
            </nav>
            {/* <span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary top-16 lg:top-20"
            /> */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href={ctaButton.href}
                className="px-6 py-2.5 bg-secondary text-accent-foreground font-nunito font-bold text-sm xl:text-base rounded-lg shadow-brand hover:shadow-brand-lg hover:scale-105 transition-all duration-300"
              >
                {ctaButton.label}
              </Link>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                className="text-primary"
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background z-40 lg:hidden"
          style={{ top: '64px' }}
        >
          <nav className="flex flex-col h-full overflow-y-auto">
            <div className="flex-1 px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-source font-medium text-base transition-all duration-300 ${isActiveRoute(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-text-primary hover:bg-muted hover:text-primary'
                    }`}
                >
                  <Icon name={item.icon as any} size={24} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="p-4 border-t border-border">
              <Link
                href={ctaButton.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 bg-secondary text-accent-foreground font-nunito font-bold text-base rounded-lg shadow-brand hover:shadow-brand-lg transition-all duration-300"
              >
                {ctaButton.label}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;