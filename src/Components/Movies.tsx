import { Box, Button, Chip, PropTypes, TextField } from "@material-ui/core";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useState } from "react";
import { ChangeEvent, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { ThemeContext } from "../contexts/ThemeContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieInput: {
      marginRight: "10px",
    },
    movieChip: {
      fontSize: "1.6rem",
      padding: "24px 20px",
      margin: "8px",
    },
  })
);
const Movies = () => {
  //styles
  const classes = useStyles();

  //context
  const { theme } = useContext(ThemeContext);
  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);

  //state
  const [movie, setMovie] = useState("");

  const handleMovieChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMovie(e.target.value);

  return (
    <>
      <Box display="flex" justifyContent="center" my={5}>
        <TextField
          label="Your favorite movie..."
          variant="outlined"
          className={classes.movieInput}
          onChange={handleMovieChange}
          value={movie}
        />
        <Button
          variant="contained"
          color={theme}
          onClick={() => {
            addMovie(movie);
            setMovie("");
          }}
        >
          Add
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.title}
            clickable
            color={chipTheme}
            className={classes.movieChip}
            onDelete={() => deleteMovie(movie.id)}
          />
        ))}
      </Box>
    </>
  );
};

export default Movies;
