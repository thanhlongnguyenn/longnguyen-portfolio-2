"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.1", "end end"],
  });
  const cardLength = content.length;

  useEffect(() => {
    const handleScroll = () => {
      const cardsBreakpoints = content.map(
        (_, index) => index / (cardLength - 1)
      );
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(scrollYProgress.get() - breakpoint);
          if (distance < Math.abs(scrollYProgress.get() - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0
      );
      setActiveCard(closestBreakpointIndex);
    };

    const unsubscribe = scrollYProgress.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollYProgress, content, cardLength]);

  return (
    <motion.div className="relative flex flex-col lg:flex-row w-full" ref={ref}>
      <div className="w-full lg:w-[calc(100%-28rem)] pr-0 lg:pr-10">
        {content.map((item, index) => (
          <div key={item.title + index} className="min-h-screen py-16">
            <motion.h2
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="font-mono font-bold text-[21.68px] mb-6"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.3,
              }}
              className="font-mono text-[14.85px] leading-[1.3] mb-6"
            >
              {item.description}
            </motion.p>
            <div className="lg:hidden">{item.content}</div>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "hidden lg:block sticky top-10 h-80 w-96 rounded-lg",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};