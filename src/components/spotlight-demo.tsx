import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { personalInfo, socialLinks } from '@/lib/data';
import { motion } from 'framer-motion';
import { SparklesCore } from './ui/sparkles';
import { TypewriterEffectCycling } from './ui/typewriter-effect';
import Link from 'next/link';
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

const subtitlePhrases = [
  "CSE Student",
  "Co-Founder of Codeunia",
  "Mentor",
  "Community Builder"
];

function TypewriterSubtitle() {
  const [current, setCurrent] = useState(0);
  const [hide, setHide] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleComplete = () => {
    if (current < subtitlePhrases.length - 1) {
      setTimeout(() => setCurrent(current + 1), 900);
    } else {
      setTimeout(() => {
        setHide(true);
        setTimeout(() => setRemove(true), 600);
      }, 1200);
    }
  };

  if (remove) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: hide ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <TypewriterEffectCycling
        key={current}
        text={subtitlePhrases[current]}
        className="text-lg md:text-2xl font-semibold text-neutral-200 text-center w-full mx-auto block"
        cursorClassName="bg-blue-500"
        onComplete={handleComplete}
      />
    </motion.div>
  );
}

export default function SpotlightPreview() {
  const greetings = ["Hello", "नमस्ते"];
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const handleTypingComplete = () => {
    if (currentGreeting === 0) {
      setTimeout(() => {
        setCurrentGreeting(1);
      }, 2000);
    }
  };

  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        )}
      />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        {/* Greeting with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center w-full"
        >
          <div className="flex justify-center items-center gap-x-2 w-full">
            <TypewriterEffectCycling
              key={currentGreeting}
              text={greetings[currentGreeting]}
              className="text-lg text-gray-400 text-center"
              cursorClassName="bg-gray-400"
              onComplete={handleTypingComplete}
            />
            <span className="text-lg text-gray-400">, I'm</span>
          </div>
        </motion.div>
        {/* Name section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-0"
        >
          <h1 className="text-4xl md:text-8xl font-extrabold text-white text-center">
            Parisha Sharma
          </h1>
        </motion.div>
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-6"
        >
          <div className="flex justify-center items-center w-full text-center">
            <TypewriterSubtitle />
          </div>
        </motion.div>
        {/* Animated Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="text-lg text-gray-400 max-w-2xl mx-auto text-center">
            Computer Science Engineering Student at Chandigarh University (2023-2027)
          </div>
        </motion.div>
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link href="/projects">
            <MovingBorderButton className="bg-blue-600 text-white font-semibold border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-all duration-200 w-48 h-14 text-lg">
              View My Work
            </MovingBorderButton>
          </Link>
          <Link href="/about">
            <MovingBorderButton className="bg-white text-black font-semibold border-gray-300 hover:bg-gray-100 hover:border-blue-400 transition-all duration-200 w-48 h-14 text-lg">
              About
            </MovingBorderButton>
          </Link>
        </motion.div>
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center items-center space-x-6 mb-8"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.icon === 'mail' ? '/contact' : social.url}
              {...(social.icon !== 'mail' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-300 hover:text-blue-400"
            >
              {social.icon === 'github' && <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>}
              {social.icon === 'linkedin' && <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>}
              {social.icon === 'instagram' && <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.29.058-2.18.25-2.95.53-.8.29-1.48.68-2.15 1.35-.67.67-1.06 1.35-1.35 2.15-.28.77-.472 1.66-.53 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.29.25 2.18.53 2.95.29.8.68 1.48 1.35 2.15.67.67 1.35 1.06 2.15 1.35.77.28 1.66.472 2.95.53C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.29-.058 2.18-.25 2.95-.53.8-.29 1.48-.68 2.15-1.35.67-.67 1.06-1.35 1.35-2.15.28-.77.472-1.66.53-2.95.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.29-.25-2.18-.53-2.95-.29-.8-.68-1.48-1.35-2.15-.67-.67-1.35-1.06-2.15-1.35-.77-.28-1.66-.472-2.95-.53C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>}
              {social.icon === 'mail' && <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8.485-6.364A2 2 0 0 1 5.343 4h13.314a2 2 0 0 1 1.828 2.701l-8.485 6.364zm8.485 1.414l-8.485 6.364-8.485-6.364A2 2 0 0 1 2 18V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"/></svg>}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 