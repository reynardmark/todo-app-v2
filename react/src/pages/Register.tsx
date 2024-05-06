import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { PageContainer } from "../components";
import { SyntheticEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <PageContainer>
      <Paper
        component="div"
        elevation={1}
        sx={{
          display: "flex",
          padding: "20px 24px",
          justifyContent: "center",
          flexDirection: "column",
          minWidth: "320px",
          gap: "8px",
        }}
      >
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
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <TextField
            variant="standard"
            id="password"
            size="small"
            label="Password"
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
      </Paper>
    </PageContainer>
  );
}
