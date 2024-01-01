import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import AdminPage from "./pages/AdminPage";
import uploadDataToFirebase from "./store/dataUploader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsPage />,
        loader: eventsLoader,
        children: [{ path: ":category", element: <EventsPage /> }],
      },
      { path: "events/:category/:eventId", element: <EventDetailPage /> },
    ],
  },
  { path: "/admin", element: <AdminPage /> },
]);

const App = () => {
  useEffect(() => {
    uploadDataToFirebase();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
