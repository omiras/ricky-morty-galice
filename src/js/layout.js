import React, { useContext, useState } from "react";
import { Context } from "./store/appContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Characters } from "./views/characters";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SingleCharacter } from "./views/singlecharacter";
import { Favorites } from "./views/favorites";

//create your first component
const Layout = () => {
	const { store, actions } = useContext(Context);


	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar numFavorites={store.favorites.length} />
					<Routes>
						{/** path: ruta que pondriamos en la URL del navegador
						 * element: el componente/vista que vamos a renderizar
						 */}
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/all-characters" element={<Characters />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/character/:id" element={<SingleCharacter />} />
						{/** /single/1, /single/patata , /single/loquesea */}
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
