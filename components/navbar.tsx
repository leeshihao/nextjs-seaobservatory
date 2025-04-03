"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the collapsible if clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className={`fixed w-full bg-white z-50 transition-shadow ${hasScrolled ? "shadow-md" : ""} mt-4 mb-4`}>
      <Collapsible open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <span
                    className="self-start whitespace-nowrap text-xl sm:text-2xl md:text-4xl font-semibold dark:text-white"
                    style={{ color: "#459773" }}
                >
                    SEA Observatory
                </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 text-lg pt-1">
                Home
              </Link>
              <Link href="/map" className="text-gray-900 hover:text-blue-600 text-lg pt-1">
                Map
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 text-lg pt-1">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button using Collapsible trigger*/}
            <CollapsibleTrigger asChild>
              <button className="sm:hidden p-2 text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </CollapsibleTrigger>
          </div>

          {/* Mobile menu using Collapsible Content*/}
          <CollapsibleContent>
            <div className="sm:hidden py-2 space-y-1">
              <Link href="/" className="block py-2 text-gray-900 hover:text-blue-600 text-base">
                Home
              </Link>
              {/* <Link href="/company" className="block py-2 text-gray-900 hover:text-blue-600 text-base">
                Company
              </Link> */}
              <Link href="/contact" className="block py-2 text-gray-900 hover:text-blue-600 text-base">
                Contact Us
              </Link>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </nav>
  );
};

export default Navbar;