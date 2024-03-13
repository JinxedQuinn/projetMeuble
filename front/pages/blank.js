import React, {useEffect, useState} from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import '../app/globals.css';


function blank(){
    
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:3000/api/stuff/65f02f1d9a9f36d1a1e1c104');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
    
    
    return (
        <>
            <main>
                <Header />
                <Navbar />
                {data && (
                    <div>
                        {/* Afficher les données récupérées de l'API ici */}
                        {/* Par exemple, si les données sont un tableau d'éléments */}
                        {data.map(item => (
                            <div key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>
                )}
                <Footer />
            </main>
        </>
    );
}

export default blank