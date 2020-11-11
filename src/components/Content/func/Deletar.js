import React, { useState } from "react";
import api from "../../../services/api";

export default function Deletar() {
  const [ id, setId ] = useState('');

  function handleDeleteProject(e) {
      e.preventDefault();

      api.delete(`proj/${id}`,{});
  }
  return (
      <div>
          <p>Deletar</p>
          <form onSubmit={handleDeleteProject}>
              <label htmlFor="id">IdProject</label>
              <input type="text" id="id" value={id} onChange={(e) => {setId(e.target.value)}} />
              
              <button typer="submit">Enviar</button>
          </form>
      </div>
  )
}