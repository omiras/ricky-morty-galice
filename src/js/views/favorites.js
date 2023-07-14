import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export function Favorites() {


    const { store, actions } = useContext(Context);

    console.log(store.favorites)
    return (
        <div className="text-center">
            <h1>Favorite Characters</h1>
            <div className="container">
                <div className="row row-cols-3">
                    {store.favorites.map(c => <Link key={c.id} to={"/character/" + c.id}><div >
                        <img src={c.image}></img>
                        <p>{c.name}</p>
                        <p>{c.visitedTime?.toLocaleString()}</p>
                    </div>
                    </Link>)}
                </div>
            </div>

        </div>
    );

}