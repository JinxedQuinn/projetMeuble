import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import ProductsManagement from '../app/components/ProductsManagement';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function login() {
    return (
        <>
            <Header />
            <Navbar />
            <h2>Gestion des Produits</h2>
            <ProductsManagement />
            <Footer />
        </>)
}

export default login;