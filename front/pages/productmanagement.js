import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import ProductsManagement from '../app/components/ProductsManagement';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function management() {
    return (
        <>
            <Header />
            <Navbar />
            <h2 className='text-center m-2 font-bold'>Gestion des Produits</h2>
            <ProductsManagement />
            <Footer />
        </>)
}

export default management;