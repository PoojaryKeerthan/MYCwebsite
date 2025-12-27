'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';
import { SiFacebook, SiX, SiInstagram, SiYoutube } from "react-icons/si";
import Image from 'next/image';
const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date()?.getFullYear());
  }, []);

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Members', href: '/members' },
    { label: 'Events', href: '/events' },
  ];



  const socialLinks = [
    { Icon: SiFacebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { Icon: SiX, label: 'Twitter', href: '#', color: 'hover:text-sky-400' },
    { Icon: SiInstagram, label: 'Instagram', href: 'https://www.instagram.com/_team_myc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', color: 'hover:text-pink-500' },
    { Icon: SiYoutube, label: 'YouTube', href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x- mb-4">
              <div className="relative w-34 h-16 left-8">
                <div className="w-36 h-14 sm:h-16 lg:h-40 rounded-xl overflow-hidden group-hover:ring-primary/30 transition-all duration-300">
                  <Image
                    src="/images/MYC_LOGO.png"
                    alt="Mardoli Youths Club Logo"
                    fill
                    // sizes="(min-width: 1024px) 100px, (min-width: 640px) 64px, 56px"
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl text-white leading-tight">
                  Mardoli
                </span>
                <span className="font-poppins font-semibold text-sm text-accent leading-tight">
                  Youths Club
                </span>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Empowering young minds through community engagement and leadership development in Mardoli.
            </p>
            <div className="flex gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.label}
                  href={social?.href}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300"
                  aria-label={social?.label}
                >
                  <social.Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks?.map((link) => (
                <li key={link?.href}>
                  <Link
                    href={link?.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 flex items-center gap-2"
                  >
                    <Icon name="ChevronRightIcon" size={16} />
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="MapPinIcon" size={20} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-white/80">Mardoli Narikombu grama Bantwal taluk.</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="PhoneIcon" size={20} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-white/80">8310176350</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="EnvelopeIcon" size={20} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-white/80">info@mardoliyouth.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Stay updated with our latest programs and events.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:scale-105 transition-all duration-300">
                <Icon name="PaperAirplaneIcon" size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm text-center md:text-left">
              &copy; {isHydrated ? currentYear : 2025} Mardoli Youths club. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/80 hover:text-accent text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 hover:text-accent text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;