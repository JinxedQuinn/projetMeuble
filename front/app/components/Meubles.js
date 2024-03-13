/*  Composant "Meubles" 
        => utilisé pour la page d'accueil page.js
        => affiche une GRILLE DES MEUBLES en vente en utilisant ProductCard pour chaque produit */

        import React from 'react';
        import ProductCard from './ProductCard';
        
        const Meubles = ({ data }) => {
            return (
                <div>
                    <h2 className='text-center'>Bienvenue sur notre site de vente de meubles d'occasion</h2>
                    <p className='text-center'>Il y a actuellement {data.length} meubles en vente</p>
                    <div className='grid grid-cols-3 m-5 p-2'>
                        {/* Afficher une ProductCard pour chaque produit : */}
                        {data.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            );
        }
        
        export default Meubles;
        