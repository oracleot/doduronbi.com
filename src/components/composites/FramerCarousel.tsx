'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Slide1ImgWebp from '@/images/clients/And Digital 450.webp';
import Slide1ImgPng from '@/images/clients/And Digital 450.png';
import Slide2ImgWebp from '@/images/clients/Brightpage 450.webp';
import Slide2ImgPng from '@/images/clients/Brightpage Image.png';
import Slide3ImgWebp from '@/images/clients/Energy 450.webp';
import Slide3ImgPng from '@/images/clients/Energy 450.png';
import Slide4ImgWebp from '@/images/clients/Heineken 450.webp';
import Slide4ImgPng from '@/images/clients/Heineken 450.png';
import Slide5ImgWebp from '@/images/clients/Lloyds Bank.webp';
import Slide5ImgPng from '@/images/clients/Lloyds Bank.png';
import Slide6ImgWebp from '@/images/clients/Tua 450.webp';
import Slide6ImgPng from '@/images/clients/Tua 450.png';
import CustomImage from './CustomImage';

const FraserCarouselComponent = () => {
  const [x, setX] = useState(0); // Track translateX position
  const speed = 1; // Control speed of the scroll
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the container
  const [containerWidth, setContainerWidth] = useState(0); // Store the width of the container

  // Calculate the width of the container (total scrollable content width)
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth / 2); // Divide by 2 since we're duplicating the content
      }
    };

    updateContainerWidth(); // Initial width calculation
    window.addEventListener('resize', updateContainerWidth); // Recalculate on resize

    return () => {
      window.removeEventListener('resize', updateContainerWidth);
    };
  }, []);

  // Animate the translateX value continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setX((prevX) => {
        const newX = prevX - speed; // Move the carousel to the left
        // If the logos are completely out of view, reset the translateX
        if (Math.abs(newX) >= containerWidth) {
          return 0; // Reset to the start position
        }
        return newX;
      });
    }, 16); // ~60fps for smooth scrolling

    return () => clearInterval(interval);
  }, [speed, containerWidth]);

  return (
    <div className='overflow-hidden'>
      <motion.div
        ref={containerRef}
        className='flex grayscale'
        style={{
          transform: `translateX(${x}px)`, // Only control translateX here
          transition: 'transform 0ms linear', // Prevent transition delay for smooth movement
        }}>
        {/* Logos */}
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide1ImgWebp,
              png: Slide1ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide2ImgWebp,
              png: Slide2ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide3ImgWebp,
              png: Slide3ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide4ImgWebp,
              png: Slide4ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide5ImgWebp,
              png: Slide5ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide6ImgWebp,
              png: Slide6ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>

        {/* Duplicate logos for continuous scrolling */}
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide1ImgWebp,
              png: Slide1ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide2ImgWebp,
              png: Slide2ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide3ImgWebp,
              png: Slide3ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide4ImgWebp,
              png: Slide4ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide5ImgWebp,
              png: Slide5ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
        <div className='flex-shrink-0 w-[300px] h-[200px] flex items-center justify-center'>
          <CustomImage
            imgSrcObj={{
              webp: Slide6ImgWebp,
              png: Slide6ImgPng,
            }}
            width={150}
            height={100}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FraserCarouselComponent;
