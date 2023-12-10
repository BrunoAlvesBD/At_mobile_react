import styles from './MenuGlobal.module.css';

export default function MenuGlobal() {
  return (
    <nav className={styles.menuNav}>
      <a className={`${styles.itemNav} ${styles.itemNavHome}`}>Minha Loja</a>
      <a className={styles.itemNav}>Produtos</a>
      <a className={styles.itemNav}>Serviços</a>
      <a className={styles.itemNav}>Sobre Nós</a>
      <a className={styles.itemNav}>Contatos</a>
      <a className={`${styles.itemNav} ${styles.itemNavToggle}`}>X</a>
    </nav>
  );
}
