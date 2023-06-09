import "./App.css";
import TransitionGallery from './assets/component/Slide.jsx'
import ExemploBotao from './assets/component/Buttom'

function App() {

  return (
    <div className="App">
      <header>
        <TransitionGallery/>
      </header>

      <main>

        <h1>Feliz dia dos namorados</h1>
        <small>Olha o vídeo</small>
        <iframe width="360" height="360" src="https://www.youtube-nocookie.com/embed/I-I7shJc64g?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        </main>

    <ExemploBotao/>
    </div>
  );
}

export default App;
