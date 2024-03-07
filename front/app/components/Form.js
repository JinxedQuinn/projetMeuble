import React from "react"

export default function Form() {
    return (
        <div className="border border-lime-500 p-2 m-2">
            <form className="">
                <input type="text" placeholder="Entrez votre Nom" />
                <input type="text" placeholder="Entrez votr Prénom" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Mot de passe" />
                <input type="text" placeholder="Confirmer le mot de passe" />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    
    )
}