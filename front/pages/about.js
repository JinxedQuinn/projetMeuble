import React from 'react';
import '../app/globals.css'
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

function AboutPage() {
    return (<>
        <Header />
        <Navbar />
        <div class='m-2 p-2 grid grid-cols-2 cursor-default'>
            <div class='border border-green-700 m-2 transition-transform transform hover:shadow-md flex flex-col h-full'>
                <h1 className='bg-black text-white text-center'>Bienvenue...</h1>
                <p className='text-center m-auto p-1'>... sur le site de "Anciens Meubles pour une Nouvelle Vie" ! Découvrez notre sélection unique de meubles de seconde main restaurés avec amour et prêts à trouver leur place dans votre foyer.</p>
            </div>
            <div class='border border-green-700 m-2 transition-transform transform hover:shadow-md flex flex-col h-full'>
                <h1 className='bg-black text-white text-center'>Page Principale</h1>
                <p className='text-center m-auto p-1'>Sur notre page principale, retrouvez nos meubles disponibles à la vente en ce moment. Chaque meuble est présenté dans un encart comprenant une photo attrayante, le type de meuble, le prix et un bouton pour l'acheter. Cliquez sur chaque encart pour accéder aux détails du produit.</p>
            </div>
            <div class='border border-green-700 m-2 transition-transform transform hover:shadow-md flex flex-col h-full'>
                <h1 className='bg-black text-white text-center'>Détails du Produit</h1>
                <p className='text-center m-auto p-1'>Lorsque vous cliquez sur un meuble, vous accédez à une page dédiée avec une série de photos du meuble ainsi que toutes les informations pertinentes telles que le type, le prix, les dimensions, les couleurs et les matières. Vous trouverez également un bouton pour acheter le meuble si celui-ci correspond à vos besoins.</p>
            </div>
            <div class='border border-green-700 m-2 transition-transform transform hover:shadow-md flex flex-col h-full'>
                <h1 className='bg-black text-white text-center'>Espace Administrateur</h1>
                <p className='text-center m-auto p-1'>Pour la gestion de notre stock, nous disposons d'une page de connexion sécurisée pour les administrateurs. Une fois connecté, vous pouvez accéder à la page de gestion des produits où vous pouvez voir la liste complète de nos meubles. De là, vous avez la possibilité de modifier les informations des produits ou de les supprimer s'ils ont été vendus en magasin.</p>
            </div>
            <div class='border border-green-700 m-2 transition-transform transform hover:shadow-md flex flex-col h-full'>
                <h1 className='bg-black text-white text-center'>Création de Compte Utilisateur</h1>
                <p className='text-center m-auto p-1'>Les utilisateurs ont la possibilité de créer un compte en fournissant leur adresse e-mail et un mot de passe. Cela leur permet de spécifier les types de meubles qu'ils recherchent. La page principale s'adapte alors en fonction de leurs préférences, mettant en avant les meubles correspondant à leurs besoins en premier.</p>
            </div>
            <div class='border border-green-700 m-2 transition-transform transform hover:shadow-md flex flex-col h-full'>
                <h1 className='bg-black text-white text-center'>Proposition de Meubles à Vendre</h1>
                <p className='text-center m-auto p-1'>Les utilisateurs connectés ont également la possibilité de proposer des meubles à vendre. Ces propositions sont visibles uniquement par l'administrateur. Une fois soumises, vous pouvez les valider depuis la page de gestion des produits avant de les proposer à la vente sur le site. Un statut pour chaque meuble facilite la gestion de ces propositions.

                    Chez "Anciens Meubles pour une Nouvelle Vie", nous croyons en la transformation des meubles anciens en trésors modernes. Explorez notre collection et trouvez le meuble parfait pour ajouter une touche d'histoire à votre chez-vous.

                    Connectez-vous maintenant pour découvrir notre sélection exclusive !</p>
            </div>
        </div>
        <Footer />
    </>)
}

export default AboutPage;