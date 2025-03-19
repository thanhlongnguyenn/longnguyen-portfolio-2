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
        src="/medpantrymacmockup.png"
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
        src="/edoppreview.svg"
        alt="Book popularity prediction"
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
        Seamless web-to-PDF automation. HMU_2PDF is a powerful Python-based web
        crawler that efficiently extracts and converts web content into
        structured PDFs—simplifying document management with precision and
        speed.
      </p>

    </div>
  );
};
const RAGContent = () => {
  return (
    <div className="bg-[#1a1a1a] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-sm font-semibold md:text-xl lg-2xl font-sans max-w-3xl mx-auto">
        Smarter conversations, built for real impact. During my internship, I'm
        developing a RAG-powered chatbot that combines retrieval and generative
        AI to deliver more accurate, context-aware responses.
      </p>

    </div>
  );
};

const data = [
  {
    category: "WEB DEVELOPMENT",
    title: "Medical Pantry",
    src: "https://i.imgur.com/D07T3Rb.png",
    content: <MedPantryContent />,
  },
  {
    category: "MACHINE LEARNING",
    title: "Book popularity prediction",
    src: "https://i.imgur.com/W65E8dV.jpg",
    content: <EODPContent />,
  },
  {
    category: "AUTOMATION",
    title: "HMU_2PDF",
    src: "https://i.imgur.com/jnAOo3r.jpg",
    content: <HMUContent />,
  },

  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "RAG-AI Personal Assistant",
    src: "https://i.imgur.com/VKZItnY.jpg",
    content: <RAGContent />,
  },
];
