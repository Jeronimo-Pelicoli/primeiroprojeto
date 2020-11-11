import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Aside from '../../components/Aside';
import Content from '../../components/Content';

import "./styles.css";
import { useParams } from 'react-router-dom';

function Usuario() {

    let { tarefa } = useParams();

    return (
        <div className="app">
            <div className="header">
                <Header />
            </div>
            <div className="aside">
                <Aside />
            </div>
            <div className="content">
                <Content title={tarefa} />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Usuario;