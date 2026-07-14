"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedNumber({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100,
  });
  
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
  }, [springValue, decimals]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}
