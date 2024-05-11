import { Box, Paper, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Tasks() {
  return (
    <Paper sx={{ p: 4 }} elevation={2}>
      <Box component="form" display="flex" justifyContent="center">
        <TextField
          variant="standard"
          name="add"
          id="add"
          type="text"
          label="Add task"
        />
      </Box>
      <Paper elevation={4}>This contains the list of tasks</Paper>
    </Paper>
  );
}
