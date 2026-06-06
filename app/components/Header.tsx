// components/Header.tsx
'use client'; // Requis pour utiliser useState

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="relative flex flex-row md:flex-col items-center justify-between md:justify-center p-8 w-full z-50 md:space-y-4">
      
      {/* 1. LOGO */}
      <Link href="/" className="text-2xl font-bold tracking-widest hover:opacity-70 transition-opacity z-50">
        Gabriel S.
      </Link>
      
      {/* 2. NAVIGATION PC (Votre code exact, caché sur mobile) */}
      <nav className="space-x-8 text-sm uppercase tracking-widest hidden md:block">
        <Link href="/#projects" className="hover:underline underline-offset-4">Projects</Link>
        <Link href="/aboutme" className="hover:underline underline-offset-4">About Me</Link>
        <Link href="/blog" className="hover:underline underline-offset-4">Blog</Link>
        <a href="https://www.linkedin.com/in/gabriel-savatte/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">LinkedIn</a>
        <Link href="/#contact" className="hover:underline underline-offset-4">Contact</Link>
      </nav>

      {/* 3. BOUTON MENU MOBILE (Caché sur PC) */}
      <button 
        className="md:hidden z-50 text-sm uppercase tracking-widest font-bold"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? 'Fermer' : 'Menu'}
      </button>

      {/* 4. MENU PLEIN ÉCRAN MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center space-y-8 z-40"
          >
            {/* J'ai ajouté un slash / devant les ancres (#) pour qu'elles fonctionnent depuis la page Blog ! */}
            <Link href="/#projects" onClick={closeMenu} className="text-2xl uppercase tracking-widest hover:text-gray-400">Projects</Link>
            <Link href="/aboutme" onClick={closeMenu} className="text-2xl uppercase tracking-widest hover:text-gray-400">About Me</Link>
            <Link href="/blog" onClick={closeMenu} className="text-2xl uppercase tracking-widest hover:text-gray-400">Blog</Link>
            <a href="https://www.linkedin.com/in/gabriel-savatte/" onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="text-2xl uppercase tracking-widest hover:text-gray-400">LinkedIn</a>
            <Link href="/#contact" onClick={closeMenu} className="text-2xl uppercase tracking-widest hover:text-gray-400">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}