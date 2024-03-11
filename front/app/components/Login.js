import React from "react";
import Link from 'next/link';

export default function Inscription() {
    return (
        <div class="flex justify-center py-10 items-center bg-gray-100">
            <div class="max-w-md bg-white p-8 rounded-lg shadow-lg">
                <form>
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
                        class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Inscription</button>
                    <Link href="/registration"><span class="text-sm ml-2 hover:text-blue-500 cursor-pointer underline">Pas de compte ? Inscrivez-vous !</span></Link>
                </form>
            </div>
        </div>
    );
}