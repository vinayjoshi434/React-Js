import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import Home from "./Components/Home/home.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import About from "./Components/About/about.jsx";
import Contact from "./Components/Contact/contact.jsx";
import User from "./Components/User/user.jsx";
import Github from "./Components/Github/github.jsx";


// const router= createBrowserRouter([

// {
// path:'/',
// element:<App/>,
// children:[
// {
//     path:"",
//     element:<Home/>
// },
// {
// path:"about",
// element:<About/>
// },
// {
// path:"contact",
// element:<Contact/>
// }

// ]
// }



// ])

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>
            <Route  path="/contact" element={<Contact/>}/>
            <Route  path="/user/:id" element={<User/>}/>
            <Route  path="/github" element={<Github/>}/>

        </Route>

))

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>
);
