import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	LoginView,
	SearchView,
	SearchResultsView,
	FavoritesView,
} from "../pages";
import { MainLayout } from "../layouts";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginView />} />
				<Route element={<MainLayout />}>
					<Route path="/search" element={<SearchView />} />
					<Route
						path="/search/:searchText"
						element={<SearchResultsView />}
					/>
					<Route path="/favorites" element={<FavoritesView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;