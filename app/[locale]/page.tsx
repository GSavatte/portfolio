// page.tsx (version finale)
'use client';

import ProjectCarousel from '../components/ProjectCarousel';
import Image from 'next/image';
import Link from 'next/link';
import VisitorTracker from '../components/VisitorTracker';
import styles from './app.module.css';
import Header from '../components/Header';
import { motion, useScroll, useTransform } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  const { scrollY } = useScroll();

  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -100])

  const imageBlur = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(20px)"]);
  const imageScale = useTransform(scrollY, [0, 400], [1, 1.1]);
  return (
    <main className="min-h-screen bg-black text-white relative font-sans">

      <VisitorTracker />
      
      <div className="fixed top-0 left-0 w-full h-[75vh] flex flex-col text-white -z-10">
        
        <motion.div 
          className="absolute inset-0 w-full h-full -z-20"
          style={{ filter: imageBlur, scale: imageScale }} 
        >
          <Image 
            src="/ressources/image-home.jpg"
            alt="ESIR Background"
            fill
            priority={true}
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 w-full h-full bg-black/50"></div>
        </motion.div>

        <Header />

        <div className="relative flex-grow flex items-center justify-center text-center p-4 z-10">
          <motion.div 
            className="max-w-4xl space-y-8"
            style={{ opacity: textOpacity, y: textY }}
          >
            <h1 className="text-2xl md:text-4xl font-medium leading-relaxed tracking-wide">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl font-light mt-8 tracking-wide">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 bg-gradient-to-br from-indigo-200 via-white to-indigo-100 min-h-screen text-black shadow-[0_-10px_30px_rgba(0,0,0,0.1)] mt-[75vh] pb-24">
        
        <ProjectCarousel />

      </div>

    </main>
  );
}