import React, { useState } from 'react';
import Papa from 'papaparse';

interface UploadCSVProps {
  onUpload: (data: any[]) => void;
}

const UploadCSV: React.FC<UploadCSVProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          onUpload(result.data);
        },
        header: true, // Defina como true se seu CSV tiver uma linha de cabeçalho
      });
    } else {
      setError('Selecione um arquivo para fazer o upload.');
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Importar CSV</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UploadCSV;
