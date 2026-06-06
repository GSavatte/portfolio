'use client'
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link';

const projects = [
  {
    title: "Biosquare",
    description: "Site Internet de mise en relation entre propriétaires de jardins inutilisés et personnes souhaitant cultiver leur propre potager.",
    image: "/ressources/projects/biosquare.jpg",
    tags: ["PHP", "SQL", "JavaScript"],
    page: "/projets/biosquare"
  },
  {
    title: "Pepper",
    description: "Application sur la messagerie Discord pour ajouter des fonctionnalités de modération, de gestion de communauté, des minis-jeux etc.",
    image: "/ressources/projects/Pepper.png",
    tags: ["NodeJS", "Figma"],
    page: "/projets/pepper"
  },
  {
    title: "ESIR as a Service",
    description: "Mise en place de micro-services conteneurisés pour simuler un environnement d'entreprise. Mise en place d'un déploiement le plus automatisé possible et unifié / monitoré.",
    image: "/ressources/projects/ALProject.jpg",
    tags: ["Docker"],
    page: "/projets/eaas"
  },
  {
    title: "Where&When",
    description: "Application de gestion de planning pour les étudiants et les professeurs. Permet de faciliter l'organisation de réunions grâce à l'intégration d'agents IA capables de proposer des créneaux en fonction des disponibilités de chacun.",
    image: "/ressources/projects/whereandwhen.jpg",
    tags: ["Flutter", "Figma", "Make"],
    page: "/projets/where-and-when"
  }
]

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  })

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-24">
      <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-black">
        Projects Overview
      </h3>

      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex space-x-6">
          {projects.map((project, index) => (
            <div className="embla__slide flex-none w-[350px] md:w-[450px]" key={index}>
              <div className="bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 ">
                <div className="space-y-6">
                  <div className="relative overflow-hidden h-48 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      layout="fill" 
                      objectFit="cover" 
                      quality={100} 
                      className="z-0" 
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-black text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold tracking-tight text-black">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <Link href={project.page} className="inline-flex items-center text-sm font-semibold text-black hover:underline relative z-10">
                    Read More
                    <svg className="w-5 h-5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex items-center space-x-4 z-10">
        <button
          onClick={scrollPrev}
          className="w-12 h-12 rounded-full bg-white text-black shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="w-12 h-12 rounded-full bg-white text-black shadow-lg flex items-center justify-center hover:bg-black hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}