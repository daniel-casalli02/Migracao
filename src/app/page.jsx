
'use client';

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import { productsData } from '../data/products.js';
import styles from './page.module.css';

export default function HomePage() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(productsData);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.gradeDeProdutos}>
        {produtos.map((produto) => (
          <ProductCard key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
}