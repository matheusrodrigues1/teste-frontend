"use client"
import React from 'react';
import ImportacaoServicosForm from '@/components/importacaoServicos'; // Importe o componente do formulário de importação
import Header from '@/components/header';

const ImportacaoServicosPage: React.FC = () => {
  return (
    <div>
      <Header/>
      <ImportacaoServicosForm />
    </div>
  );
};

export default ImportacaoServicosPage;
