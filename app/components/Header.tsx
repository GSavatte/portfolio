// components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const locale = useLocale();
  const t = useTranslations('Header');
  const router = useRouter();
  const pathname = usePathname();

  const [isEN, setIsEN] = useState(locale === 'en');

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'fr' : 'en';
    setIsEN(nextLocale === 'en');
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="relative flex flex-row md:flex-col items-center justify-between md:justify-center p-8 w-full z-50 md:space-y-4">
      
      {/* 1. LOGO */}
      <Link href={`/${locale}`} className="text-2xl font-bold tracking-widest hover:opacity-70 transition-opacity z-50">
        Gabriel S.
      </Link>
      
      {/* 2. NAVIGATION PC */}
      <nav className="space-x-8 text-sm uppercase tracking-widest hidden md:block">
        <Link href={`/${locale}#projects`} className="hover:underline underline-offset-4">{t('projects')}</Link>
        <Link href={`/${locale}/aboutme`} className="hover:underline underline-offset-4">{t('aboutMe')}</Link>
        <Link href={`/${locale}/blog`} className="hover:underline underline-offset-4">{t('blog')}</Link>
        <a href="https://www.linkedin.com/in/gabriel-savatte/" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">LinkedIn</a>
        <Link href={`/${locale}#contact`} className="hover:underline underline-offset-4">Contact</Link>
      </nav>

      <div className="flex items-center gap-3 z-50">

        <button
          onClick={toggleLocale}
          className="cursor-pointer relative flex items-center w-16 h-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
          aria-label="Toggle language"
        >
          <motion.div
            className="absolute w-7 h-7 rounded-full bg-white/20 border border-white/30"
            initial={false}
            animate={{ x: isEN ? 1 : 33 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          />
          <span className="absolute left-1 text-base leading-none">🇬🇧</span>
          <span className="absolute right-1 text-base leading-none">🇫🇷</span>
        </button>

        <button 
          className="md:hidden text-sm uppercase tracking-widest font-bold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '❌' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center space-y-8 z-40"
          >
            <Link href={`/${locale}#projects`} onClick={closeMenu} className="text-2xl uppercase tracking-widest hover:text-gray-400">{t('projects')}</Link>
            <Link href={`/${locale}/aboutme`} onClick={closeMenu} className="text-2xl uppercase tracking-widest hover:text-gray-400">{t('aboutMe')}</Link>
            <Link href={`/${locale}/blog`} onClick={closeMenu} className="text-2xl uppercase tracking-widest hover:text-gray-400">{t('blog')}</Link>
            <a href="https://www.linkedin.com/in/gabriel-savatte/" onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="text-2xl uppercase tracking-widest hover:text-gray-400">LinkedIn</a>
            <Link href={`/${locale}#contact`} onClick={closeMenu} className="text-2xl uppercase tracking-widest hover:text-gray-400">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}