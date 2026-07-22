import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import Experience from '../components/Experience.js';
import Terminal from '../components/Terminal';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import GlobalUI from '../components/GlobalUI';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { MapPin, GraduationCap } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-blue-500/30">
      <GlobalUI />
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Experience />
      <Terminal />
      <Projects />
      <Contact />
      
      <footer className="py-12 border-t border-neutral-900 bg-neutral-950/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">Aaditya Kumar</h3>
          <p className="text-neutral-400 mb-6 font-semibold">Full Stack MERN Developer</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.linkedin.com/in/aaditya-kumar-6271672b2" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors active:scale-90"><FaLinkedin size={22} /></a>
            <a href="https://github.com/aadityak09771-sudo" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors active:scale-90"><FaGithub size={22} /></a>
            <a href="https://wa.me/919696338646" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-500 transition-colors active:scale-90"><FaWhatsapp size={22} /></a>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm mb-8">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-neutral-300">
              <MapPin size={16} className="text-emerald-400" />
              <span>Kanpur, India</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-neutral-300">
              <GraduationCap size={16} className="text-purple-400" />
              <span>BCA Graduate - 2026</span>
            </div>
          </div>

          <p className="text-neutral-600 text-xs">© {new Date().getFullYear()} Aaditya Kumar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}