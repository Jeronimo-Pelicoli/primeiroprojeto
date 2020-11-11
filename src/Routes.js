import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Usuario from './pages/Usuario';


function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Landing} />
            <Route path='/usuario/:tarefa' component={Usuario} />
        </BrowserRouter>
    )
}

export default Routes;