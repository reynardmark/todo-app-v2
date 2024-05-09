import { Outlet } from "react-router-dom";
import { PageContainer, PaperCenterContainer } from "../components";

export default function WholePageLayout() {
  return (
    <PageContainer>
      <PaperCenterContainer>
        <Outlet />
      </PaperCenterContainer>
    </PageContainer>
  );
}
