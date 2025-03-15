"use client";

import React, { useState, useEffect } from "react";
import DecryptedText from "../components/decryptedtext";
import RotatingText from "../components/rotatingtext";
import staticImage from "../assets/static.jpg";
import Image from "next/image";
import AnimatedContent from "../components/animatedcontent";
import FuzzyText from "../components/fuzzytext";

export const Hero = () => {
  const jsonData = {
    about_me: {
      name: "Long Nguyen",
      "career-in-progress": "Software Development",
      "current-career-focus": "Fullstack Web Developer",
    },
  };

  const jsonString = JSON.stringify(jsonData, null, 2);
  const animatedValues = [
    jsonData.about_me.name,
    jsonData.about_me["career-in-progress"],
    jsonData.about_me["current-career-focus"],
  ];

  const formattedJsonString = jsonString
    .replace(jsonData.about_me.name, "___NAME___")
    .replace(
      jsonData.about_me["career-in-progress"],
      "___CAREER_IN_PROGRESS___"
    )
    .replace(
      jsonData.about_me["current-career-focus"],
      "___CURRENT_CAREER_FOCUS___"
    );

  return (
    <div className="relative pt-24 md:pt-32 lg:pt-32">
      <div className="relative z-10">
        <div className="flex flex-col items-center">
          <RotatingText
            texts={[
              "Hello!",
              "Bonjour!",
              "Hola!",
              "你好!",
              "Ciao!",
              "こんにちは!",
              "안녕하세요!",
              "Xin chào!",
            ]}
            mainClassName="text-5xl md:text-6xl lg:text-6xl font-semibold text-[#FF611D] py-10 font-sans"
            staggerFrom={"random"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-6 sm:pb-8 md:pb-8"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
          />
          <AnimatedContent
            distance={200}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="bg-[#1a1a1a] rounded-[8px] pt-3.5 pb-3.5 inline-block relative shadow-xl hover:shadow-2xl transition-shadow duration-200">
              {/* macOS window controls */}
              <div className="absolute top-2 left-3 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <pre className="text-[0.72rem] md:text-[1rem] lg:text-[1.2rem] font-mono mt-5 pl-4 pr-4">
                {formattedJsonString.split(/(___.*?___)/).map((part, index) => {
                  if (part.startsWith("___") && part.endsWith("___")) {
                    const valueIndex = [
                      "___NAME___",
                      "___CAREER_IN_PROGRESS___",
                      "___CURRENT_CAREER_FOCUS___",
                    ].indexOf(part);
                    const value = animatedValues[valueIndex];
                    return (
                      <DecryptedText
                        key={index}
                        text={value}
                        animateOn="both"
                        className="text-orange text-[0.72rem] md:text-[1rem] lg:text-[1.2rem] font-mono"
                        parentClassName=""
                        revealDirection="start"
                        speed={150}
                        sequential={true}
                        maxIterations={10}
                      />
                    );
                  }
                  return part;
                })}
              </pre>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            config={{ tension: 70, friction: 13 }}
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={1800}
          >
            <div className="pt-24">
              <button className="border hover:border-[#FF611D] hover:text-[#FF611D] hover:shadow-md transition duration-200 p-2 px-3 rounded-full font-semibold">
                Let's find out more!
              </button>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};
