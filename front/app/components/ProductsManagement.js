import { useState, useEffect} from 'react'

import Image from "next/image"

const ProductsManagement = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        // Lorsque le composant sera monté => interroger l'API et récupérer des données :   
        const fetchData = async() => {
          try {
            const response = await fetch('http://localhost:3000/api/stuff/')
            if(!response.ok){ 
              throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setData(responseData); 
            setLoading(false); 

          } catch(error) {
             console.log(error)
             setLoading(false)
          }
        }
    
        fetchData()
        
      }, [])

    return (
        <div> 
            {loading ? ( 
                <p>Chargement...</p>
            ) : (
                <ul className='border border-red-600'>         
                    {data &&
                        data.map(item => (
                            <li key={item._id} className='border border-blue-600 m-2 text-center grid grid-cols-3 p-2'>
                                <h2 className='font-bold'>{item.title}</h2>
                                <p>{item.price} €</p>                     
                            </li>
                        ))
                    }        
                </ul>
            )}
        </div>

  )
}

export default ProductsManagement