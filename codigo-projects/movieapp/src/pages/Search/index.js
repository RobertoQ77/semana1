import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const history = useNavigate();

  function searchInput(event) {
    setSearchText(event.target.value);
  }

  function searchButton() {
    if (searchText === "") return;
    history(`/search/${searchText}`);
  }

  return (
    <Box>
      <Container maxWidth="sm">
        <Grid container mt={6}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h2">OMDB Search</Typography>
                <Stack
                  mt={2}
                  direction="row"
                  justifyContent="space-between"
                  spacing={2}
                >
                  <TextField
                    label="Movie or tv show..."
                    fullWidth
                    onChange={searchInput}
                  />
                  <Button variant="contained" fullWidth onClick={searchButton}>
                    Search
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;