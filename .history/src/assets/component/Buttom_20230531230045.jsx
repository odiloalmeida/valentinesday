import React, { useState } from 'react';

const ExemploBotao = () => {
  const [mostrarBotao, setMostrarBotao] = useState(true);

  const handleClick = () => {
    setMostrarBotao(false);
  };

  return (
    <div>
      {mostrarBotao && <button onClick={handleClick}>Clique para exibir o texto</button>}
      {!mostrarBotao && <p>Texto que será exibido após o clique do botão</p>}
    </div>
  );
};

export default ExemploBotao;


/*<p>Estou te presenteando com uma borboleta porque, é o que voce simboliza pra mim, atualmente. A evolução que a borboleta é, voce é a "coisa" que eu nem acreditava mais que existia.</p>
<p>A morte de tudo que passou, e o, nascimento do amor calmo, sincero, companheiro, carinhoso, doce e honesto. Sinceramente me custa até hoje acreditar que voce caiu de para-quedas na minha vida. Te admiro muito pois vejo muitas caracteristicas minhas, raras, em voce.</p>
<h5>Obrigado por existir.</h5>
<h3>Ps: Seu Homem, de hoje até o fim dos tempos.</h3>*/
