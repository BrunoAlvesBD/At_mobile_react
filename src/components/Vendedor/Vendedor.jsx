
export default function VendedorInfo({ vendedor }) {
  return (
    <>
      <h3>Informações do Vendedor</h3>
      <h4>Nome: {vendedor.nome}</h4>
      <span>Avaliação: {vendedor.avaliacao}</span>
      <p>Email: {vendedor.email}</p>
      <p>Contato: {vendedor.telefone}</p>
    </>
  );
}
