import { Grid } from "@material-ui/core";
import React from "react";
import "./App.css";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import ThemeButton from "./Components/ThemeButton";
import TopMovie from "./Components/TopMovie";
import AuthContextProvider from "./contexts/AuthContext";
import MovieContextProvider from "./contexts/MovieContext";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import TopMovieContextProvider from "./contexts/TopMovieContext";

function App() {
  return (
    <TopMovieContextProvider>
      <AuthContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <ProgressContextProvider>
              <Navbar />
              <Grid container>
                <Grid item xs={4}>
                  <TopMovie />
                </Grid>
                <Grid item xs={4}>
                  <Movies />
                </Grid>
              </Grid>
              <ThemeButton />
            </ProgressContextProvider>
          </ThemeContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </TopMovieContextProvider>
  );
}

export default App;
