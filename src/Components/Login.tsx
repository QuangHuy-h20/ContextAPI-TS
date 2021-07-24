import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import { ChangeEvent, useState, useContext, Dispatch, SetStateAction } from "react";
import { AuthContext } from "../contexts/AuthContext";

interface LoginProps {
    isOpen: boolean
    handleClose: Dispatch<SetStateAction<boolean>>
}

const Login = ({isOpen, handleClose}: LoginProps) => {
  //state
  const [username, setUsername] = useState("");

  //context
  const { toggleAuth } = useContext(AuthContext);

  const handleLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    toggleAuth(username);
    setUsername("");
    handleClose(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
      <DialogContent>
        <TextField label="username" onChange={handleLogin} value={username} required />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          variant="contained"
          disabled={username === ""}
          onClick={handleSubmit}
        >Login</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
