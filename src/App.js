import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root, { loader as eventsLoader } from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventDetailPage from "./pages/EventDetailPage";
import EventsPage from "./pages/EventsPage";
import AdminPage, { action as newEventAction } from "./pages/AdminPage";
import AdminLogIn from "./admin/components/AdminLogIn";
import FilterResultPage from "./pages/FilterResultPage";
import FilterRoot from "./pages/FilterRoot";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: eventsLoader,
    children: [
      {
        path: "/",
        element: <FilterRoot />,
        loader: eventsLoader,
        children: [
          {
            index: true,
            element: <HomePage></HomePage>,
            loader: eventsLoader,
          },
          {
            path: "filter-result",
            loader: eventsLoader,
            element: <FilterResultPage />,
          },
        ],
      },
      {
        path: "events",
        element: <EventsPage />,
        loader: eventsLoader,
        children: [{ path: ":category", element: <EventsPage /> }],
      },
      {
        path: "events/:category/:eventId",
        element: <EventDetailPage />,
        loader: eventsLoader,
      },
    ],
  },
  { path: "/logIn", element: <AdminLogIn /> },
  {
    path: "/admin",
    element: <AdminPage />,
    loader: eventsLoader,
    action: newEventAction,
    children: [{ path: ":eventId", element: <AdminPage /> }],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
