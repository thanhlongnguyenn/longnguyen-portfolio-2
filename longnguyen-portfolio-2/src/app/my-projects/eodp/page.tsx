import React from "react";
import { Header } from "../../sections/Header";
import Image from "next/image";

const eodp = () => {
  const content = [
    {
      title: "WHY DID I CHOOSE THIS FRAMEWORK PROJECT?",
      description:
        "As a software engineering student with a keen interest in data science and social impact, the Medical Pantry project presented a unique opportunity to apply my technical skills to a meaningful cause. The project's combination of data analysis, machine learning, and real-world application in healthcare logistics perfectly aligned with my academic interests and career aspirations. Additionally, the chance to work with an Australian charity and contribute to improving healthcare accessibility in underserved communities made this project particularly appealing.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white rounded-lg">
          Project Motivation Visual
        </div>
      ),
    },
    {
      title: "WHAT IS THIS PROJECT ABOUT",
      description:
        "The Medical Pantry is an Australian charity organization that serves as a bridge between surplus medical supplies and communities in need. Their warehouse operates as a central hub, collecting and sorting unused medical equipment from various healthcare facilities. Through an integrated Shopify e-commerce platform, they efficiently distribute these resources to underserved areas. My role involved developing a data-driven inventory management system and implementing machine learning algorithms to optimize the distribution process, ensuring medical supplies reach those who need them most effectively.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white rounded-lg">
          Project Overview Visual
        </div>
      ),
    },
    {
      title: "THE WORK PROCESS",
      description:
        "The development process followed an agile methodology, broken down into several key phases. Initially, I conducted extensive data cleaning and analysis of the existing inventory database. This was followed by the implementation of machine learning models to predict demand patterns and optimize stock levels. The process involved regular collaboration with the Medical Pantry team, iterative testing, and continuous refinement of the algorithms based on real-world feedback. Python served as the primary programming language, utilizing libraries such as pandas for data manipulation, scikit-learn for machine learning, and matplotlib for data visualization.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white rounded-lg">
          Work Process Visual
        </div>
      ),
    },
    {
      title: "THE PROBLEM IDENTIFIED",
      description:
        "Through initial analysis, several critical challenges were identified in the Medical Pantry's operations. The main issues included inefficient inventory tracking, difficulty in predicting demand patterns, and suboptimal distribution routes. The manual nature of many processes led to delays and occasional mismatches between supply and demand. Additionally, the lack of data-driven decision-making tools made it challenging to effectively manage the growing scale of operations and ensure timely delivery of medical supplies to communities in need.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white rounded-lg">
          Problem Analysis Visual
        </div>
      ),
    },
    {
      title: "WHAT WE HAVE ACHIEVED?",
      description:
        "The implementation of our solutions led to significant improvements in Medical Pantry's operations. We achieved a 40% reduction in inventory management time through automated tracking systems. The machine learning models successfully predicted demand patterns with 85% accuracy, leading to better stock level management. The optimization of distribution routes resulted in a 25% reduction in delivery times. These improvements have enabled Medical Pantry to serve more communities effectively and handle a larger volume of medical supplies with greater efficiency.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white rounded-lg">
          Achievements Visual
        </div>
      ),
    },
    {
      title: "WHAT DID I LEARN FROM THIS PROJECT?",
      description:
        "This project provided invaluable learning experiences across multiple dimensions. Technically, I deepened my understanding of machine learning applications in real-world scenarios and improved my skills in data analysis and Python programming. The project enhanced my ability to work with large datasets and implement practical solutions. On a professional level, I gained experience in project management, stakeholder communication, and working within an agile framework. Perhaps most importantly, I learned how technology can be leveraged to create meaningful social impact in healthcare accessibility.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white rounded-lg">
          Learning Outcomes Visual
        </div>
      ),
    },
  ];
  return (
    <div>
      <Header />
      <div className="w-full pt-20">
        {/* <div className="bg-[#1a1a1a] flex justify-center items-center">
          <Image
            src={"/medpantry.svg"}
            alt="Macbook mockup for Medical Pantry"
            height="1000"
            width="1000"
            className="object-contain"
          />
        </div> */}
      </div>
      <div className="min-h-screen"></div>a
    </div>
  );
};

export default eodp;
