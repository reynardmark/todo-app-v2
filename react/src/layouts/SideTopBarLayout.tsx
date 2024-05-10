import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { MainContentContainer, Sidebar, Topbar } from "../components";
import { useToggle } from "../hooks";

const DRAWER_WIDTH = 240;

export default function SideTopBarLayout() {
  const [isOpenMobile, toggleOpenMobile, setIsOpenMobile] = useToggle(false);

  return (
    <>
      <Topbar toggleOpenMobile={toggleOpenMobile} drawerWidth={DRAWER_WIDTH} />
      <Box
        display="flex"
        sx={{
          minHeight: "100vh",
        }}
      >
        <Sidebar
          width={DRAWER_WIDTH}
          isOpenMobile={isOpenMobile}
          toggleOpenMobile={toggleOpenMobile}
          setIsOpenMobile={setIsOpenMobile}
        />
        <MainContentContainer drawerWidth={DRAWER_WIDTH}>
          <Outlet />
        </MainContentContainer>
      </Box>
    </>
  );
}
