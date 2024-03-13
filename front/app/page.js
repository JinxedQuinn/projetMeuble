// PAGE D'ACCUEIL

/* Importer depuis React les hooks 'useState' et 'useEffect' (= fonctions spéciales fournies par React): 
      - useState utilisé pour gérer l'état local d'un composant fonctionnel
      - useEffect utilisé pour effectuer des opérations après le rendu initial du composant ou après chaque mise à jour (= lorsque le composant est monté) */

"use client"

import React, { useState, useEffect } from 'react';
import Meubles from './components/Meubles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = () => {
    /* Déclare une variable d'état 'data' pour stocker les données récupérées depuis l'API
       Déclare une fonction 'setData' pour mettre à jour la valeur de cet état 'data'
       useState initialise l'état de 'data' avec un tableau vide []  */
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true) // 'loading' indiquera si les données sont en cours de chargement (valeur par défaut = true)

    // Utilise useEffect pour effectuer une action dès que le composant est monté
    useEffect(() => {
        // Déclare une fonction asynchrone pour récupérer les données de l'API
        const fetchData = async () => {
            try {

                // Effectue une requête GET à l'API
                const response = await fetch('http://localhost:3000/api/stuff/');

                // Vérifie si la requête s'est déroulée avec succès
                if (!response.ok) {
                    // Lance une erreur si la requête a échoué
                    throw new Error('Failed to fetch data');
                }

                // Transforme la réponse en JSON
                const jsonData = await response.json();

                // Met à jour les données ('data') avec les données récupérées de l'API
                setData(jsonData);

                // Met à jour l'état 'loading' à 'false' 
                // = les données ont été chargées avec succès => on n'est plus en mode "chargement"
                setLoading(false);

            } catch (error) {
                // Gère les erreurs en affichant un message dans la console
                console.error('Error fetching data:', error);
                setLoading(false)
            }
        };

        // Appelle la fonction fetchData pour récupérer les données lorsque le composant est monté
        fetchData();

    }, []);

    // Rendu JSX du composant Home
    return (
        <>
            <Header />
            <Navbar />
            <div>
                {loading ? (
                    <p className='text-center font-bold'>Chargement...</p>
                ) : (
                    <div>
                        {/* Affiche le composant Meubles (grille de meubles) en lui passant les données récupérées de l'API ('data') en tant que prop */}
                        <Meubles data={data} />
                    </div>
                )
                }
            </div>

            <Footer />
        </>
    );
}

export default Home;