import { useContext, useState, useEffect } from "react";
import { MovieFavoriteContext } from "../../context";
import {
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	Chip,
	Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CardMovie = ({ movie }) => {
	const { addToFavorite, isIncludeInFavorites, removeFavorite } =
		useContext(MovieFavoriteContext);

	// sirve para saber si debemos pintar el corazon
	const [value, setValue] = useState(0);

	const StyledRating = styled(Rating)({
		"& .MuiRating-iconFilled": {
			color: "#ff6d75",
		},
		"& .MuiRating-iconHover": {
			color: "#ff3d47",
		},
	});

	const handleChangeFavorite = (event, newValue) => {
		if (newValue === 1) {
			addToFavorite(movie);
		} else {
			removeFavorite(movie.imdbID);
		}
		setValue(newValue);
	};

	useEffect(() => {
		const pintado = isIncludeInFavorites(movie.imdbID);
		setValue(pintado);
	}, [value]);

	return (
		<Grid item xs={12} md={4} my={3}>
			<Card
				sx={{
					height: 430,
				}}
			>
				<CardMedia
					component="img"
					height="240"
					sx={{
						objectPosition: "top",
					}}
					image={movie.Poster}
					alt="green iguana"
				/>
				<CardContent
					sx={{
						cursor: "pointer",
					}}
				>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Typography
								variant="h6"
								sx={{ fontWeight: "bold" }}
							>
								{movie.Title}
							</Typography>
							<Typography variant="body1">
								{movie.Year}
							</Typography>
							<Chip
								label={movie.Type}
								color="success"
								size="small"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							{/* El corazon se pinta si es que value = 1 */}
							<StyledRating
								max={1}
								value={value}
								icon={<FavoriteIcon fontSize="inherit" />}
								emptyIcon={
									<FavoriteBorderIcon fontSize="inherit" />
								}
								onChange={(event, newValue) =>
									handleChangeFavorite(event, newValue)
								}
							/>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CardMovie;