import { useContext } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { CardMovie } from "../../components";

import { MovieFavoriteContext } from "../../context";

import Swal from "sweetalert2";

const Favorites = () => {
	const { favoriteMovies, cleanFavorites } = useContext(MovieFavoriteContext);

	function cleanButton() {
		Swal.fire({
			title: "Clean all Favorites?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Clean!",
		}).then((result) => {
			if (result.isConfirmed) {
				cleanFavorites();
				Swal.fire("Cleaned!", "0 favorited movies.", "success");
			}
		});
	}

	return (
		<Box>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={8}>
						<Typography
							variant="h6"
							sx={{
								textTransform: "capitalize",
							}}
						>
							Favorites
						</Typography>
					</Grid>
					<Grid item xs={4}>
						{favoriteMovies.length > 0 && (
							<Button
								variant="outlined"
								color="warning"
								onClick={cleanButton}
							>
								Clean
							</Button>
						)}
					</Grid>
					{favoriteMovies.length > 0 &&
						favoriteMovies.map((favorite, index) => (
							<CardMovie movie={favorite.movie} key={index} />
						))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Favorites;