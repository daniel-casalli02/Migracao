import Image from 'next/image';
import styles from './Header.module.css';

export default function Header({ title, subtitle, totalProducts }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image 
          src="/images/aguia-careca.png" 
          alt="Logo da Empresa" 
          width={120} 
          height={40} 
          priority={true} 
        />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      
      <div className={styles.stats}>
        <span>Produtos na loja: {totalProducts}</span>
      </div>
    </header>
  );
}