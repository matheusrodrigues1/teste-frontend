import React, { useState } from 'react';

interface UploadCSVProps {
  onUpload: (file: File) => void;
}

const UploadCSV: React.FC<UploadCSVProps> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Importar</button>
    </div>
  );
};

export default UploadCSV;
