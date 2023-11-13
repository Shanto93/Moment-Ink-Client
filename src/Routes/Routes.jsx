import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AddBlog from "../pages/AddBlog/AddBlog";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import WishList from "../pages/WishList/WishList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../pages/PrivateRoute";
import BlogDetails from "../pages/Home/BlogDetails";
import UpdateBlogDetails from "../pages/Home/UpdateBlogDetails";
import ErrorPage from "../components/ErrorPage";
// import PrivateRoute from './../pages/PrivateRoute';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            element: <Home></Home>,
            // loader: () => fetch("http://localhost:5000/blog"),
        },
        {
            path:'/blog/:_id',
            element:<PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
            loader: () => fetch("http://localhost:5000/blog"),

        },
        {
            path:'/update/:id',
            element:<PrivateRoute><UpdateBlogDetails></UpdateBlogDetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/blog/${params.id}`)
        },
        {
            path:'/addBlog',
            element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>,
        },
        {
            path:'/allBlogs',
            element: <PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/blog'),
        },
        {
            path:'/featuredBlogs',
            element: <PrivateRoute><FeaturedBlogs></FeaturedBlogs></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/users'),
        },
        {
            path:'/wishList',
            element: <PrivateRoute><WishList></WishList></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/wishlist'),
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
      ]
    },
  ]);

  export default router;