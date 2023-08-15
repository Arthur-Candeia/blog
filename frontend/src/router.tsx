import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Posts from "./components/Posts/Posts";
import SinglePost from "./components/SinglePost/SinglePost";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Content />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/posts/:id',
        element: <SinglePost />
      },
    ]
  }
])

export default router;