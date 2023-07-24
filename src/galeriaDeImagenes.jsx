import React from 'react';

const GaleriaDeImagenes = ({ imagenes }) => {
  return (
    <div>
      {imagenes.map((imagen, index) => (
        <div key={index}>
          <h2>{imagen.titulo}</h2>
          <img src={imagen.url} alt={imagen.titulo} />
        </div>
      ))}
    </div>
  );
};

export default GaleriaDeImagenes;
