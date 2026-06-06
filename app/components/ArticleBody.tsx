'use client'; // Indispensable pour gérer les clics et le useState

import React from 'react';
import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

interface SanityImageAsset {
  _ref: string;
}

interface SanityImage {
  _type: string;
  asset?: SanityImageAsset;
  caption?: string;
}

interface SanityBlock {
  _type: string;
}

interface LightboxSlide {
  src: string;
  alt: string;
}

interface ArticleBodyProps {
  body: (SanityBlock | SanityImage)[];
}

export default function ArticleBody({ body }: ArticleBodyProps) {
  // État pour savoir quelle image est ouverte (-1 = fermé)
  const [isOpenIndex, setIsOpenIndex] = useState<number>(-1);

  // 1. On extrait TOUTES les images du texte pour créer notre galerie
  // On filtre les blocs pour ne garder que ceux de type 'image'
  const imageBlocks: SanityImage[] = body?.filter((block: SanityBlock) => block._type === 'image') as SanityImage[] || [];
  
  // On crée le tableau au format attendu par le Lightbox
  const slides: LightboxSlide[] = imageBlocks.map((img: SanityImage) => ({
    src: urlFor(img).width(1920).fit('max').url(), // On charge en haute qualité pour le plein écran
    alt: img.caption || 'Image de voyage',
  }));

  // 2. On configure l'affichage des images dans le texte
  const ptComponents = {
    types: {
      image: ({ value }: { value: SanityImage }) => {
        if (!value?.asset?._ref) return null;
        
        // On cherche à quel index correspond cette image dans notre galerie
        const imgUrl = urlFor(value).width(1920).fit('max').url();
        const galleryIndex: number = slides.findIndex((slide: LightboxSlide) => slide.src === imgUrl);

        return (
          <div className="my-10 text-center">
            {/* On ajoute cursor-pointer et le onClick pour ouvrir le Lightbox */}
            <img
              src={urlFor(value).width(800).fit('max').auto('format').url()}
              alt={value.caption || 'Image de l\'article'}
              className="rounded-xl mx-auto cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setIsOpenIndex(galleryIndex)}
            />
            {value.caption && (
              <p className="mt-2 text-sm text-gray-400 italic">{value.caption}</p>
            )}
          </div>
        );
      },
    },
  };

  return (
    <>
      {/* Affichage du texte de l'article */}
      <PortableText value={body} components={ptComponents} />

      {/* La visionneuse plein écran (invisible tant que isOpenIndex < 0) */}
      <Lightbox
        open={isOpenIndex >= 0}
        close={() => setIsOpenIndex(-1)}
        index={isOpenIndex}
        slides={slides}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3, // Zoom maximum (x3)
          zoomInMultiplier: 2, // Force du zoom au double-clic
          doubleTapDelay: 300, // Temps max entre deux tapotements sur mobile
        }}
        // Ces options permettent de fermer en cliquant à côté ou en scrollant
        controller={{ closeOnBackdropClick: true }} 
      />
    </>
  );
}