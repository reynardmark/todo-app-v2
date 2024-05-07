import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { PageContainer, PaperCenterContainer } from "../components";
import { useState } from "react";
import { Link } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { createUser } from "../api/users";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, { message: "Must be 3 or more characters long" }),
    password: z
      .string()
      .min(8, { message: "Must be 8 or more characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm password are not the same",
    path: ["confirmPassword"],
  });

interface RegisterFormValues {
  username: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  //react-hook-form
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  //manage form, submit form, form validation
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  // const handleSubmit = (e: SyntheticEvent) => {
  //   e.preventDefault();

  //   createUser(username, password, confirmPassword).then((res) => {
  //     if (res.success) {
  //       //navigate
  //       navigate("/login", {
  //         state: {
  //           message: "You have successfully registered! You may now login.",
  //         },
  //       });
  //     } else {
  //       //show error messages (form validations)
  //       console.log(res);
  //     }
  //   });
  // };

  return (
    <PageContainer>
      <PaperCenterContainer>
        <Typography
          variant="h6"
          component="h1"
          fontWeight={700}
          sx={{ marginBottom: "8px" }}
        >
          Register in TodoApp V2
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
            variant="standard"
            id="email"
            size="small"
            label="Username"
            type="text"
            InputLabelProps={{ shrink: true }}
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username ? errors.username?.message : " "}
            FormHelperTextProps={{
              sx: {
                marginTop: 0,
              },
            }}
          />
          <TextField
            variant="standard"
            id="password"
            size="small"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visiblity"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
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
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : " "}
            FormHelperTextProps={{
              sx: {
                marginTop: 0,
              },
            }}
          />
          <TextField
            variant="standard"
            id="confirm-password"
            size="small"
            label="Confirm Password"
            type="password"
            InputLabelProps={{ shrink: true }}
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? errors.confirmPassword?.message : " "
            }
            FormHelperTextProps={{
              sx: {
                marginTop: 0,
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              margin: "2px 0 8px 0",
            }}
          >
            Register
          </Button>
          <Typography
            sx={{
              fontSize: "0.8rem",
            }}
          >
            Already have an account?{" "}
            <Link component={RouterLink} to="/login">
              Log in
            </Link>
          </Typography>
        </Box>
      </PaperCenterContainer>
    </PageContainer>
  );
}
