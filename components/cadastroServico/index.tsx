import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import Styles from "./cadServico.module.scss"; // Importar os estilos do módulo
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FormData {
  nome: string;
  descricao: string;
  valor: number;
}

const CadastroServicoForm: React.FC = () => {
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
      await axios.post('http://localhost:8000/api/servicos', data);
      reset();
      setSuccessMessage('Serviço cadastrado com sucesso!');
      setErrorMessage(null);
      setShowConfirmation(true);

      
    } catch (error) {
      setErrorMessage('Ocorreu um erro ao cadastrar o serviço. Por favor, tente novamente mais tarde.');
      setSuccessMessage(null);
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
        <h1>Cadastrar Serviço</h1>
        {showConfirmation && (
          <div className={successMessage ? Styles.success : Styles.error}>
            {successMessage || errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('nome', { required: true })} placeholder="Nome do serviço" />
          {errors.nome && <span>Este campo é obrigatório</span>}

          <textarea {...register('descricao', { required: true })} placeholder="Descrição do serviço" />
          {errors.descricao && <span>Este campo é obrigatório</span>}

          <input type="number" {...register('valor', { required: true, min: 0 })} placeholder="Valor do serviço" />

          <button>Cadastrar</button>
        </form>
        <Link href="/">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default CadastroServicoForm;
