import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import AdminPage from "./pages/AdminPage";



const router = createBrowserRouter([
  {path:'/', element:<Root/>,children :[
    {index:true, element: <HomePage/>},
    {path:'events', element: <EventsPage/>},
    {path:'events/:category', element: <EventsPage/>},
    {path:'events/:category/:eventId', element: <EventDetailPage/>},
  ]},
  {path:'/admin', element: <AdminPage/>}
])

const App = () => {
  return(
    <RouterProvider router={router}></RouterProvider>
  )
};

export default App;
