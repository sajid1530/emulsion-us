import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="flex justify-center mt-10">
        <div className="flex justify-between items-center w-full max-w-4xl px-8 py-4 rounded-full bg-[rgba(9,12,21,0.5)] border border-[#004C4C] shadow-lg">
          {/* Logo */}
          <Link href="/" aria-label="Homepage">
            <Image
              src="/images/logotechemulstion.webp"
              alt="Tech Emulsion Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav aria-label="Main navigation">
            <ul className="flex gap-8 text-sm font-medium">
              <li className="hover:text-white transition-colors">
                <Link href="/client">Client</Link>
              </li>
              <li className="hover:text-white transition-colors">
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
