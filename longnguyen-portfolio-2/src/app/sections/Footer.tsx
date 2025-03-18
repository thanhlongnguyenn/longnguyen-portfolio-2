"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {

  return (
    <footer className="py-8 px-4 text-center mt-20">
      <div className="mb-4 flex justify-center items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <span>/</span>
        <Image src="/logo2.svg" alt="Logo" width={100} height={100} />
      </div>
    </footer>
  );
};

export default Footer;