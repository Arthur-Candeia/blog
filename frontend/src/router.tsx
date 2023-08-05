import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Content />
      }
    ]
  }
])

export default router;