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
      
      // Strips fly in
      tl.from(strips, { 
        duration: 1, 
        x: (i) => (i % 2 === 0 ? -2000 : 2000), 
        ease: "back.out", 
        stagger: 0.15 
      });
      
      // Strips jitter
      tl.to(strips, { 
        duration: 0.4, 
        x: (i) => [-50, 70, -70, 120][i % 4], 
        opacity: (i) => (i % 2 === 0 ? 0.5 : 0.8),
        repeat: 5, 
        repeatDelay: 0.2, 
        yoyoEase: "elastic.out(2, 0.2)", 
        ease: "back.inOut",
        stagger: -0.05 
      }, "+=1");
      
      // More jitter (Y-axis)
      tl.to(strips, {
        duration: 0.5,
        y: (i) => [-30, -10, 10, 30][i % 4],
        repeat: 3,
        repeatDelay: 0.3,
        yoyo: true,
        ease: "circ.inOut",
        stagger: 0
      }, "+=1.5");
      
      // Final crazy jitter
      tl.to(strips, {
        duration: 0.5,
        x: (i) => [-30, -160, 120, -50][i % 4],
        y: (i) => [-30, -10, 10, 30][i % 4],
        rotation: (i) => [-2, 2, -4, 4][i % 4],
        transformOrigin: "center center",
        repeat: 3,
        repeatDelay: 0.2,
        yoyo: true,
        ease: "back.inOut",
        stagger: 0.07
      }, "+=1");

      // Reset animation nicely before looping
      tl.to("#slide1", { duration: 1, x: 0, y: 0, ease: "power2.inOut" }, "+=1");
      tl.to("#slide2", { duration: 1, x: 0, y: 0, ease: "power2.inOut" }, "<");
      tl.to(strips, { duration: 1, x: 2000, opacity: 0, ease: "power2.inOut", stagger: 0.1 }, "<");

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
