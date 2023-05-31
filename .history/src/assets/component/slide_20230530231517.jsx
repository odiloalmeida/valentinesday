import React, { useState, useEffect } from 'react';

const photos = [
  'url_da_imagem1.jpg',
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