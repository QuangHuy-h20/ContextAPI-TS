import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  Chip,
} from "@material-ui/core";
import { ChangeEvent, useEffect, useState, useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";
import Login from "./Login";
import { AuthContext } from "../contexts/AuthContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  //styles
  const classes = useStyles();

  //context

  const { lastTime, status } = useContext(ProgressContext);
  const { theme } = useContext(ThemeContext);
  const { authInfo:{isAuthenticated}, toggleAuth } = useContext(AuthContext);

  //State
  const [position, setPosition] = useState<string>("Full stack developer");

  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  const [isOpen, setIsOpen] = useState(false);

  const handlePositionChange = (e: ChangeEvent<{ value: unknown }>) =>
    setPosition(e.target.value as string);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppBar position="static" color={theme}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movies</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Chip
              label={`Last time working on this project: ${lastTime} - Status: ${status}`}
            />
            <Box mt={1}>
              <FormControl>
                <Select
                  className={classes.positionSelect}
                  value={position}
                  onChange={handlePositionChange}
                >
                  <MenuItem value="Full-stack developer">
                    Full-stack developer
                  </MenuItem>
                  <MenuItem value="Front-end developer">
                    Front-end developer
                  </MenuItem>
                  <MenuItem value="Back-end developer">
                    Back-end developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box textAlign="center">
            <Box my={1}>
              <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                onClick={
                  isAuthenticated
                    ? toggleAuth.bind(this, "")
                    : setIsOpen.bind(this, true)
                }
              >
                {isAuthenticated ? "Logout" : "Login"}
              </Button>
            </Box>
          </Box>
          <Login isOpen={isOpen} handleClose={setIsOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
