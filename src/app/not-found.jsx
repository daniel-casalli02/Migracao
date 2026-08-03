import styles from './not-found.module.css'
import Link from "next/link";


export default function notfound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Erro 404</h1>
      </div>
      <div className={styles.volta}>
        <Link href="/" className={styles.link}>
          Voltar para a home
        </Link>
      </div>

    </div>
  )
}