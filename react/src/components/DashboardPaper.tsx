import { Paper, Typography } from "@mui/material";

interface DashboardPaperProps {
  title: string;
  count: number;
}

export default function DashboardPaper({ title, count }: DashboardPaperProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        width: "240px",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        height="100px"
        sx={{
          margin: "auto",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
        }}
      >
        {count}
      </Typography>
    </Paper>
  );
}
