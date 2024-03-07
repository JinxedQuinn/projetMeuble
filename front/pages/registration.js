import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Form from '../app/components/Form';
import '../app/globals.css';

function registration() {
    return (
        <>
            <Header />
            <Navbar />
            <div>
                <Form />
            </div>
        </>)
}

export default registration;