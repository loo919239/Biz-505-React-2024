import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import LoginPage from "../comps/LoginPage.js";
import JoinPage from "../comps/JoinPage.js";
import BBsMainPage from "../comps/BBsMainPage.js";
import BBsWritePage from "../comps/BBsWrite.js";
import BookMain from "../comps/bookMainPage.js";

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/book", element: <BookMain /> },
        {
          path: "/bbs",
          element: <BBsMainPage />,
          children: [
            { path: "notice", element: <h1>공지사항</h1> },
            { path: "free", element: <h1>자유게시판</h1> },
            { path: ":item/write", element: <BBsWritePage /> },
          ],
        },
        {
          path: "/user",
          children: [
            { path: "login", element: <LoginPage /> },
            { path: "join", element: <JoinPage /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRouter;
