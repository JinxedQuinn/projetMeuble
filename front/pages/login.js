import React from 'react';
import Header from '../app/components/Header';
import Navbar from '../app/components/Navbar';
import Login from '../app/components/Login';
import Footer from '../app/components/Footer';
import '../app/globals.css';

function login() {
    return (
        <>
            <Header />
            <Navbar />
            <Login />
            <Footer />
        </>)
}

export default login;