"use client"
import React from 'react';

export default function AnimatedSVG() {
  console.log("AnimatedSVG is rendering!");
  
  return (
    <div className="absolute h-[100dvh] max-sm:h-auto w-full -z-50">
      {/* TEST BACKGROUND */}
      <div className="absolute right-0 top-0 w-[60%] h-full bg-blue-500 opacity-30">
        <div className="text-white text-2xl p-4">SVG AREA</div>
      </div>
      
      <svg 
        viewBox="0 0 800 600" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute right-0 top-0 w-[60%] h-full" 
        style={{opacity: 1, border: '2px solid white'}}
      >
        {/* SUPER BRIGHT TEST LINES */}
        <path 
          d="M100 100 L300 200" 
          stroke="red" 
          strokeWidth="10" 
          strokeOpacity="1" 
          fill="none"
        />

        <path 
          d="M200 300 L400 400" 
          stroke="yellow" 
          strokeWidth="10" 
          strokeOpacity="1" 
          fill="none"
        />

        <path 
          d="M300 150 L500 250" 
          stroke="cyan" 
          strokeWidth="10" 
          strokeOpacity="1" 
          fill="none"
        />

        <path 
          d="M150 400 L350 500" 
          stroke="lime" 
          strokeWidth="10" 
          strokeOpacity="1" 
          fill="none"
        />

        <path 
          d="M400 100 L600 200" 
          stroke="magenta" 
          strokeWidth="10" 
          strokeOpacity="1" 
          fill="none"
        />
        
      </svg>
    </div>
  );
} 