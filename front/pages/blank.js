import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function blank(){
    return (
        <>
        <main>
        <Header />
        <Navbar />
        <Footer />
        </main>
        </>
    )
}

export default blank