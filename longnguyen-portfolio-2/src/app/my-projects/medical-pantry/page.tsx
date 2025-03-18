"use client";
import React from "react";
import { Header } from "../../sections/Header";
import Image from "next/image";
import ScrollVelocity from "@/app/components/scrollvelocity";
import { StickyScroll } from "../../components/sticky-scroll-reveal";

export default function MedPantry() {
  const content = [
    {
      title: "WHAT IS THIS PROJECT ABOUT?",
      description: (
        <div>
          <p className="mb-4">
            The Medical Pantry is an Australian charity organization that serves
            as a bridge between surplus medical supplies and communities in
            need. Their warehouse operates as a central hub, collecting and
            sorting unused medical equipment from various healthcare facilities.
            Here is the links to the{" "}
            <a
              href="https://medicalpantry.org/"
              className="text-orange underline"
            >
              Medical Pantry website
            </a>{" "}
            and their{" "}
            <a
              href="https://shop.medicalpantry.org/"
              className="text-orange underline"
            >
              Shopify store
            </a>
            .
          </p>
          <p className="mb-4">
            Medical Pantry needed an efficient solution for its stock management
            process, starting from sorting donated medical supplies. The
            existing manual labour system created bottlenecks, making it
            difficult to track available storage and efficiently allocate
            resources. To address this challenge, my team and I developed a
            virtual warehouse system that allows for precise tracking and entry
            of stock, streamlining the entire inventory process.
          </p>
        </div>
      ),
    },
    {
      title: "MEET THE TEAM",
      description: (
        <div>
          <p className="mb-4">
            Our team was composed of skilled individuals who collaborated to
            bring this project to life. I was responsible for UI/UX design and
            frontend development, ensuring an intuitive user experience. Kai
            took on the role of product owner and backend developer, guiding the
            project's direction. Henry led API development and database
            integration, while Abdullah focused on quality assurance and
            deployment. Sho contributed to frontend development and product
            documentation. Together, we worked efficiently, combining our
            expertise to create a robust and effective solution for Medical
            Pantry.
          </p>
        </div>
      ),
    },
    {
      title: "THE MANUAL SORTING PROCESS AND ITS PROBLEM",
      description: (
        <div>
          <p className="mb-4">
            The organisation relied on a structured packing process where
            donated medical supplies are sorted into "Baxter Boxes" before being
            distributed.{" "}
            <span className="font-bold text-orange">
              However, without a proper tracking system, managers had to
              manually identify available storage and update SKU fields in
              Shopify to reflect item locations.
            </span>{" "}
            Volunteers depended on direct instructions from managers, making the
            process inefficient and error-prone. Our goal was to automate these
            steps to enhance workflow and reduce reliance on manual updates.
          </p>
        </div>
      ),
    },
    {
      title: "OUR SOLUTION",
      description: (
        <div>
          <p>
            The implementation of our solutions led to significant improvements
            in Medical Pantry's operations. We achieved a 40% reduction in
            inventory management time through automated tracking systems. The
            machine learning models successfully predicted demand patterns with
            85% accuracy, leading to better stock level management. The
            optimization of distribution routes resulted in a 25% reduction in
            delivery times. These improvements have enabled Medical Pantry to
            serve more communities effectively and handle a larger volume of
            medical supplies with greater efficiency.
          </p>
        </div>
      ),
    },
    {
      title: "WHAT DID I LEARN FROM THIS PROJECT?",
      description: (
        <div>
          <p>
            This project provided invaluable learning experiences across
            multiple dimensions. Technically, I deepened my understanding of
            machine learning applications in real-world scenarios and improved
            my skills in data analysis and Python programming. The project
            enhanced my ability to work with large datasets and implement
            practical solutions. On a professional level, I gained experience in
            project management, stakeholder communication, and working within an
            agile framework. Perhaps most importantly, I learned how technology
            can be leveraged to create meaningful social impact in healthcare
            accessibility.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="w-full pt-20">
        <div className="bg-[#1a1a1a] flex justify-center items-center">
          <Image
            src={"/medpantry.svg"}
            alt="Macbook mockup for Medical Pantry"
            height="1000"
            width="1000"
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content - Added max-width container */}
      <div className="w-full px-5 md:px-15.5 py-12 h-full">
        <div className="max-w-[1000px] mx-auto">
          {" "}
          {/* Increased max-width to 1280px */}
          <h1 className="font-sans font-semibold text-[43.46px] mb-6">
            MEDICAL PANTRY
          </h1>
          <p className="font-mono text-[18.07px] mb-8">
            A data-driven inventory management system for an Australian medical
            charity, optimizing the distribution of medical supplies to
            underserved communities.
          </p>
          <div className="h-16 overflow-hidden mb-10">
            <ScrollVelocity
              texts={[
                "React • TailwindCSS • Vercel • UI/UX • Git • AGILE • Figma • ",
              ]}
              velocity={20}
              className="font-mono text-[18.07px] text-orange"
              numCopies={4}
              velocityMapping={{ input: [0, 1000], output: [2, 2] }}
              parallaxClassName="h-16"
              scrollerClassName="items-center"
            />
          </div>
          <StickyScroll content={content} />
        </div>
      </div>
      <div className="h-dvh"></div> {/* Added extra space at the bottom */}
    </div>
  );
}