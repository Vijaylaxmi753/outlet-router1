import { Outlet } from "react-router-dom";
// import MainNavigaion from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <h1>RootLayout</h1>
      <Outlet />
    </>
  );
}

export default RootLayout;
