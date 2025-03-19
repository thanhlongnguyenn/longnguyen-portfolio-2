"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {

  return (
    <footer className="py-8 px-4 text-center mt-20">
      <hr className="border-t border-gray-300 mb-8" />
      <div className="mb-4 flex justify-center items-center gap-2 px-4">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <span>/</span>
        <Image src="/logo2.svg" alt="Logo" width={100} height={100} />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-15 px-8">
        <div className="md:text-left mb-4 md:mb-0">
          <p className="font-bold">Long Nguyen</p>
          <p>Passionate learner. Innovative developer.</p>
        </div>
        <div className="md:text-right">
          <a
            href="https://www.linkedin.com/in/longthanhnguyen2004/"
            className="flex items-center gap-1"
          >
            LinkedIn{" "}
            <div className="flex items-center text-[#FF611D] group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300">
              <ArrowUpRight size={20} />
            </div>
          </a>
          <a
            href="https://github.com/yourprofile"
            className="flex items-center gap-1 mt-2"
          >
            GitHub{" "}
            <div className="flex items-center text-[#FF611D] group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300">
              <ArrowUpRight size={20} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;