import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Experience() {
  const frontend = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'];
  const backend = ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication'];
  const tools = ['Git', 'GitHub', 'Firebase'];
  const other = ['Razorpay', 'Vercel', 'Render'];

  return (
    <section id="resume" className="py-24 px-6 max-w-6xl mx-auto pt-28">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume & <span className="text-blue-500">Skills</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-500" size={28} />
            <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
          </div>
          <div className="space-y-12 border-l-2 border-neutral-800 pl-8 ml-3 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-950 bg-blue-500"></div>
              <h4 className="text-xl font-bold text-white">IT Intern <span className="text-neutral-400 font-medium">@ Brandmate Digital</span></h4>
              <p className="text-blue-500 font-medium text-sm mb-3">March 2026 – June 2026</p>
              <ul className="text-neutral-400 text-sm leading-relaxed space-y-2 list-disc pl-4 marker:text-neutral-700">
                <li>Developed responsive business websites and built landing pages.</li>
                <li>Performed website maintenance, debugging, and deployment tasks.</li>
                <li>Gained hands-on experience in the MERN Stack and client collaboration.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-purple-500" size={28} />
            <h3 className="text-2xl font-bold text-white">Education Journey</h3>
          </div>
          <div className="space-y-12 border-l-2 border-neutral-800 pl-8 ml-3 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-950 bg-purple-500"></div>
              <h4 className="text-xl font-bold text-white">Bachelor of Computer Applications</h4>
              <p className="text-purple-500 font-medium text-sm mb-3">Jagran College of Arts, Science & Commerce | 2023 – 2026</p>
              <p className="text-neutral-400 text-sm leading-relaxed">Focused on programming, software development, database management, networking, and modern web technologies.</p>
              <a href="/resume/Aaditya_Kumar_Resume.pdf" download className="md:hidden mt-4 inline-block bg-purple-600/20 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-600/30 transition-colors">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-bold mb-4 text-blue-400">Frontend</h4>
          <div className="flex flex-wrap gap-2">{frontend.map((s,i) => <span key={i} className="bg-neutral-900 px-3 py-1 rounded-md text-sm text-neutral-300">{s}</span>)}</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-bold mb-4 text-emerald-400">Backend & DB</h4>
          <div className="flex flex-wrap gap-2">{backend.map((s,i) => <span key={i} className="bg-neutral-900 px-3 py-1 rounded-md text-sm text-neutral-300">{s}</span>)}</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-bold mb-4 text-purple-400">Tools & Platforms</h4>
          <div className="flex flex-wrap gap-2">{tools.map((s,i) => <span key={i} className="bg-neutral-900 px-3 py-1 rounded-md text-sm text-neutral-300">{s}</span>)}</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-bold mb-4 text-pink-400">Services & Deployment</h4>
          <div className="flex flex-wrap gap-2">{other.map((s,i) => <span key={i} className="bg-neutral-900 px-3 py-1 rounded-md text-sm text-neutral-300">{s}</span>)}</div>
        </div>
      </div>
    </section>
  );
}