/*  Composant "Meubles" 
        => utilisé pour la page d'accueil page.js
        => affiche une GRILLE DES MEUBLES en vente en utilisant ProductCard pour chaque produit */

        import React from 'react';
        import ProductCard from './ProductCard';
        
        const Meubles = ({ data }) => {
            return (
                <div>
                    <h2 className='text-center'>Bienvenue sur notre site de vente de meubles d'occasion</h2>
                    <p className='text-center'>Nombre de meubles actuellement disponibles : {data.length}</p>
                    <div className='border border-red-600 grid grid-cols-3 m-5 p-2'>
                        {/* Afficher une ProductCard pour chaque produit : */}
                        {data.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            );
        }
        
        export default Meubles;
        