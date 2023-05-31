import React, { useState, useEffect } from 'react';
import './Slide.css';

const photos = [
  'https://s2.glbimg.com/1o2J-rf2G9qtlQlm82gaq-mFBec=/0x129:1024x952/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png',
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