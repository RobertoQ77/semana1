import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, TextField } from "@mui/material";

const Search = () => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Buscar usuario de github"
            onChange={handleInputChange}
            value={username}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Link to={`/users/${username}`} style={{ textDecoration: "none" }}>
            <Button variant="contained" fullWidth>
              Buscar
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Search;