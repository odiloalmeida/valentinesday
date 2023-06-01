import "./App.css";
import TransitionGallery from './assets/component/slide.jsx'

function App() {

  return (
    <div className="App">
      <header>
        <TransitionGallery/>
      </header>

      <main>

        <h1>Feliz dia dos namorados</h1>
        <title>Assiste o vídeo abaixo</title>
        <iframe width="360" height="360" src="https://www.youtube-nocookie.com/embed/I-I7shJc64g?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>Estou te presenteando com uma borboleta porque, é o que voce simboliza pra mim, atualmente. A evolução que a borboleta é, voce é a "coisa" que eu nem acreditava mais que existia.</p>
        <p>A morte de tudo que passou, e o, nascimento do amor calmo, sincero, companheiro, carinhoso, doce e honesto. Sinceramente me custa até hoje acreditar que voce caiu de para-quedas na minha vida. Te admiro muito pois vejo muitas caracteristicas minhas, raras, em voce.</p>
        <h5>Obrigado por existir.</h5>
        <h3>Ps: Seu Homem, de hoje até o fim dos tempos.</h3>
        
        </main>
    </div>
  );
}

export default App;
