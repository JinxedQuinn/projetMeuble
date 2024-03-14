import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import du hook useRouter

export default function Inscription() {

    const router = useRouter(); // Initialisation du hook useRouter

    // Fonction de gestion de la soumission du formulaire
    const handleSubmit = (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // *** AJOUTER ensuite ici notre logique de CONNEXION ***
        
        // *** Pour le moment, simple redirection en cliquant sur le bouton "Connexion" comme si l'Admin avait rentré un identifiant et un mot de passe corrects => simulation de "connexion réussie en tant qu'Admin" ***

        // Une fois l'authentification réussie, naviguer vers la page gestion de produit "/productmanagement"
        router.push("/productmanagement");
    };

    return (
        <div class="flex justify-center py-10 items-center bg-gray-100">
            <div class="max-w-md bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <h1 class="text-gray-800 font-bold text-2xl mb-1">De retour ?</h1>
                    <p class="text-sm font-normal text-gray-600 mb-7">Connectez vous</p>
                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <img src="/username.svg" className='w-5 inline-block m-2' alt="Profil SVG" />

                        <input class="pl-2 outline-none border-none" type="text" placeholder="Pseudo" />
                    </div>
                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <img src="/mail.svg" className='w-5 inline-block m-2' alt="Profil SVG" />

                        <input class="pl-2 outline-none border-none" type="text" placeholder="Mot de Passe" />
                    </div>

                    <button type="submit"
                        class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Connexion</button>
                    <Link href="/registration"><span class="text-sm ml-2 hover:text-blue-500 cursor-pointer underline">Pas de compte ? Inscrivez-vous !</span></Link>
                </form>
            </div>
        </div>
    );
}