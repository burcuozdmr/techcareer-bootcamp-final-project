import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as eventsLoader }  from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import AdminPage from "./pages/AdminPage";
import uploadDataToFirebase from "./store/dataUploader";
import AdminLogIn from "./admin/components/AdminLogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: eventsLoader,
    children: [
      { index: true, element: <HomePage />,loader: eventsLoader, },
      {
        path: "events",
        element: <EventsPage />,
        loader: eventsLoader,
        children: [{ path: ":category", element: <EventsPage /> }],
      },
      { path: "events/:category/:eventId", element: <EventDetailPage /> },
    ],
  },
  { path: "/logIn", element: <AdminLogIn/> },
  { path: "/admin", element: <AdminPage/>,loader: eventsLoader, },
]);

const App = () => {
  useEffect(() => {
    uploadDataToFirebase();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
