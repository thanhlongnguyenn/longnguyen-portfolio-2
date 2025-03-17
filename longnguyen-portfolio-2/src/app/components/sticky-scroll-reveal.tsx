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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map(
      (_, index) => index / (cardLength - 1)
    );
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0f172a", // slate-900
    "#000000", // black
    "#171717", // neutral-900
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

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
          "hidden lg:block sticky top-10 h-80 w-96 overflow-hidden rounded-lg",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
