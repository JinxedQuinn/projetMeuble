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
        <div className='grid grid-cols-2 m-30 p-20 text-center'>

            {/* Colonne de gauche (image) */}
            <div className="flex justify-center items-center m-5">
                <Image
                    src={product.imageUrl}
                    alt={product.title}
                    width={350}
                    height={350}
                    className="max-w-full max-h-full"
                />
            </div>

            {/* Colonne de droite (informations du produit) */}
            <div className="flex flex-col justify-center items-center">
                <h2 className='font-bold mb-2 p-5'>{product.title}</h2>
                <p className="flex justify-center items-center mb-2 p-10">{product.description}</p>
                <p className="flex justify-center items-center mb-2 p-15">{product.price} €</p>
                <div className="flex justify-center items-center mb-2 p-15">    
                    <BuyButton />
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;