import React, { useState } from "react";
import api from "../../../services/api";

export default function Adicionar() {

    const [ id, setId ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');

    function handleCreateProject(e) {
        e.preventDefault();

        api.post('proj', {
            id,
            title,
            description
        });
    }

    return (
        <div>
            <p>Adicionar</p>
            <form onSubmit={handleCreateProject}>
                <label htmlFor="id">IdProject</label>
                <input type="text" id="id" value={id} onChange={(e) => {setId(e.target.value)}} />
                
                <label htmlFor="title">TitleProject</label>
                <input type="text" id="title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                
                <label htmlFor="description">DescriptionProject</label>
                <input type="text" id="description" value={description} onChange={(e) => {setDescription(e.target.value)}} />

                <button typer="submit">Enviar</button>
            </form>
        </div>
    )
}