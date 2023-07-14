
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ numFavorites }) => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<Link to="/all-characters">
				<span className="btn btn-primary">All Characters</span>
			</Link>
			<Link to="/favorites">
				<span className="btn btn-success">View Favorites<span className="badge text-bg-secondary">{numFavorites}</span></span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
