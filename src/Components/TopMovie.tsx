import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useContext, useEffect } from "react";
import { TopMovieContext } from "../contexts/TopMovieContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMovieHeader: {
      paddingBottom: 0,
    },
    topMovieList: {
      paddingTop: 0,
    },
    topMovieItem: {
      padding: "2px 0",
    },
  })
);

const TopMovie = () => {
  //styles
  const classes = useStyles();

  //context
  const { topMovies, getTopMovies, toggleWatched } = useContext(TopMovieContext);

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <Box mt={1} ml={2}>
      <Card raised>
        <CardHeader
          title="Top 10 movies of all time"
          className={classes.topMovieHeader}
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary",
          }}
        />

        <CardContent className={classes.topMovieList}>
          <List>
            {topMovies.map((movie) => (
              <ListItem
                button
                className={classes.topMovieItem}
                key={movie.imdbID}
              >
                <ListItemIcon>
                  <Checkbox checked={movie.Watched} onClick={toggleWatched.bind(this, movie.imdbID)}/>
                </ListItemIcon>
                <ListItemText primary={movie.Title} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovie;
