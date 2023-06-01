import React, { useState, useEffect } from 'react';
import './Slide.css';

const photos = [
  'https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/1.jpg?raw=true',
  'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBLJxz_SAemfr2g8xGscgjn60sbFhXmI2_-UH8koj&s',
  // Adicione mais URLs de imagens conforme necessário
];

const TransitionGallery = () => {
    const [currentPhoto, setCurrentPhoto] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentPhoto((prevPhoto) => (prevPhoto === photos.length - 1 ? 0 : prevPhoto + 1));
      }, 3000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="slide-container">
        <h2>Te Amo</h2>
        {photos.map((photo, index) => (
          <img
            key={index}
            className={`slide-image ${index === currentPhoto ? 'active' : ''}`}
            src={photo}
            alt="Imagem"
            style={{ display: index === currentPhoto ? 'block' : 'none' }}
          />
        ))}
      </div>
    );
  };
  
  export default TransitionGallery;