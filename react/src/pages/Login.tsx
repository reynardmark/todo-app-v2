import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { PageContainer, PaperCenterContainer } from "../components";
import { SyntheticEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "@mui/material";

import { loginUser } from "../api/users";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { AlertSnackbar } from "../components";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    loginUser(username, password).then((res) => console.log(res));
    console.log("submitted");
  };

  const location = useLocation();

  return (
    <PageContainer>
      <PaperCenterContainer>
        <AlertSnackbar
          open={!!location.state?.message}
          alertText={location.state?.message}
          position={{ vertical: "top", horizontal: "center" }}
        />
        <Typography variant="h6" component="h1" fontWeight={700}>
          Login - TodoApp V2
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            variant="standard"
            id="username"
            size="small"
            label="Username"
            type="text"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <TextField
            variant="standard"
            id="password"
            size="small"
            label="Password"
            value={password}
            tabIndex={-1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            type={showPassword ? "text" : "password"}
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visiblity"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{
                    padding: "0 4px 0 2px",
                  }}
                >
                  <InputAdornment position="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>
                </IconButton>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              margin: "2px 0 8px 0",
            }}
          >
            Login
          </Button>
          <Typography>
            Don't have an account yet?{" "}
            <Link component={RouterLink} to="/register">
              Register
            </Link>
          </Typography>
        </Box>
      </PaperCenterContainer>
    </PageContainer>
  );
}
