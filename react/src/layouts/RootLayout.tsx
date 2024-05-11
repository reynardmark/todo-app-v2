// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { SideTopBarLayout, WholePageLayout } from ".";

// const isLoggedIn = true;

// export default function RootLayout() {
//   const navigate = useNavigate();

//   if (isLoggedIn) {
//     return <SideTopBarLayout />;
//   }

//   return isLoggedIn ? <SideTopBarLayout /> : <WholePageLayout />;

//   // useEffect(() => {
//   //   //if user is not yet logged in, redirect to /login
//   //   navigate("/login", {
//   //     state: {
//   //       message: "You are not yet logged in.",
//   //       snackBarSeverity: "warning",
//   //     },
//   //   });
//   // }, []);
// }
