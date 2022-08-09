import { useState, createContext, useContext } from "react";

import { AuthContext } from "./AuthContext";

export const MovieFavoriteContext = createContext();

export const MovieFavoriteProvider = ({ children }) => {
	const { user } = useContext(AuthContext);

	const favorites =
		JSON.parse(localStorage.getItem("movieapp.favorites")) ?? [];

	const [favoriteMovies, setFavoriteMovies] = useState(favorites);

	const addToFavorite = (movie) => {
		const favorite = {
			movie,
			created_favorited: new Date(),
			user_id: user.id,
		};

		favoriteMovies[favoriteMovies.length] = favorite;
		setFavoriteMovies(favoriteMovies);
		saveInLocalStorage(favoriteMovies);
	};

	const removeFavorite = (id) => {
		const newFavoriteMovies = favoriteMovies.filter(
			(favorite) => favorite.movie.imdbID !== id
		);
		setFavoriteMovies(newFavoriteMovies);
		saveInLocalStorage(newFavoriteMovies);
	};

	const cleanFavorites = () => {
		setFavoriteMovies([]);
		saveInLocalStorage([]);
	};

	const saveInLocalStorage = (favorites) => {
		localStorage.setItem("movieapp.favorites", JSON.stringify(favorites));
	};

	// vamos hacer una funcion que retorne 1 o 0
	// si el id existe en nuestro localStorage retornamos si no
	const isIncludeInFavorites = (id) => {
		const movie = favoriteMovies.findIndex(
			(favorite) =>
				favorite.movie.imdbID === id && favorite.user_id === user.id
		);

		// cuando findIndex no encuentra a un elemento retorna -1
		return movie === -1 ? 0 : 1;
	};

	return (
		<MovieFavoriteContext.Provider
			value={{
				favoriteMovies,
				addToFavorite,
				isIncludeInFavorites,
				removeFavorite,
				cleanFavorites,
			}}
		>
			{children}
		</MovieFavoriteContext.Provider>
	);
};