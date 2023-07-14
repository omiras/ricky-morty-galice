import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

/**
 * 1. En el fichero layout.js añadir la nueva ruta para que renderice la vista views/favorites.js
 * 2. En el NavBar añadir un nuevo botón para navegar a la vista de favoritos 
 * 3. En esta vista, acceder a store.favorites, y renderizar todos los items alli presentes
 * 4. Para el tema de la fecha en la que hemos añadido como favoriots, teneis que informar de ello con una nueva propiedad en el momento de añadir el character a favorites (desde la vista singlecharacter, o en mismo flux.js)
 * 
 * 
 * Corregimos 17.30 - 17.45
 */

export function Favorites() {

    const { store, actions } = useContext(Context);

    return (
        <div className="text-center">
            <h1>All Characters</h1>
            <div className="container">
                <div className="row row-cols-3">
                    {store.favorites.map((c) => (
                        <Link key={c.id} to={"/character/" + c.id}>
                            <div >
                                <img src={c.image}></img>
                                <p>{c.name}</p>
                                <p>{c.created.toLocaleString()}</p>
                            </div>{" "}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}