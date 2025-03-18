"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Content {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const ScrollWork = ({ content }: { content: Content[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate which card should be active based on scroll position
      const scrollPercentage =
        (scrollPosition - containerTop + windowHeight / 2) /
        (containerHeight - windowHeight);
      const cardIndex = Math.min(
        Math.max(Math.floor(scrollPercentage * content.length), 0),
        content.length - 1
      );

      setActiveCard(cardIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="space-y-24 py-24">
        {content.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row gap-12 ${
              index === activeCard ? "opacity-100" : "opacity-40"
            } transition-opacity duration-300`}
          >
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="flex-1 min-h-[300px]">{item.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
