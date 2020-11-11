import React from 'react';
import { Link } from 'react-router-dom';

function Aside() {
    return (
        <div className="aside-aside">
            <ul>
                <li><Link to="/usuario/listar">Listar</Link></li>
                <li><Link to="/usuario/adicionar">Adicionar</Link></li>
                <li><Link to="/usuario/atualizar">Atualizar</Link></li>
                <li><Link to="/usuario/deletar">Deletar</Link></li>
                <li><Link to="/">Go home</Link></li>
            </ul>  
        </div>
    )
}

export default Aside;