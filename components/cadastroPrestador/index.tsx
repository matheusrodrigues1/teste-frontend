import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
}

const CadastroPrestadorForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>(); // Defina o tipo FormData aqui

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await axios.post('/api/prestadores', data);
      reset();
      // Lógica para exibir mensagem de sucesso ou redirecionar para outra página
    } catch (error) {
      // Lógica para exibir mensagem de erro
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('nome', { required: true })} />
      {errors.nome && <span>Este campo é obrigatório</span>}

      <input type="email" {...register('email', { required: true })} />
      {errors.email && <span>Este campo é obrigatório</span>}

      <input type="tel" {...register('telefone', { required: true })} />
      {errors.telefone && <span>Este campo é obrigatório</span>}

      {/* Outros campos do formulário, como id, descrição do serviço, valor, etc. */}
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroPrestadorForm;
