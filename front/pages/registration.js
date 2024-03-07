import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Form from '../app/components/Form';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function registration() {
    return (
        <>
            <Header />
            <Navbar />
            <div className='text-center p-2 m-2 border border-blue-700 text-4xl hover:bg-purple-400'>Inscrivez-vous</div>
            <Form />
            <Footer />
        </>)
}

export default registration;