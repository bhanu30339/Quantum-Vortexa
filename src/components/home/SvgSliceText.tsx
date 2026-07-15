"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const servicesList = [
  { top: "SOFTWARE HOUSE", bottom: "DEVELOPMENT" },
  { top: "IT CONSULTANT", bottom: "STRATEGY" },
  { top: "GREEN BUILDINGS", bottom: "SUSTAINABILITY" }
];

export default function SvgSliceText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<SVGTextElement>(null);
  const bottomTextRef = useRef<SVGTextElement>(null);

  useEffect(() => {
    // GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Reset state
      gsap.set(".slice-line", { strokeDasharray: "1000", strokeDashoffset: "1000" });

      let currentServiceIndex = 0;

      const tl = gsap.timeline({ 
        delay: 0.5, 
        repeat: -1, 
        repeatDelay: 1.5,
        onRepeat: () => {
          currentServiceIndex = (currentServiceIndex + 1) % servicesList.length;
          if (topTextRef.current) topTextRef.current.textContent = servicesList[currentServiceIndex].top;
          if (bottomTextRef.current) bottomTextRef.current.textContent = servicesList[currentServiceIndex].bottom;
        }
      });

      const strips = gsap.utils.toArray("#strips rect");

      // Draw lines
      tl.to(".slice-line", { duration: 0.4, strokeDashoffset: 0, ease: "power2.in", stagger: 0.25 }, "lineStart");
      
      // Erase lines
      tl.to(".slice-line", { duration: 0.4, strokeDashoffset: -1000, ease: "power2.out", stagger: 0.25 }, "lineStart+=0.25");
      
      // Slices separate
      tl.to("#slide1", { duration: 1, x: -13, y: 9, ease: "circ.out" }, "lineStart+=0.25");
      tl.to("#slide2", { duration: 1, x: 11, y: 6.5, ease: "circ.out" }, "lineStart+=0.5");
      
      // Strips fly in smoothly (simplified)
      tl.from(strips, { 
        duration: 1.2, 
        x: (i) => (i % 2 === 0 ? -1500 : 1500), 
        ease: "power3.out", 
        stagger: 0.1 
      }, "lineStart+=0.6");
      
      // Gentle floating instead of rapid jitter to save CPU
      tl.to(strips, {
        duration: 2,
        y: (i) => [-5, 5, -5, 5][i % 4],
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1
      }, "+=0.2");

      // Reset animation nicely before looping
      tl.to("#slide1", { duration: 1, x: 0, y: 0, ease: "power2.inOut" }, "+=0.5");
      tl.to("#slide2", { duration: 1, x: 0, y: 0, ease: "power2.inOut" }, "<");
      tl.to(strips, { duration: 1, opacity: 0, ease: "power2.inOut", stagger: 0.05 }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full flex items-center justify-center py-0 overflow-visible relative">
      <svg
        id="demo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-200 0 1400 650"
        className="w-full max-w-4xl max-h-[35vh] font-bold font-sans overflow-visible"
      >
        <defs>
          <pattern id="slicePattern" patternUnits="userSpaceOnUse" width="2000" height="800" x="-500" y="0">
            <text ref={topTextRef} transform="translate(1000 360)" textAnchor="middle" fontSize="140" fill="#3B82F6">
              SOFTWARE HOUSE
            </text>
          </pattern>

          <pattern id="cutPattern" patternUnits="userSpaceOnUse" width="2000" height="800" x="-500" y="0">
            <text ref={bottomTextRef} transform="translate(1000 500)" textAnchor="middle" fontSize="100" fill="#7C3AED">
              DEVELOPMENT
            </text>
          </pattern>
        </defs>

        <g fill="url(#slicePattern)">
          <polygon id="slide1" points="-500,150 551,150 -150,650 -500,650" />
          <polygon id="slide2" points="549,150 1500,150 1500,650 1450,650" />
          <polygon points="-150,650 550,150 1450,650" />
        </g>

        <g id="strips" fill="url(#cutPattern)">
          <rect x="-200" y="420" width="1400" height="31" />
          <rect x="-200" y="450" width="1400" height="21" />
          <rect x="-200" y="470" width="1400" height="21" />
          <rect x="-200" y="490" width="1400" height="30" />
          <rect x="-200" y="520" width="1400" height="90" />
        </g>

        <line className="slice-line" x1="550" y1="150" x2="-150" y2="650" strokeWidth="2" stroke="#FFFFFF" />
        <line className="slice-line" x1="550" y1="150" x2="1450" y2="650" strokeWidth="2" stroke="#FFFFFF" />
      </svg>
    </div>
  );
}
