import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Aside from '../../components/Aside';
import "./styles.css";
import Products from '../../components/Products';

function Landing() {

    return (
        <div className="app">
            <div className="header">
                <Header />
            </div>
            <div className="aside">
                <Aside />
            </div>
            <div className="content">
                <Products />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Landing;