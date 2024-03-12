"use client"

// On importe depuis React les hooks 'useState' et 'useEffect' (= fonctions spéciales fournies par React): 
// - useState utilisé pour gérer l'état local d'un composant fonctionnel
// - useEffect utilisé pour effectuer des opérations après le rendu initial du composant ou après chaque mise à jour (= lorsque le composant est monté)
import { useState, useEffect} from 'react'
import Link from 'next/link'

import Image from "next/image"
import BuyButton from "./BuyButton"


// On définit un composant fonctionnel nommé 'ProductCard'
// = Carte du produit à afficher sur la page d'accueil 
// = encart avec photo principale + type de meuble + prix

const ProductCard = () => {
    // On initialise 2 états locaux 'data' et 'loading' à l'aide du hook useState : 
    const [data, setData] = useState(null) // data stockera les données récupérées
    const [loading, setLoading] = useState(true) // loading indiquera si les données sont en cours de chargement (valeur par défaut = true)
  
    useEffect(() => {
      // Lorsque le composant sera monté => interroger l'API et récupérer des données (=> fonction asynchrone) :   
      const fetchData = async() => {
        try {
          const response = await fetch('http://localhost:3000/api/stuff/')
          if(!response.ok){ 
            throw new Error('Failed to fetch data');
          }
          const responseData = await response.json();
          setData(responseData); // on utilise 'setData' pour mettre à jour l'état 'data' avec les données récupérées depuis l'API
          setLoading(false); // on utilise 'setLoading' pour mettre à jour l'état 'loading' à 'false' = les données ont été chargées avec succès => on n'est plus en mode chargement
        } catch(error) {
           console.log(error)
           setLoading(false)
        }
      }
  
      fetchData()
      
    }, [])


  // Affichage des données :
  // Lorsque les données auront fini de charger, on effectuera un .map sur 'data' pour afficher chaque élément de la liste.
  // Chaque produit sera enveloppé dans un élément <li> avec une clé unique 'key' basée sur l'ID de l'élément 
  return (
    <div> 
        {loading ? ( 
            <p>Chargement...</p>
        ) : (
            <ul className='border border-red-600 grid grid-cols-3 p-2'>         
                {data &&
                    data.map(item => (
                       <li key={item._id} className='border border-blue-600 m-2 text-center'>
                           <Link href='/blank'> <Image 
                              src={item.imageUrl} 
                              alt={item.title}
                              width={200}
                              height={200}
                            />
                            <h2 className='font-bold'>{item.title}</h2></Link>
                            <p>{item.price} €</p>
                            <BuyButton />                     
                        </li>
                    ))
                }        
            </ul>
        )}
    </div>
  )
}

export default ProductCard