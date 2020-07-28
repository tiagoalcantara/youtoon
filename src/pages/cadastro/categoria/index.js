import React from 'react';

import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout';

function CadastroCategoria() {
    return (
      <Layout>
         <h1>Cadastro de Categoria</h1>

          <Link to="/">
            Voltar para home
          </Link>
      </Layout>
    )
}

export default CadastroCategoria;