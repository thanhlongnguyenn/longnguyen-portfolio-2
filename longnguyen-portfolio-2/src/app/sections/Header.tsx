"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${className} fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "opacity-0 -translate-y-full" : "opacity-100"
    } hidden md:block`}>
      <div className="w-full px-4 md:px-16 py-4 backdrop-blur-sm flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/about" className="nav-item">
            About
          </Link>
          <Link href="/my-projects" className="nav-item">
            Projects
          </Link>
          <Link href="/contact" className="nav-item">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};