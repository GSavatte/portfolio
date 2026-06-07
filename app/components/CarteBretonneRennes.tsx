'use client';
import { motion } from 'framer-motion';
import { BretagneSVG } from './BretagneSVG';

import { useTranslations } from 'next-intl';

export default function CarteBretonneRennes() {
  const t = useTranslations('carteBretonneRennes');
  return (    
    <motion.div 
          className="pointer-events-auto"
          initial={{ opacity: 0, x: -150 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
      <div className="bg-white rounded-[2rem] shadow-2xl p-4 w-full relative overflow-hidden transform md:-rotate-3 border-4 border-white">
      
        <div className="w-full text-gray-200">
          <BretagneSVG className="w-full h-auto fill-current" />
        </div>


        <div className="absolute top-[40%] left-[52%] flex flex-col items-center">
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="text-4xl drop-shadow-md z-10"
          >
            📍
          </motion.div>
          
          <svg 
            className="absolute top-8 right-28 w-24 h-24 overflow-visible" 
            viewBox="0 0 100 100"
          >
            <motion.path
              d="M 40 60 Q 40 40 90 10"
              fill="transparent"
              stroke="#1e293b"
              strokeWidth="3"
              strokeLinecap="round"
              
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0 }}
            />
            <motion.path 
              d="M 70 10 L 90 10 L 85 30" 
              fill="transparent" stroke="#1e293b" strokeWidth="3" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0 }}
            />
          </svg>
          <div className="text-center w-56 mt-13 -translate-x-16">
            <div className="text-slate-900 font-bold text-sm">Rennes</div>
            <div className="text-slate-500 text-xs mt-1 leading-relaxed">
              {t('studiedInRennes')}
            </div>
          </div>

        </div>
      </div>
      </motion.div>  
  );
}