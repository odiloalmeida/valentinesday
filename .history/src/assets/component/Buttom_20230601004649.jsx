import React, { useState } from 'react';
import './Buttom.css';

const ExemploBotao = () => {
  const [mostrarBotao, setMostrarBotao] = useState(true);

  const handleClick = () => {
    setMostrarBotao(false);
  };

  return (
    <div>
      {mostrarBotao && (
        <button onClick={handleClick}>
          <p>Click Aqui</p>
          <img src="https://github.com/odiloalmeida/valentinesday/blob/master/src/assets/imgs/buttom.png?raw=true" alt="Coração" />
        </button>
      )}
      {!mostrarBotao && (
        <div>
          <p>
            Estou te presenteando com uma borboleta porque é o que você simboliza para mim, atualmente. A evolução que a borboleta é, você é a "coisa" que eu nem acreditava mais que existia.
          </p>
          <p>
            A morte de tudo que passou, e o nascimento do amor calmo, sincero, companheiro, carinhoso, doce e honesto. Sinceramente me custa até hoje acreditar que você caiu de para-quedas na minha vida. Te admiro muito, pois vejo muitas características minhas, raras, em você.
          </p>
          <h5>Obrigado por existir.</h5>
          <h3>Ps: Seu Homem, de hoje até o fim dos tempos.</h3>
        </div>
      )}
    </div>
  );
};

export default ExemploBotao;
