import React, { useState, useEffect } from 'react';
import './Slide.css';

const photos = [
  'https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/1.jpg?raw=true',
  'https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/4.jpg?raw=true',
  'https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/3.jpg?raw=true',
  'https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/5.jpg?raw=true',
  'https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/2.jpg?raw=true',
  'https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/6.jpg?raw=true',
  'https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/7.jpg?raw=true'

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