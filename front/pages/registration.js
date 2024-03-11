import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Inscription from '../app/components/Login';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function registration() {
    return (
        <>
            <Header />
            <Navbar />
            <Inscription />
            <Footer />
        </>)
}

export default registration;