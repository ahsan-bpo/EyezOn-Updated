"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const images = [
  '/images/s51.png',
  '/images/s52.png',
  '/images/s53.png',
  '/images/s54.jpg',
  '/images/s55.jpg',
  '/images/s56.png',
  '/images/s57.jpg',
  '/images/s58.jpg',
  '/images/s59.jpg',
];

const HorizontalGallery = () => {
  const scrollContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // Set mobile view for screens smaller than 768px
    };
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    if (scrollContainerRef.current && !isMobile) {
      const fullWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      setContainerWidth(fullWidth);
    }

    return () => window.removeEventListener("resize", updateIsMobile);
  }, [scrollContainerRef, isMobile]);

  // Map the vertical scroll (scrollY) to fully scroll the gallery from the start position to the last image and back
  const x = useTransform(scrollY, [0, containerWidth * 2], [0, -containerWidth]);

  return (
    <div className="text-center py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h4 className="text-sm font-semibold text-purple-600 uppercase mb-2">Portfolio</h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">One Word: Shine</h2>
        
        {/* View Portfolio Button */}
        <a href='/gallery'>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
          View Portfolio
        </button>
        </a>

        {/* Horizontal Scrolling Gallery */}
        <motion.div
          ref={scrollContainerRef}
          style={!isMobile ? { x } : {}} // Apply scroll animation only on non-mobile screens
          className={`flex mt-8 gap-6 ${isMobile ? 'overflow-x-auto' : ''} `}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden min-w-[300px] h-64 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <img src={src} alt={`Car ${index + 1}`} className="object-cover w-full h-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalGallery;
