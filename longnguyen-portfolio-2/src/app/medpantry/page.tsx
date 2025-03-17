import React from "react";
import { Header } from "../sections/Header";
import Image from "next/image";
// import ScrollVelocity from "../components/scrollvelocity";

const MedPantry = () => {
  return (
    <div>
      <Header />
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
      <div className="container pt-10 px-5 md:px-15.5">
        <h1 className="font-sans font-semibold text-3xl md:text-4xl">
          MEDICAL PANTRY
        </h1>
        <p className="font-mono text-md md:text-xl text-[#FF611D]">
          Reimagine waste medical supply
        </p>
        <p className="project-heading">WHAT IS THIS PROJECT ABOUT</p>
        <p>
          The Medical Pantry is a an Australian charity that rescues unused
          medical supplies and equipment and delivers it to underserved
          communities. As part of this mission. It has a warehouse containing
          this sorted equipment and has an integrated Shopify (e-commerce
          platform) store. Here is a link to the Medical Pantry’s website and a
          link to the Shopify store.
        </p>
        <p>The work process</p>
        <p>The problem identified</p>
        <p></p>
        <p>What we have achieve?</p>
        <p>What did I learn from this project?</p>
      </div>
    </div>
  );
};

export default MedPantry;

{
  /* <div className="relative pt-10">
  <div className="relative inline-block">
    <div className="absolute inset-0 bg-[#D6D2BD] z-0"></div>
    <ScrollVelocity
      texts={[
        "<Python> [AI/ML] [Data Analysis] [Data Visualisation] <pandas> <scikit-learn> <matplotlib> <seaborn> <numpy>",
      ]}
      velocity={30}
      parallaxClassName="parallax"
      scrollerClassName="scroller"
      className="text-orange text-xl relative z-10"
    />
  </div>
</div> */
}
