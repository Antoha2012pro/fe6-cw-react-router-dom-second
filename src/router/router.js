import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        // ErrorBoundary: NotFound // або { path: "*", Component: NotFound, } у children
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "posts",
                Component: Posts,
            },
            {
                path: "posts/:id",
                Component: PostDetail
            },
            {
                path: "*",
                Component: NotFound,
            }
        ]
    }
])