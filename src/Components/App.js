import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Error from './Components/Error/Error.jsx'
import Gallery from '../../app2/src/Components/Gallery/Gallery.jsx'





let routers = createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'Contact',element:<Contact/>},
    {path:'gallery',element:<Gallery/>},
    {path:'*',element:<Error/>},
  ]}
])

export default function App() {
  return (<RouterProvider router={routers}></RouterProvider>)
    
}