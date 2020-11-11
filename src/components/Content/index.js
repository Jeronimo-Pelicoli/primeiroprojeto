import React from "react";
import Listar from './func/Listar';
import Adicionar from './func/Adicionar';
import Atualizar from './func/Atualizar';
import Deletar from './func/Deletar';

export default function Content(props) {
    switch(props.title) {
      case 'listar':
        return <Listar />;
      case 'adicionar':
        return <Adicionar />;
      case 'atualizar':
        return <Atualizar />;
      case 'deletar':
        return <Deletar />;
      default:
        return <div><p>Not found 404</p></div>;
    }
}