/* eslint-disable no-alert */
import React, { useState } from 'react';

interface FormJobType {
  curriculo: string;
  cargo: string;
  descriçãoCrg: string;
}

function FormJob() {
  const [formJob, setFormJob] = useState<FormJobType>({
    curriculo: '',
    cargo: '',
    descriçãoCrg: '',
  });

  const [showAlert, setShowAlert] = useState(true);

  const handleDescriçãoChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setFormJob((prevFormJob) => ({
      ...prevFormJob,
      descriçãoCrg: value, // Corrigido para atualizar 'descriçãoCrg'
    }));
  };

  const handleCargoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormJob((prevFormJob) => ({
      ...prevFormJob,
      cargo: value,
    }));
  };

  const handleCurriculoInput = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setFormJob((prevFormJob) => ({
      ...prevFormJob,
      curriculo: value,
    }));
  };

  const handleMouseEnter = () => {
    if (showAlert) {
      alert('Preencha com cuidado esta informação.');
      setShowAlert(false);
    }
  };

  return (
    <fieldset>
      <legend>Dados de Emprego</legend>

      <div>
        <label htmlFor="curriculo">Resumo do currículo</label>
        <textarea
          id="curriculo"
          name="curriculo"
          maxLength={ 1000 }
          value={ formJob.curriculo }
          onChange={ handleDescriçãoChange }
          onInput={ handleCurriculoInput }
        />
      </div>

      <div>
        <label htmlFor="cargo">Cargo</label>
        <input
          type="text"
          id="cargo"
          name="cargo"
          maxLength={ 40 }
          value={ formJob.cargo }
          onChange={ handleCargoChange }
          onMouseEnter={ handleMouseEnter }
        />
      </div>

      <div>
        <label htmlFor="descriçãoCrg">Descrição do cargo</label>
        <textarea
          id="descriçãoCrg"
          name="descriçãoCrg"
          maxLength={ 500 }
          value={ formJob.descriçãoCrg }
          onChange={ handleDescriçãoChange }
        />
      </div>

    </fieldset>
  );
}

export default FormJob;
