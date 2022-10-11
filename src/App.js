import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import FReact from "./components/FReact/FReact";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },

        {
          path: "/cart/:cartId",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.cartId}`
            );
          },
          element: <FReact></FReact>,
        },
        {
          path: "/statistic",

          element: <Statistics></Statistics>,
        },
        { path: "/blog", element: <Blog></Blog> },
       
      ],
    },

    { path: "*", element: <Error></Error> },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
