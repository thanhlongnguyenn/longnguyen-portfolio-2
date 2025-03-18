"use client";
import React, { useEffect, useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
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
    "#333333", // base color
    "#2e2e2e", // slightly darker
    "#292929", // slightly darker
    "#242424", // slightly darker
    "#1f1f1f", // slightly darker
    "#1a1a1a", // slightly darker
    "#151515", // slightly darker
  ];

  useEffect(() => {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor =
      backgroundColors[activeCard % backgroundColors.length];
  }, [activeCard]);

  return (
    <motion.div className="relative flex flex-col lg:flex-row w-full" ref={ref}>
      <div className="w-full lg:w-[calc(100%-15rem)] pr-0 lg:pr-10">
        {content.map((item, index) => (
          <div key={item.title + index} className="py-4 md:max-h-[60vh]">
            <h2 className="font-mono font-bold text-[21.68px] mb-6">
              {item.title}
            </h2>
            <div className="font-mono text-[14.85px] mb-6">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "hidden lg:block sticky top-10 h-full w-48 overflow-hidden rounded-lg",
          contentClassName
        )}
      >
        <div className="p-4">
          <ul className="list-none space-y-2 text-xs">
            {content.map((item, index) => (
              <motion.li
                key={index}
                className={activeCard === index ? "text-orange-500" : ""}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={`#${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="hover:underline"
                >
                  {item.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};