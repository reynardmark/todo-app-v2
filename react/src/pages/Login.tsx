import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  AlertSnackbar,
  PageContainer,
  PaperCenterContainer,
} from "../components";
import { useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "@mui/material";

import { LoginUserResponse, loginUser } from "../api/users";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { setToken } from "../utils/token";

interface LoginFormValues {
  username: string;
  password: string;
}

const schema = z.object({
  username: z.string().trim().min(1, { message: "Must not be empty" }),
  password: z.string().min(1, { message: "Must not be empty" }),
});

export default function Login() {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState, resetField } = form;
  const { errors } = formState;

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = (data: LoginFormValues) => {
    const { username, password } = data;

    loginUser(username, password).then(
      ({ token, result }: LoginUserResponse | void) => {
        if (result.success) {
          //redirect
          setToken(token);
          // navigate("", {
          //   state: {
          //     message: result.success,
          //   },
          // });
        } else {
          setErrorMessage("Invalid username or password!");
          setIsSnackbarOpen(!isSnackbarOpen);
          resetField("password");
        }
      },
    );
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setIsSnackbarOpen(!isSnackbarOpen);
    }
  }, []);

  return (
    <>
      <AlertSnackbar
        open={isSnackbarOpen}
        alertText={errorMessage ? errorMessage : location.state?.message}
        position={{ vertical: "top", horizontal: "center" }}
        setIsSnackbarOpen={setIsSnackbarOpen}
        severity={errorMessage ? "error" : location.state?.snackBarSeverity}
      />
      <Typography variant="h6" component="h1" fontWeight={700}>
        Login - SampleApp V2
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register("username")}
          helperText={errors.username ? errors.username.message : " "}
          error={!!errors.username}
          variant="standard"
          id="username"
          size="small"
          label="Username"
          type="text"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          {...register("password")}
          helperText={errors.password ? errors.password.message : " "}
          error={!!errors.password}
          variant="standard"
          id="password"
          size="small"
          label="Password"
          tabIndex={-1}
          type={showPassword ? "text" : "password"}
          InputLabelProps={{ shrink: true }}
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
    </>
  );
}
