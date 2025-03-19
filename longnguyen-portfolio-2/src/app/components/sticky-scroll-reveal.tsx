"use client";
import React, { useEffect, useRef} from "react";
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
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (ref.current) {
      setTimeout(() => {
        const sections = ref.current?.querySelectorAll("div[id]") || [];
        const middleOfViewport = window.innerHeight / 2;

        let closestSectionIndex = 0;
        let closestDistance = Infinity;

        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - middleOfViewport);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSectionIndex = index;
          }
        });

        setActiveCard(closestSectionIndex);
      }, 50); // slight delay to allow layout update
    }
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

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center"});
    }
  };

  return (
    <motion.div className="relative flex flex-col lg:flex-row w-full" ref={ref}>
      <div className="w-full lg:w-[calc(100%-15rem)] pr-0 lg:pr-10">
        {content.map((item, index) => (
          <div
            key={item.title + index}
            id={item.title.replace(/\s+/g, "-").toLowerCase()}
            className="py-4 md:max-h-[100vh]"
          >
            <h2 className="font-mono font-bold text-[21.68px] mb-6 text-orange">
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
                  onClick={(event) => handleClick(event, item.title.replace(/\s+/g, "-").toLowerCase())}
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