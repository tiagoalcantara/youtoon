import React from 'react';
import { Link } from 'react-router-dom';

const Pagina404 = () => (
  <div style={{
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  }}
  >
    <h1>Página não encontrada :(</h1>
    <Link to="/">Voltar para a home</Link>
    <iframe title="flappy-bird" style={{ marginTop: '50px', overflow: 'hidden' }} scrolling="no" src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="600" />
  </div>
);

export default Pagina404;
