import React, { useState, ChangeEvent } from 'react';
import countryStates from '../countryStates';

interface FormState {
  endereco: string;
  cidade: string;
  estado: string;
  tipoMoradia: string;
}

function FormEndereco() {
  const [formState, setFormState] = useState<FormState>({
    endereco: '',
    cidade: '',
    estado: countryStates[0],
    tipoMoradia: 'Casa',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => {
    const { name, value } = event.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCityBlur = () => {
    if (/^\d/.test(formState.cidade)) {
      setFormState((prevState) => ({
        ...prevState,
        cidade: '',
      }));
    }
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      tipoMoradia: event.target.value,
    }));
  };

  const handleAddressInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/[^\w\s]/gi, '');
  };

  return (

    <fieldset>
      <legend>Dados de Endereço</legend>

      <div>
        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          value={ formState.endereco }
          onChange={ handleInputChange }
          maxLength={ 200 }
          onInput={ handleAddressInput }
        />
      </div>

      <div>
        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={ formState.cidade }
          onChange={ handleInputChange }
          maxLength={ 28 }
          onBlur={ handleCityBlur }
        />
      </div>

      <div>
        <label htmlFor="estado">Estado</label>
        <select
          id="estado"
          name="estado"
          value={ formState.estado }
          onChange={ handleInputChange }
        >
          {countryStates.map((state) => (
            <option key={ state } value={ state }>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div>

        <label>
          <input
            type="radio"
            name="tipoMoradia"
            value="Casa"
            checked={ formState.tipoMoradia === 'Casa' }
            onChange={ handleRadioChange }
          />
          Casa
        </label>

        <label>
          <input
            type="radio"
            name="tipoMoradia"
            value="Apartamento"
            checked={ formState.tipoMoradia === 'Apartamento' }
            onChange={ handleRadioChange }
          />
          Apartamento

        </label>
      </div>

    </fieldset>
  );
}

export default FormEndereco;
