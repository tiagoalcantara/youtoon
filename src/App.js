import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "var(--grayDark)" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Bee and PuppyCat é uma websérie de desenho animado. Gira em torno de Bee (dublado por Allyn Rachel nos EUA), uma mulher desempregada com seus vinte anos, que de repente encontra uma criatura misteriosa chamada PuppyCat."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Footer />
    </div>
  );
}

export default App;