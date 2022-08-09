import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

const MenuBar = ({ text, buttonClick, buttonIcon }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{text}
				</Typography>
				<IconButton color="warning" onClick={buttonClick}>
					{buttonIcon}
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default MenuBar;