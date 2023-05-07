import {Link, Navigate, createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Home/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../Pages/News/News";
import LogInLayout from "../layout/LogInLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <LogInLayout></LogInLayout>,

        children:[
          {
            path:"/",
            element: <Navigate to="/category/0"></Navigate>
          },
          {
            path:"/login",
            element: <Login></Login>
          },
          {
            path:"/register",
            element: <Register></Register>
          },
          {
            path:"terms",
            element: <Terms></Terms>
          }
        ]
    },
    {
      path: "category",
      element: <Main></Main>,
      children: [
      {
        path: ":id",
        element :<Category></Category>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-naimeh461.vercel.app/categories/${params.id}`)
      }  

      ]
    },
    {
      path:"news",
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ":id",
          element : <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`https://the-news-dragon-server-naimeh461.vercel.app/news/${params.id}`)
        }
      ]
    }
]);
  export default router;