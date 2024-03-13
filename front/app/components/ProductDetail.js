/*  Template Fiche Détails Produit
    => Sera utilisé sur la page descriptive de chaque produit [id].js
    => Devra permettre d'afficher les informations détaillées d'un produit : 
      1. une série de photos du meuble
      2. le type
      3. le prix
      4. les dimensions
      5. les couleurs
      6. les matières
      7. un bouton d'achat */

      import React from 'react';
      import Image from 'next/image';
      import BuyButton from './BuyButton';
      
      const ProductDetail = ({ product }) => {
          return (
              <div>
                  <Image 
                    src={product.imageUrl} 
                    alt={product.title} 
                    width={350} 
                    height={350} 
                  />
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>{product.price} €</p>
                  <BuyButton />
              </div>
          );
      }
      
      export default ProductDetail;