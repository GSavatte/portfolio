import Link from 'next/link';
import CarteBretonneVitre from '../../components/CarteBretonneVitre';
import CarteBretonneRennes from '../../components/CarteBretonneRennes';

import { FaJava, FaDocker, FaPython, FaGithub, FaNetworkWired } from 'react-icons/fa';
import { SiCplusplus, SiKotlin, SiTensorflow, SiFlutter, SiAssemblyscript, SiArduino } from 'react-icons/si';
import { TbMessageLanguage, TbFileTypeSql, TbMathMaxMin } from "react-icons/tb";
import { MdSupport, MdInstallDesktop, MdDataArray, MdDesignServices } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";
import { FcLinux } from 'react-icons/fc';
import { IoHardwareChip } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import Header from '../../components/Header';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutMeHero');

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-cyan-100 text-black font-sans flex flex-col items-center">
      
      <Header />
      {/* TEXTE DE PRÉSENTATION */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-xl p-5 md:p-16 mt-4 mb-16 flex flex-col items-center">
        <div className="w-full max-w-4xl space-y-8">
          <h1 className="text-3xl md:text-5xl font-medium leading-relaxed tracking-wide">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl font-light mt-8 tracking-wide text-gray-600">
            {t('description')}
          </p>
        </div>

        {/* --- SECTION TIMELINE --- */}
        <div className="w-full max-w-4xl mt-32 mb-24">
          <h2 className="text-3xl font-medium text-center mb-24 tracking-wide">
            {t('introduction')}
          </h2>

          <div className="space-y-0">
            
            {/* --- ITEM 1 : "Now" --- */}
            <div className="flex">
              
              {/* Gauche : Textes en colonne */}
              <div className="w-16 md:w-32 flex-shrink-0 text-right pr-1 md:pr-10 pt-1 flex flex-col">
                <div className="h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">Now</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">2026</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-sm md:text-lg text-gray-400 font-medium md:font-normal">September</span>
                </div>
              </div>
              
              {/* Centre : Ligne & Points en colonne */}
              <div className="relative flex flex-col items-center w-8 pt-1 shrink-0">
                <div className="absolute top-4 bottom-0 left-1/2 -ml-[1px] border-l-2 border-dashed border-gray-300"></div>
                
                <div className="h-6 flex items-center justify-center z-10">
                  <div className="relative w-4 h-4 bg-emerald-200 rounded-full ring-4 ring-emerald-50 z-10"></div>
                  <div className="absolute top-3 left-1/2 -ml-[1px] h-[250px] border-l-2 border-solid border-slate-800 z-0"></div>
                </div>
                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                </div>
                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Droite : Contenu */}
              <div className="flex-grow pl-6 md:pl-10 pb-16">
                <h3 className="text-xl md:text-2xl font-medium text-black">ESIR 2 - IT Engineering – Information Systems</h3>
                <p className="text-sm text-gray-400 mb-4">(Sept 2025 - May 2026)</p>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  Studying Information Systems, concentrating on software architecture, fullstack web development, and data engineering. Building comprehensive agile projects to practice real-world engineering concepts, ranging from deep learning models and data pipelines to operating systems and parallel programming.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaJava className="text-sm text-[#007396]" /> Java
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaDocker className="text-sm text-[#2496ED]" /> Docker
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <SiCplusplus className="text-sm text-[#00599C]" /> C++
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <SiKotlin className="text-sm text-[#7F52FF]" /> Kotlin
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaPython className="text-sm text-[#3776AB]" /> Python
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <SiTensorflow className="text-sm text-[#FF6F00]" /> TensorFlow
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <TbMessageLanguage className="text-sm text-[#02569B]" /> ANTLR
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <SiFlutter className="text-sm text-[#02569B]" /> Flutter
                  </span>
                </div>
              </div>
              
            </div>
            {/* FIN ITEM 1 */}

            {/* --- ITEM 2 : "IT Support Intern" --- */}
            <div className="flex">
              
              {/* Gauche : Textes en colonne */}
              <div className="w-16 md:w-32 flex-shrink-0 text-right pr-1 md:pr-10 pt-1 flex flex-col">
                <div className="mt-5 h-6 flex items-center justify-end">
                  <span className="text-sm md:text-lg text-gray-400 font-normal">July</span>
                </div>
                <div className="mt-5 h-6 flex items-center justify-end">
                  <span className="text-sm md:text-lg text-gray-400 font-normal">June</span>
                </div>
              </div>
              
              {/* Centre : Ligne & Points en colonne */}
              <div className="relative flex flex-col items-center w-8 pt-1 shrink-0">
                {/* Ligne pointillée de fond */}
                <div className="absolute top-0 bottom-0 left-1/2 -ml-[1px] border-l-2 border-dashed border-gray-300"></div>
                
                <div className="relative mt-5 h-6 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full relative z-20"></div>
                  <div className="absolute top-3 left-1/2 -ml-[1px] h-[50px] border-l-2 border-solid border-red-600 z-10"></div>
                </div>

                <div className="relative mt-5 h-6 flex items-center justify-center w-full">
                  <div className="w-3 h-3 bg-gray-400 rounded-full relative z-20"></div>
                  {/* ON A SUPPRIMÉ LA LIGNE H-[400PX] ICI */}
                </div>

                {/* NOUVEAU : La ligne magique "élastique" qui remplit tout l'espace restant en bas */}
                {/* Le -mt-3 lui permet de remonter se cacher exactement sous le rond gris ! */}
                <div className="w-[2px] flex-grow bg-slate-800 z-10 -mt-3"></div>
              </div>

              {/* Droite : Contenu */}
              {/* MODIFICATION ICI : Suppression du 'pb-16' pour que le conteneur s'arrête avec les badges */}
              <div className="flex-grow pl-6 md:pl-10 mt-6 pb-8">
                <h3 className="text-xl md:text-2xl font-medium text-black">IT Support Intern — Vitré Hospital</h3>
                <p className="text-sm text-gray-400 mb-4">(June 2025 - July 2025)</p>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  Reponded to user requests, troubleshot hardware and software issues, and maintained the hospital's IT infrastructure. Gained hands-on experience with network management, system administration, and user support in a high-stakes environment. Wrote documentation and created user guides to improve the IT support process.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <MdSupport className="text-sm text-[#02569B]" /> GLPI
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <MdInstallDesktop className="text-sm text-[#02569B]" /> Microsoft Deployement Toolkit
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaUserShield className="text-sm text-[#02569B]" /> Active Directory
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <IoHardwareChip className="text-sm text-[#02569B]" /> Hardware
                  </span>
                </div>
              </div>
              
            </div>

            <div className="flex relative w-full">
              
              {/* Gauche : Textes en colonne */}
              <div className="w-16 md:w-32 flex-shrink-0 text-right pr-1 md:pr-10 pt-1 flex flex-col">
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">2025</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-sm md:text-lg text-gray-400 font-normal">September</span>
                </div>
              </div>
              
              {/* Centre : Ligne & Points en colonne */}
              <div className="relative flex flex-col items-center w-8 pt-1 shrink-0">
                {/* Ligne pointillée de fond */}
                <div className="absolute top-0 bottom-0 left-1/2 -ml-[1px] border-l-2 border-dashed border-gray-300"></div>
                
                {/* NOUVEAU : La ligne de réception qui part du toit et descend vers le gros point noir */}
                {/* h-[112px] correspond exactement à la distance : pt-1 (4px) + mt-24 (96px) + centre du rond (12px) */}
                <div className="absolute top-0 left-1/2 -ml-[1px] h-[227px] border-l-2 border-solid border-slate-800 z-10"></div>
                
                <div className="relative mt-24 h-6 flex items-center justify-center z-20">
                  <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                </div>
                <div className="relative mt-24 h-6 flex items-center justify-center z-20">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Droite : Contenu */}
              <div className="flex-grow pl-6 md:pl-10 pb-16">
                <h3 className="text-xl md:text-2xl font-medium text-black">ESIR 1 - IT Engineering</h3>
                <p className="text-sm text-gray-400 mb-4">(Sept 2025 - May 2026)</p>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  Learned a strong foundation in software engineering (Java, C++), OS, and databases. Applied math, signal processing, and AI through hands-on projects, ranging from hardware integration to machine learning.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaJava className="text-sm text-[#02569B]" /> Java
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <SiCplusplus className="text-sm text-[#02569B]" /> C++
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FcLinux className="text-sm text-[#02569B]" /> Linux / Bash
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <SiAssemblyscript className="text-sm text-[#02569B]" /> Assembly
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <TbFileTypeSql className="text-sm text-[#02569B]" /> SQL
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaPython className="text-sm text-[#02569B]" /> Python
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <LuBrainCircuit className="text-sm text-[#02569B]" /> Machine Learning
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <SiArduino className="text-sm text-[#02569B]" /> Arduino
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaGithub className="text-sm text-[#02569B]" /> Git
                  </span>
                </div>
              </div>

              <div className="hidden lg:block absolute -top-10 right-0 
                w-[28vw] min-w-[280px] max-w-[420px] 
                translate-x-[10%] xl:translate-x-[-220%] 
                z-30 pointer-events-none">
                <div className="pointer-events-auto">
                  <CarteBretonneRennes />
                </div>
              </div>
              
            </div>

            <div className="flex">
              
              {/* Gauche : Textes en colonne */}
              <div className="w-16 md:w-32 flex-shrink-0 text-right pr-1 md:pr-10 pt-1 flex flex-col">
                <div className="mt-8 h-6 flex items-center justify-end">
                  <span className="text-sm md:text-lg text-gray-400 font-normal">May</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">2024</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">2023</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-sm md:text-lg text-gray-400 font-normal">September</span>
                </div>
              </div>
              
              {/* Centre : Ligne & Points en colonne */}
              <div className="relative flex flex-col items-center w-8 pt-1 shrink-0">
                <div className="absolute top-0 bottom-0 left-1/2 -ml-[1px] border-l-2 border-dashed border-gray-300"></div>
                
                <div className="relative mt-8 h-6 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full relative z-10"></div>
                  <div className="absolute top-3 left-1/2 -ml-[1px] h-[360px] border-l-2 border-solid border-slate-800 z-0"></div>
                </div>
                
                {/* <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full z-15 relative"></div>
                  <div className="absolute top-10 left-1/2 -ml-[1px] h-[350px] border-l-2 border-solid border-slate-800 z-1"></div>
                </div> */}
                

                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                </div>


                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                </div>
                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
              </div>

              {/* Droite : Contenu */}
              <div className="flex-grow pl-6 md:pl-10 pb-16 mt-24">
                <h3 className="text-xl md:text-2xl font-medium text-black">CUPGE - IT Engineering</h3>
                <p className="text-sm text-gray-400 mb-4">(Sept 2022 - May 2024)</p>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  Completed a rigorous preparatory cycle emphasizing fundamental sciences (Maths, Physics, Mechanics) and core computer science. Gained a strong foundation in algorithms, OOP, and data structures using Python and Java. Hands-on experience includes Linux OS, networking , databases (SQL), UI design , and team projects utilizing Git.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaPython className="text-sm text-[#02569B]" /> Python
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaJava className="text-sm text-[#02569B]" /> Java / OOP
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <MdDataArray className="text-sm text-[#02569B]" /> Algorithms & Data Structures
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FcLinux className="text-sm text-[#02569B]" /> Linux / Bash
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaNetworkWired className="text-sm text-[#02569B]" /> Networking
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <TbFileTypeSql className="text-sm text-[#02569B]" /> Databases / SQL
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <MdDesignServices className="text-sm text-[#02569B]" /> UI Design
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaGithub className="text-sm text-[#02569B]" /> Git
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <TbMathMaxMin className="text-sm text-[#02569B]" /> Matlab
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex relative w-full">
              
              {/* Gauche : Textes en colonne */}
              <div className="w-16 md:w-32 flex-shrink-0 text-right pr-1 md:pr-10 pt-1 flex flex-col">
                <div className="mt-8 h-6 flex items-center justify-end">
                  <span className="text-sm md:text-lg text-gray-400 font-normal">June</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">2022</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">2021</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">2020</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-sm md:text-lg text-gray-400 font-normal">September</span>
                </div>
                <div className="mt-24 h-6 flex items-center justify-end">
                  <span className="text-2xl text-gray-400 font-medium">2019</span>
                </div>
              </div>
              
              {/* Centre : Ligne & Points en colonne */}
              <div className="relative flex flex-col items-center w-8 pt-1 shrink-0">
                <div className="absolute top-0 bottom-0 left-1/2 -ml-[1px] border-l-2 border-dashed border-gray-300"></div>
                
                <div className="relative mt-8 h-6 flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full relative z-10"></div>
                  <div className="absolute top-3 left-1/2 -ml-[1px] h-[480px] border-l-2 border-solid border-slate-800 z-0"></div>
                </div>
                
                {/* <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full z-15 relative"></div>
                  <div className="absolute top-10 left-1/2 -ml-[1px] h-[350px] border-l-2 border-solid border-slate-800 z-1"></div>
                </div> */}
                

                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                </div>


                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                </div>
                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                </div>
                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
                <div className="mt-24 h-6 flex items-center justify-center z-10">
                  <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                </div>
              </div>

              {/* Droite : Contenu */}
              <div className="flex-grow pl-6 md:pl-10 pb-16 mt-24">
                <h3 className="text-xl md:text-2xl font-medium text-black">General French Baccalaureate</h3>
                <p className="text-sm text-gray-400 mb-4">(Sept 2019 - June 2022)</p>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  Awarded the French Baccalaureate with Highest Honors.<br></br>
                  Specialized in Mathematics and Computer Science, with an additional focus on Advanced Mathematics.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FaPython className="text-sm text-[#02569B]" /> Python
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <TbFileTypeSql className="text-sm text-[#02569B]" /> Databases / SQL
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <MdDataArray className="text-sm text-[#02569B]" /> Algorithms & Data Structures
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
                    <FcLinux className="text-sm text-[#02569B]" /> Linux / Bash
                  </span>
                </div>
                
              </div>
              <div className="hidden lg:block absolute -top-10 right-0 
                w-[28vw] min-w-[280px] max-w-[420px] 
                translate-x-[10%] xl:translate-x-[100%] 
                z-30 pointer-events-none">
                <CarteBretonneVitre />
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}