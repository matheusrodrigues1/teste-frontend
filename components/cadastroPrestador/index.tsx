import React, { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Styles from './cadastro.module.scss';
import Link from 'next/link';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
}

const CadastroPrestadorForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post('http://localhost:8000/api/prestadores', data);
      reset();
      setSuccessMessage('Prestador cadastrado com sucesso!');
      setErrorMessage(null);
      setShowConfirmation(true);

      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao cadastrar o prestador. Por favor, tente novamente mais tarde.');
      setSuccessMessage(null);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);
    }
  };

  // UseEffect para esconder a mensagem após 3 segundos
  useEffect(() => {
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);

      // Limpe o timer quando o componente for desmontado ou quando showConfirmation mudar
      return () => clearTimeout(timer);
    }
  }, [showConfirmation]);

  return (
    <div className={Styles.Container}>
      <div className={Styles.form}>
        <h1>Preencher Formulario</h1>
        {showConfirmation && (
          <div className={successMessage ? Styles.success : Styles.error}>
            {successMessage || errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('nome', { required: true })} placeholder="Nome completo" />
          {errors.nome && <span>Este campo é obrigatório</span>}

          <input type="email" {...register('email', { required: true })} placeholder="E-mail profissional" />
          {errors.email && <span>Este campo é obrigatório</span>}

          <input type="tel" {...register('telefone', { required: true })} placeholder="Celular/Whatsapp" />
          {errors.telefone && <span>Este campo é obrigatório</span>}

          <button type="submit">Cadastrar</button>
        </form>
        <Link href="/servico">
          <button>Cadastrar Serviço</button>
        </Link>
      </div>
    </div>
  );
};

export default CadastroPrestadorForm;
