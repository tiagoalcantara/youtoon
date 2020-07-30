import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
// eslint-disable-next-line no-unused-vars
import { ICategory } from '../../../components/Carousel/interfaces/category';

interface formFields {
  name: string,
  description: string,
  color: string,
}

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  };

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [formValues, setFormValues] = useState<formFields>(initialValues);

  useEffect(() => {
    const URL = 'http://localhost:3333/categorias';

    setTimeout(() => {
      fetch(URL).then(async (res) => {
        const data = await res.json();
        setCategories([...data]);
      });
    }, 2000);
  }, []);

  const handleOnChange = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement;

    setFormValues(
      {
        ...formValues,
        [target.name]: target.value,
      },
    );
  };

  const handleOnSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setCategories([...categories]);
    setFormValues(initialValues);
  };

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>Cadastro de Categoria</h1>
      <form onSubmit={handleOnSubmit}>

        <FormField
          label="Nome da categoria"
          value={formValues.name}
          onChange={handleOnChange}
          name="name"
        />

        <FormField
          label="Descrição"
          value={formValues.description}
          onChange={handleOnChange}
          name="description"
          type="textarea"
        />

        <FormField
          label="Cor"
          value={formValues.color}
          onChange={handleOnChange}
          name="color"
          type="color"
        />

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Button className="ButtonLink">Cadastrar</Button>
        </div>
      </form>

      {!categories.length && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categories.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <div style={{ textAlign: 'center' }}>
        <Link to="/">
          Voltar para home
        </Link>
      </div>
    </Layout>
  );
}

export default CadastroCategoria;
