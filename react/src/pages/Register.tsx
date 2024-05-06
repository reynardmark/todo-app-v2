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

import { createUser } from "../api/users";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submitted");
    createUser(email, password, confirmPassword).then((res) => {
      console.log(res);
    });
  };

  return (
    <PageContainer>
      <PaperCenterContainer>
        <Typography variant="h6" component="h1" fontWeight={700}>
          Register in TodoApp V2
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
            id="email"
            size="small"
            label="Email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
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
          <TextField
            variant="standard"
            id="confirm-password"
            size="small"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "12px",
            }}
          >
            Submit
          </Button>
        </Box>
      </PaperCenterContainer>
    </PageContainer>
  );
}
