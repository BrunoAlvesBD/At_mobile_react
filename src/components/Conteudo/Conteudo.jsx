import Produto from '../Produto/Produto';
import VendedorInfo from '../Vendedor/Vendedor';

export default function Conteudo() {
  const produto = {
    nome: "DreamCast",
    descricao: "Este produto oferece recursos para seu divertimento e traz mais conforto para seus momentos de ócio. Sua tecnologia foi criada para colocar novos desafios para jogadores novatos e especialistas.",
    preco: 1299.99,
    avaliacao: 4.9,
    vendedor: {
      nome: "Maria Gamer da Silva",
      email: "game@jogador.com",
      avaliacao: 4.9,
      telefone: 11987654321
    }
  };

  const imagens = [
    "https://www.hardware.com.br/wp-content/uploads/static/wp/2023/01/30/2-1.jpg",
    "https://t2.tudocdn.net/526203?w=1920",
    "https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1657091082301-WBMH3E4LTMAK60Z3WVM1/1390020.jpeg?format=2500w",
    "https://www.tietokonemuseo.net/wp-content/uploads/2012/10/segadreamcast.jpg",
    "https://images.gamebanana.com/img/ss/mods/5e6a97a9e5973.jpg",
    "https://i.ytimg.com/vi/Va2k0EM8nyo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAlBLxvSjZGGhYdNG3zCIM2iMoojA",
    "https://i.ytimg.com/vi/7HWBr33aUk0/maxresdefault.jpg",
  ];

  return (
    <>
      <Produto produto={produto} imagens={imagens} />
      <VendedorInfo vendedor={produto.vendedor} />
    </>
  );
}
