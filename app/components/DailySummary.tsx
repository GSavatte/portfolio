'use client';
import React from 'react';

import { useTranslations } from 'next-intl';

export default function DailySummary({ data }: { data: any }) {
  const t = useTranslations('dailySummary');
  if (!data) return null; // Si on n'a pas rempli le résumé, on ne l'affiche pas.

  // Fonction pour extraire l'ID YouTube
  const getYouTubeId = (url: string) => {
    if (!url) return null;
    const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const ytId = getYouTubeId(data.musicUrl);

  return (
    <div className="max-w-5xl mx-auto mt-10 mb-24 p-6 md:p-8 bg-white rounded-3xl text-black font-sans shadow-xl">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
        
        {/* 1. LA MUSIQUE DU JOUR (Rose) */}
        <div className="bg-[#f2c6c2] rounded-2xl p-6 flex flex-col h-full">
          {/* Titre en haut */}
          <h3 className="text-xl font-bold mb-4 text-center">{t('dailyMusic')}</h3>
          {/* Conteneur flex-grow pour centrer le reste */}
          <div className="flex-grow flex items-center justify-center w-full">
            {ytId ? (
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${ytId}`}
                  title="Musique du jour"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="text-sm opacity-60">{t('noMusicToday')}</div>
            )}
          </div>
        </div>

        {/* 2. LA MÉTÉO DU JOUR */}
        <div className="bg-[#fcefb4] rounded-2xl p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-4 text-center">{t('dailyWeather')}</h3>
          <div className="flex-grow flex items-center justify-center">
            <div className="space-y-3 text-sm md:text-base font-medium w-fit">
              <p className="flex items-center"><span className="w-30 font-bold">{t('morning')}</span>{data.weatherMorning || "-"}</p>
              <p className="flex items-center"><span className="w-30 font-bold">{t('afternoon')}</span>{data.weatherAfternoon || "-"}</p>
              <p className="flex items-center pt-2"><span className="w-30 font-bold">{t('minimum')}</span> {data.tempMin !== undefined ? `${data.tempMin}°C` : "-"}</p>
              <p className="flex items-center"><span className="w-30 font-bold">{t('maximum')}</span> {data.tempMax !== undefined ? `${data.tempMax}°C` : "-"}</p>
            </div>
          </div>
        </div>

        {/* 3. LA STAT DU JOUR */}
        <div className="bg-[#cdeaca] rounded-2xl p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-2 text-center">{t('dailyStat')}</h3>
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <span className="text-6xl md:text-7xl font-black tracking-tighter my-2">
              {data.statValue || "0"}
            </span>
            <p className="text-lg font-medium opacity-80">{data.statLabel || t('missingData')}</p>
          </div>
        </div>

        {/* 4. LA NOTE PERSO */}
        <div className="bg-[#c9d9ff] rounded-2xl p-6 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-4 text-center">{t('dailyNote')}</h3>
          <div className="flex-grow flex items-center justify-center">
            <p className="text-sm md:text-base font-medium leading-relaxed opacity-80 text-left">
              {data.personalNote || t('noPersonalNote')}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}