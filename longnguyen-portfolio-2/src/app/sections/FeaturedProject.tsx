"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../components/projectcards";

export function FeaturedProject() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="flex flex-col items-center justify-center pt-28 lg:pt-34">
      <h1 className="font-bold text-[30px]">FEATURED PROJECTS</h1>
      <h2 className="font-semibold text-lg font-mono text-[#FF611D]">
        EXPLORE MY WORK
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const MedPantryContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Reimagining medical supply management. Our team built a seamless,
        virtual warehouse system for a local charity, making donation tracking
        smarter and more efficient.{" "}
      </p>
      <Image
        src="https://i.imgur.com/xzMbpOz.png"
        alt="Macbook mockup for Medical Pantry"
        height="500"
        width="500"
        className="md:h-1/2 pt-5 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};
const EODPContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Turning stories into blockbusters. Using machine learning, we analysed
        over 18,000 book titles to predict which ones have the potential to
        become high-revenue films—empowering studios with smarter, data-driven
        decisions.
      </p>
      <Image
        src="https://i.imgur.com/xzMbpOz.png"
        alt="Macbook mockup for Medical Pantry"
        height="500"
        width="500"
        className="md:h-1/2 pt-5 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};
const HMUContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Seamless web-to-PDF automation. HMU_2PDF is a powerful Python-based tool
        that efficiently extracts and converts web content into structured
        PDFs—simplifying document management with precision and speed.
      </p>
      <Image
        src="https://i.imgur.com/xzMbpOz.png"
        alt="Macbook mockup for Medical Pantry"
        height="500"
        width="500"
        className="md:h-1/2 pt-5 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};
const RAGContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Reimagining medical supply management. Our team built a seamless,
        virtual warehouse system for a local charity, making donation tracking
        smarter and more efficient.{" "}
      </p>
      <Image
        src="https://i.imgur.com/xzMbpOz.png"
        alt="Macbook mockup for Medical Pantry"
        height="500"
        width="500"
        className="md:h-1/2 pt-5 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "WEB DEVELOPMENT",
    title: "Medical Pantry",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <MedPantryContent />,
  },
  {
    category: "MACHINE LEARNING",
    title: "Book popularity prediction",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <EODPContent />,
  },
  {
    category: "AUTOMATION",
    title: "HMU_2PDF",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <HMUContent />,
  },

  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "RAG-AI Personal Assistant",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <RAGContent />,
  },
];
