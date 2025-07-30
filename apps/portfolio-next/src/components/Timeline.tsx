'use client';
import { useEffect } from 'react';
import { setupScrollAnimations } from '../utils/scroll-animate';
import React from 'react';
import { TimelineItem } from './TimelineItem';

export interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  credlyUrl?: string;
  siteUrl?: string; // Lien du site pour les expériences professionnelles
}

export interface TimelineProps {
  title: string;
  subtitle: string;
  items: TimelineItemProps[];
}

export default function Timeline({ title, subtitle, items }: TimelineProps) {
  useEffect(() => {
    setupScrollAnimations();
  }, []);
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="section-header text-center">
          <p className="fade-in-start subtitle-gradient">{subtitle}</p>
          <h2 className="fade-in-start text-4xl font-bold text-gray-800 dark:text-gray-100 mt-2">{title}</h2>
        </div>
        <div className="mt-12 relative">
          {/* Timeline line */}
          {/* Ligne centrale à gauche sur mobile, au centre sur sm+ (orange) */}
          <div className="block sm:hidden absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-[#FD9800] to-[#ff6b35]"></div>
          <div className="hidden sm:block absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-[#FD9800] to-[#ff6b35] transform -translate-x-1/2"></div>
          {items.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
} 