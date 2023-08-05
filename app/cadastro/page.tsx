'use client'
import Header from '@/components/header';
import CadastroPrestadorForm from '../../components/cadastroPrestador'; // Importe o componente de cadastro de prestador

const CadastroPrestadorPage = () => {
  return (
    <div>
      <Header/>
      <h1>Cadastro de Prestador</h1>
      <CadastroPrestadorForm />
    </div>
  );
};

export default CadastroPrestadorPage;
