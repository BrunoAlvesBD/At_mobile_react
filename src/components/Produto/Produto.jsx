import styles from './Produto.module.css';
import MediaCard from '../MediaCard/MediaCard';
import Galeria from '../Galeria/Galeria';
import { BaseButton } from '../BaseButton/BaseButton';

export default function Produto(props) {
  const { nome, descricao, preco, avaliacao } = props.produto;
  const precoInvisivel = false;
  const estiloPreco = precoInvisivel ? styles.precoInvisivel : styles.precoProduto;

  return (
    <div>
      <h1 className={styles.cabecalhoProduto}>{nome}</h1>
      <Galeria imagens={props.imagens} />
      <p className={styles.descricaoProduto}><h3>Descrição: {descricao}</h3></p>
      <div className={styles.painelCompra}>
        <p className={estiloPreco}>Avaliação: {avaliacao} / 5.0</p>
        <p className={estiloPreco}>R$ {preco}</p>
        <BaseButton color="black">Comprar</BaseButton>
      </div>
      <ul className={styles.listaProduto}>
        <li><h3>Produtos relacionados </h3></li>
        <div className={styles.containerCard}>
        
        <div className={styles.containerCard}>
          <MediaCard
            produto={{
              nome: "Super Nes",
              descricao: "Super Mario Word, Donkey Kong e diversos outros títulos que marcaram época.",
              preco: "R$ 1.000,99",
              img: "https://ae01.alicdn.com/kf/HTB18tI9chWYBuNjy1zkq6xGGpXaJ/Voor-Snes-16-Bit-Games-Retro-Mini-Tv-Video-Game-Console-Met-94-Ingebouwde-Verschillende-16.jpg"
            }}
            width={300}
          />
          <MediaCard
            produto={{
              nome: "Playstation",
              descricao: "Resident Evil, Gran Turismo, Crash Bandicoot...",
              preco: "R$ 1.199,99",
              img: "https://www.therage.ie/cdn/shop/products/playstation_one_sony_530x.jpg?v=1635954923"
            }}
            width={300}
          />
          <MediaCard
            produto={{
              nome: "Nintendo 64",
              descricao: "Mario 64, Donkey Kong 64, Castlevania...",
              preco: "R$ 1.249,99",
              img: "https://upload.wikimedia.org/wikipedia/commons/0/02/N64-Console-Set.png"
            }}
            width={300}
          />
        </div>
      </div>
            <li className={styles.commentsHeading}><h3>Dúvidas Frequentes</h3> </li>
            <ul className={styles.commentsList}>
              <li className={styles.question}>
                <strong>Ana:</strong> Como funciona a entrada de CDs no Dreamcast?
              </li>
              <li className={styles.answer}>
                <strong>Júlia:</strong> A entrada de CDs do Dreamcast é na parte superior do console.
              </li>
          
            </ul>
            <li className={styles.commentsHeading}><h3>Comentários de compradores</h3></li>
            <ul className={styles.commentsList}>
              <li className={styles.answer}>
                <strong>Marcos:</strong> Ótimo console, entrega rápida!
              </li>
              <li className={styles.answer}>
                <strong>Paola:</strong> Já estou jogando meu jogo favorito no Dreamcast, recomendo!
              </li>
          
            </ul>
            <li className={styles.commentsHeading}>Recursos para comentar</li>
            <p>
              Você pode comentar abaixo sobre sua experiência com o Dreamcast. Estamos ansiosos para ouvir sua opinião!
            </p>
          </ul>
        </div>
      );
}
