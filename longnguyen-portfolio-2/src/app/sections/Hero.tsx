"use client";

import React, { useState, useEffect } from "react";
import DecryptedText from "../components/decryptedtext";
import RotatingText from "../components/rotatingtext";
import LetterGlitch from "../components/letterglitch";
import staticImage from "../assets/static.jpg";
import Image from "next/image";

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
    <div className="relative py-32">
      <div className="absolute inset-0 -z-30 opacity-5">
        <Image
          src={staticImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
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
            mainClassName="text-5xl md:text-6xl lg:text-6xl font-semibold text-[#FF611D] py-10"
            staggerFrom={"random"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-6 sm:pb-8 md:pb-8"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={4000}
          />
          <pre className="text-[0.6rem] md:text-sm lg:text-xl font-mono">
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
                    className="text-orange text-[0.6rem] md:text-sm lg:text-xl font-mono"
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
          <div className="py-20">
            <button className="border p-2 px-3 rounded-full font-RS font-semibold ">
              Let's find out more!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};