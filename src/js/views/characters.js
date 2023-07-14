import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * 1. Declarar una variable de estado para albergar todos los characters
 * 2. usar useEffect para hacer una única petición a la API https://rickandmortyapi.com/api/character y traernos todos los personajes de la serie
 * 3. Iterar la variable de estado para mostrar  la imagen y nombre de cada uno de los personajes 
 * Corregimos a las 18h
 */

export function Characters() {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    const getAllCharacters = () => {
        fetch('https://rickandmortyapi.com/api/character?page=' + page)
            .then(res => res.json())
            .then(data => setCharacters(data.results));
    }

    useEffect(() => {
        getAllCharacters(); // <--- implementame !!
    }, [page])

    return (
        <div className="text-center">
            <h1>All Characters</h1>
            <div className="container">
                <div className="d-flex justify-content-between mb-2">
                    {page !== 1 && <button onClick={() => setPage(page - 1)} className="btn btn-primary">Prev</button>}
                    <button onClick={() => setPage(page + 1)} className="btn btn-primary">Next</button>
                </div>
                <div className="row row-cols-3">
                    {characters.map(c => <Link key={c.id} to={"/character/" + c.id}><div >
                        <img src={c.image}></img>
                        <p>{c.name}</p>
                    </div>
                    </Link>)}
                </div>
            </div>

        </div>
    );
}