'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-neutral-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
          Aaditya<span className="text-blue-500">.</span>
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <a href="/resume/Aaditya_Kumar_Resume.pdf" download className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/25">
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl px-6 pb-6 space-y-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-neutral-300 hover:text-white py-2">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-neutral-300 hover:text-white py-2">About</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-neutral-300 hover:text-white py-2">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-neutral-300 hover:text-white py-2">Contact</a>
          <a href="/resume/Aaditya_Kumar_Resume.pdf" download className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-lg text-sm font-bold transition-all">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}