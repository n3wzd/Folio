import React, { useEffect } from 'react';

const createPreloadFile = (name) => 
    [`${process.env.PUBLIC_URL}/${name}-1.mp4`,
        ...[2, 3, 4, 5].map(i => `${process.env.PUBLIC_URL}/${name}-${i}.png`)];
const createPreloadFiles = (nameList) => [].concat(...nameList.map(createPreloadFile));
const preloadFiles = createPreloadFiles(["LocaQuest", "FlutPlayer", "Writer", "RPG-map-generator", "Folio", "NETS-app", "vaccination"]);

const PreloadResources = () => {
  useEffect(() => {
    preloadFiles.forEach((file) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = `${process.env.PUBLIC_URL}/${file}`;
      link.as = file.endsWith('.mp4') ? 'video' : 'image';
      document.head.appendChild(link);
    });
  }, []);

  return (
    <></>
  );
};

export default PreloadResources;
