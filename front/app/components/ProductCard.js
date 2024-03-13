/*  TEMPLATE ENCART PRODUIT
      => Encart cliquable avec quelques infos du produit : 
         photo principale + nom/type de meuble + prix + bouton d'achat 
      => Sera affiché dans la grille de meubles sur la page d'accueil  */

// Import des modules nécessaires depuis React et Next.js
import React from 'react'; // Import de React (facultatif)
import Link from 'next/link'; // Import du composant Link de Next.js pour créer des liens
import Image from "next/image" // Import du composant Image de Next.js pour l'affichage d'images optimisées
import BuyButton from "./BuyButton" // Import du composant BuyButton depuis un fichier local


// Définition du composant fonctionnel ProductCard avec une prop nommée 'product' :
const ProductCard = ({ product }) => {

  // Retour de la fonction = Rendu / Affichage des données
  // Utilise la syntaxe JSX pour décrire l'aspect visuel du composant :
  return (
    <div className='grid grid-cols-1 m-5 p-4 text-center'>
      {/* Utilisation du composant Link pour créer un lien vers la page spécifique du produit en utilisant l'_id du produit dans l'URL : */}
      <Link href={`/${product._id}`}>
        <div>
          <div className="flex justify-center items-center m-5">
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={220}
              height={220}
              className="max-w-full max-h-full"
            />
          </div> 
          <h3 className='font-bold'>{product.title}</h3>
        </div>
      </Link>
      <p className="flex justify-center items-center h-12">{product.price} €</p>
      <div className="flex justify-center items-center"> 
        <BuyButton />
      </div>
    </div>
  );
}

// Export du composant ProductCard pour pouvoir le réutiliser ailleurs dans le projet
export default ProductCard;
