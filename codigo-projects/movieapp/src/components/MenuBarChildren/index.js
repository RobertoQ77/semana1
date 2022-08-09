import { AppBar, Toolbar, Typography } from "@mui/material";

const MenuBarChildren = ({ text, children }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{text}
				</Typography>
				{children}
			</Toolbar>
		</AppBar>
	);
};

export default MenuBarChildren;