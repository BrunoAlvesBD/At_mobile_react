import { useState } from 'react';
import styles from './Galeria.module.css';
import { BaseButton } from '../BaseButton/BaseButton';

export default function Galeria({ imagens }) {
  const [img, setImg] = useState(0);
  const quant = imagens.length;
  const ultimoIndice = quant - 1;

  const passarProxima = () => {
    if (img < quant - 1) {
      setImg(img + 1);
    } else {
      setImg(0);
    }
  };

  const passarAnterior = () => {
    if (img > 0) {
      setImg(img - 1);
    } else {
      setImg(ultimoIndice);
    }
  };

  return (
    <div>
      <img className={styles.imgProduto} src={imagens[img]} alt={`Imagem ${img + 1}`} />
      <div className={styles.imgControl}>
        <BaseButton onClick={passarAnterior}>Anterior</BaseButton>
        {imagens.map((imagem, indice) => (
          <img
            key={indice}
            className={styles.imgMinGaleria}
            onClick={() => setImg(indice)}
            src={imagem}
            alt={`Imagem ${indice + 1}`}
          />
        ))}
        <BaseButton onClick={passarProxima}>Próximo</BaseButton>
      </div>
    </div>
  );
}
