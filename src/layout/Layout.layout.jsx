import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../ui";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default Layout;
