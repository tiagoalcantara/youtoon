import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {

  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  }

  const [categories, setCategories] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);

  const handleOnChange = (e) => {
    setFormValues(
      {
        ...formValues,
        [e.target.name]: e.target.value,
      }
    );
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCategories([...categories, formValues.name]);
    setFormValues(initialValues);
  }

  return (
      <Layout>
         <h1 style={{textAlign: 'center'}}>Cadastro de Categoria</h1>
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

            <div style={{textAlign: 'center', marginTop: "16px"}}>
              <Button className="ButtonLink">Cadastrar</Button>
            </div>
          </form>

          <ul>
            {categories.map((categoria, key) => {
              return (
                <li key={`${categoria}-${key}`}>
                  {categoria}
                </li>);
            })}
          </ul>


          <div style={{textAlign: 'center'}}>
            <Link to="/">
              Voltar para home
            </Link>
          </div>
      </Layout>
    )
}

export default CadastroCategoria;