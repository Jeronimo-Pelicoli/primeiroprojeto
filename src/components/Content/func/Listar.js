import React, { useState, useEffect } from "react";
import api from "../../../services/api";

export default function Listar() {

    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        api.get('proj').then(response => {
            setProjects(response.data);
        });
    }, []);

    return (
        <div>
            <p>Listar</p>
            <ul>
                {projects.map(project => <li key={project.id}>{project.title} {project.description}</li>)}
            </ul>
        </div>
    )
}