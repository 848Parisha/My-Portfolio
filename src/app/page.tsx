'use client';

import SpotlightPreview from '@/components/spotlight-demo';
import About from '@/components/About';
// import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative overflow-x-hidden">
      <SpotlightPreview />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
