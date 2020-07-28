import React from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Layout from '../../components/Layout';

import dadosIniciais from '../../data/dados_iniciais.json';

const RenderCarousels = () => (dadosIniciais.categorias.map(categoria => (<Carousel category={categoria}/>)));

function Home() {
  return (
      <Layout>
        <BannerMain
          videoTitle={dadosIniciais.categorias[1].videos[0].titulo}
          url={dadosIniciais.categorias[1].videos[0].url}
          videoDescription={"Bee and PuppyCat é uma websérie de desenho animado. Gira em torno de Bee (dublado por Allyn Rachel nos EUA), uma mulher desempregada com seus vinte anos, que de repente encontra uma criatura misteriosa chamada PuppyCat."}
        />

        {RenderCarousels()}

      </Layout>
  );
}

export default Home;