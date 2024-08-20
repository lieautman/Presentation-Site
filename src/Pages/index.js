import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Resume from "./Resume/Resume"
import Error from "./Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function Pages() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/Presentation-Site",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <Error />,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <Error />,
    },
    {
      path: "/resume",
      element: <Resume />,
      errorElement: <Error />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Pages
