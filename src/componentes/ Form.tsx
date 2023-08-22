import React, { useState } from 'react';

// vou escrever no codigo porque estou com dificuldade em entender como a logica dos estados(useState) funciona!

function Form() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  //   o codigo a baixo pega o nome e coloca todos os caracteres em maisculo e salva no estado SetName

  const nomeMaisculo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value.toUpperCase());
  };

  //   o codigo a baixo vai pegar o email que for digitado e colocar no estado SetEmail

  const pegaEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // o codigo a baixo vai remover qualquer caractere que nao for numerico!!

  const pegaCPF = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cleanedCpf = event.target.value.replace(/\D/g, '');

    setCpf(cleanedCpf);
  };

  return (

    <fieldset>
      <legend>Dados Pessoais</legend>

      <div>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={ nome }
          onChange={ nomeMaisculo }
          maxLength={ 40 }
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={ email }
          onChange={ pegaEmail }
          maxLength={ 50 }
        />
      </div>

      <div>
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          id="cpf"
          value={ cpf }
          onChange={ pegaCPF }
          maxLength={ 11 }
        />
      </div>

    </fieldset>
  );
}

export default Form;
