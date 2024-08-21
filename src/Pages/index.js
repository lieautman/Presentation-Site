import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Resume from "./Resume"
import NoPageFound from "./NoPageFound"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function Pages() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NoPageFound />,
    },
    {
      path: "/Presentation-Site",
      element: <Home />,
      errorElement: <NoPageFound />,
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <NoPageFound />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <NoPageFound />,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <NoPageFound />,
    },
    {
      path: "/resume",
      element: <Resume />,
      errorElement: <NoPageFound />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Pages
