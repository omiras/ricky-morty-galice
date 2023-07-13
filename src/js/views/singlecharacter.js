import React from "react";
import { useParams } from "react-router";

export function SingleCharacter() {

    const { id } = useParams();

    /**
     * 1. DEclarar una variable de estado para albergar la información del personaje
     * 2. Mediante el uso de useEffect, hacer una llamada a la API.  Hay que parametrizarla porque solo queremos la info de un personaje. https://rickandmortyapi.com/api/character/1 , nos daría la información del personaje con id=1 
     * 3. Cuando obtengamos la info de la API, actualizar la variable de estado y modificar el JSX para mostrar la información : 
     * 
     * - Nombre
       - Imagen
       - Status
       - Species
        - Gender
     */

    return (
        <div className="card mx-auto" style={{
            width: "18rem"
        }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Título de la tarjeta</h5>
                <p className="card-text">Un texto de ejemplo rápido para colocal cerca del título de la tarjeta y componer la mayor parte del contenido de la tarjeta.</p>
                <a href="#" className="btn btn-primary">Ir a algún lugar</a>
            </div>
        </div>
    );
}