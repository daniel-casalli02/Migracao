import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAddToCart }) {
  if (!product) return null;

  const { title, price, description, image, rating, category } = product;

  const renderStars = (starsCount = 5) => {
    return '★'.repeat(Math.min(5, Math.max(0, starsCount))) + '☆'.repeat(5 - starsCount);
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.productImage}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        {category && <span className={styles.category}>{category}</span>}
        
        <h2 className={styles.title}>{title}</h2>
        
        {description && <p className={styles.description}>{description}</p>}

        {rating && (
          <div className={styles.ratingContainer}>
            <span className={styles.stars}>{renderStars(rating.stars)}</span>
            <span className={styles.reviewCount}>
              {rating.count} ({rating.reviews} avaliações)
            </span>
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.price}>{price}</span>
          <button 
            className={styles.button}
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}