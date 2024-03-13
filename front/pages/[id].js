/*  PAGE PRODUIT
        => URL / ROUTE DYNAMIQUE => nom du fichier [id].js
        => Lorsque l'utilisateur clique sur l'encart d'un produit dans la page d'accueil (ProductCard), 
           il est automatiquement redirigé vers la page produit détaillée correspondante (en fonction de l'ID du produit) */

"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import ProductDetail from '../app/components/ProductDetail';
import '../app/globals.css';

const ProductPage = () => {
    const router = useRouter(); // Utilisation de useRouter pour obtenir l'ID du produit depuis l'URL
    const { id } = router.query; // Extraction de l'ID du produit depuis l'URL
    const [product, setProduct] = useState(null); // État pour stocker les détails du produit

    // Utilisation de useEffect pour effectuer le fetch des données du produit lorsque l'ID change
    useEffect(() => {

        // Vérifie si l'ID existe
        if (!id) return;

        // Fonction asynchrone pour récupérer les données du produit depuis l'API
        const fetchData = async () => {

            try {
                // Fetch des données du produit en utilisant l'ID de l'URL
                const response = await fetch(`http://localhost:3000/api/stuff/${id}`);

                // Vérification de la réussite de la requête
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }

                // Conversion de la réponse en JSON
                const productData = await response.json();

                // Mise à jour de l'état avec les données du produit
                setProduct(productData);

            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        // Appel de la fonction fetchData pour récupérer les données du produit
        fetchData();

    }, [id]); // Déclenchement du useEffect lorsque l'ID change


    return (
        <>
            <Header />
            <Navbar />
            {/* Affichage du composant ProductDetail si les données du produit existent : */}
            {product && <ProductDetail product={product} />}
            <Footer />
        </>
    );
};

export default ProductPage;