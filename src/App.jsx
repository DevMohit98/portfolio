import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/home.page";
import Blog from "./page/blog.page";
import Work from "./page/work.page";
import WorkDetails from "./page/work.details";
import Layout from "./layout/Layout.layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Heebo", "Arial", "sans-serif"].join(","),
    },
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:id" element={<WorkDetails />} />
        </Route>
      </>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
