import { AuthProvider, MovieFavoriteProvider } from "./context";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Router from "./router";

function App() {
  return (
    <AuthProvider>
      <MovieFavoriteProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </MovieFavoriteProvider>
    </AuthProvider>
  );
}

export default App;