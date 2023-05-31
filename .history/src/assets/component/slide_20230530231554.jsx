import React, { useState, useEffect } from 'react';

const photos = [
  'https://s2.glbimg.com/1o2J-rf2G9qtlQlm82gaq-mFBec=/0x129:1024x952/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png',
  'url_da_imagem2.jpg',
  'url_da_imagem3.jpg',
  // Adicione mais URLs de imagens conforme necessário
];

const TransitionGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto === photos.length - 1 ? 0 : prevPhoto + 1));
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentPhoto]);

  return (
    <div>
      <h2>Transição Infinita de Fotos</h2>
      <img src={photos[currentPhoto]} alt="Imagem" />
    </div>
  );
};

export default TransitionGallery;