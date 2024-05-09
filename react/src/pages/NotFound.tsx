import { useRouteError } from "react-router-dom";
import { PageContainer, PaperCenterContainer } from "../components";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <PageContainer>
      <PaperCenterContainer>
        <Typography variant="h3" component="h1" textAlign="center">
          Error: {error.status}
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
          }}
          textAlign="center"
        >
          {error.statusText}
        </Typography>
        <Button onClick={() => navigate(-1)} variant="contained">
          Go back
        </Button>
      </PaperCenterContainer>
    </PageContainer>
  );
}
