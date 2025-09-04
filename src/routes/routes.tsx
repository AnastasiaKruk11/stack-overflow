import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import StartPage from "../components/RouterComponents/StartPage/StartPage";
import RegisterPage from "../components/RouterComponents/RegisterPage/RegisterPage";
import LoginPage from "../components/RouterComponents/LoginPage/LoginPage";
import HomePage from "../components/RouterComponents/HomePage/HomePage";
import PostPage from "../components/RouterComponents/PostPage/PostPage";
import AccountPage from "../components/RouterComponents/AccountPage/AccountPage";
import CreatePostPage from "../components/RouterComponents/CreatePostPage/CreatePostPage";
import MyPostsPage from "../components/RouterComponents/MyPostsPage/MyPostsPage";
import EditPostPage from "../components/RouterComponents/EditPostPage/EditPostPage";
import UsersPage from "../components/RouterComponents/UsersPage/UsersPage";
import UserPage from "../components/RouterComponents/UserPage/UserPage";
import QuestionsPage from "../components/RouterComponents/QuestionsPage/QuestionsPage";
import CreateQuestionPage from "../components/RouterComponents/CreateQuestionPage/CreateQuestionPage";
import EditQuestionPage from "../components/RouterComponents/EditQuestionPage/EditQuestionPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <StartPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/post/:id",
        element: <PostPage />
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/create-post",
        element: <CreatePostPage />,
      },
      {
        path: "/my-posts",
        element: <MyPostsPage />,
      },
      {
        path: "/edit-post",
        element: <EditPostPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/questions",
        element: <QuestionsPage />,
      },
      {
        path: "/create-question",
        element: <CreateQuestionPage />,
      },
      {
        path: "/edit-question",
        element: <EditQuestionPage />,
      },
    ],
  },
]);