import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { PageContainer, PaperCenterContainer } from "../components";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <PageContainer>
      <PaperCenterContainer>
        <Typography variant="h3" component="h1" textAlign="center">
          {isRouteErrorResponse(error) && `Error: ${error.status}`}
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
          }}
          textAlign="center"
        >
          {isRouteErrorResponse(error) ? error.statusText : error.message}
        </Typography>
        {isRouteErrorResponse(error) ? (
          <Button onClick={() => navigate(-1)} variant="contained">
            Go back
          </Button>
        ) : (
          <Button onClick={() => navigate(0)} variant="contained">
            Retry
          </Button>
        )}
      </PaperCenterContainer>
    </PageContainer>
  );
}
