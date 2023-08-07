import React from 'react';
import axios from 'axios';
import UploadCSV from '../importCSV/index';

const ImportacaoServicosForm: React.FC = () => {
  const handleCSVUpload = async (data: any[]) => {
    try {
      // Aqui você pode adicionar a lógica para enviar os dados do CSV para o backend usando uma API.
      // Pode ser uma chamada AJAX ou uma biblioteca de cliente HTTP como o axios.
      const response = await axios.post('http://localhost:8000/api/importacao', { data });
      console.log('Resposta do backend:', response.data);
      // Lógica adicional após o envio bem-sucedido
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      // Lidar com erros, mostrar mensagens de erro, etc.
    }
  };

  return (
    <div>
      <UploadCSV onUpload={handleCSVUpload} />
    </div>
  );
};

export default ImportacaoServicosForm;
