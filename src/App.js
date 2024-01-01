import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as eventsRootLoader }  from "./pages/Root";
import HomePage, { loader as eventsHomeLoader } from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import AdminPage, { loader as eventsAdminLoader }  from "./pages/AdminPage";
import uploadDataToFirebase from "./store/dataUploader";
import AdminLogIn from "./admin/components/AdminLogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: eventsRootLoader,
    children: [
      { index: true, element: <HomePage />,loader: eventsHomeLoader, },
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
  { path: "/admin", element: <AdminPage/>,loader: eventsAdminLoader, },
]);

const App = () => {
  useEffect(() => {
    uploadDataToFirebase();
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
