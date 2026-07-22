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
      
      <footer className="py-12 border-t border-neutral-900 bg-neutral-950/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-xl text-white mb-2">Aaditya Kumar</h3>
            <p className="text-neutral-500">Full Stack MERN Developer</p>
          </div>
          <div className="flex md:justify-end gap-6 font-medium">
            <a href="#home" className="text-neutral-500 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-neutral-500 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-neutral-500 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-neutral-500 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 flex justify-center md:justify-end gap-6">
           <a href="https://www.linkedin.com/in/aaditya-kumar-6271672b2" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-500 transition-colors"><FaLinkedin size={20} /></a>
           <a href="https://github.com/aadityak09771-sudo" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><FaGithub size={20} /></a>
           <a href="https://wa.me/919696338646" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-emerald-500 transition-colors"><FaWhatsapp size={20} /></a>
        </div>
        <div className="text-center mt-8">
          <a href="#home" className="inline-block bg-neutral-900 hover:bg-neutral-800 text-neutral-400 p-2 rounded-full transition-colors">
            ↑ Back to Top
          </a>
        </div>
        <div className="text-center text-neutral-600 mt-12 pt-8 border-t border-neutral-900 text-xs">
          <p>© {new Date().getFullYear()} Aaditya Kumar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}