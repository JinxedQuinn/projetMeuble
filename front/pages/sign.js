import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Signup from '../app/components/Signup';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function registration() {
    return (
        <>
            <Header />
            <Navbar />
            <Signup />
            <Footer />
        </>)
}

export default registration;