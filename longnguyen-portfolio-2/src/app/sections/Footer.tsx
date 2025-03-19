"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {

  return (
    <div className="py-8 px-4 text-center mt-2 relative">
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
        <div className="md:text-right z-10 flex flex-col gap-2">
          <div className="flex justify-between items-center group">
            <a
              href="https://www.linkedin.com/in/longthanhnguyen2004/"
              className="flex-1 text-left"
            >
              LinkedIn
            </a>
            <ArrowUpRight
              className="text-[#FF611D] transition-transform duration-300 group-hover:translate-x-1 ml-2"
              size={20}
            />
          </div>
          <div className="flex justify-between items-center group">
            <a
              href="https://github.com/thanhlongnguyenn"
              className="flex-1 text-left"
            >
              GitHub
            </a>
            <ArrowUpRight
              className="text-[#FF611D] transition-transform duration-300 group-hover:translate-x-1 ml-2"
              size={20}
            />
          </div>
          <div className="flex justify-between items-center group">
            <a
              href="mailto:tln.thanhlongnguyen@gmail.com?subject=Hello%20Long!%20I%20am%20a%20visitor%20from%20your%20portfolio"
              className="flex-1 text-left"
            >
              Email
            </a>
            <ArrowUpRight
              className="text-[#FF611D] transition-transform duration-300 group-hover:translate-x-1 ml-2"
              size={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;