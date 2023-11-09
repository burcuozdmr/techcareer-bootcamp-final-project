import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
import HomePage from './pages/HomePage'
import EventDetailPage from './pages/EventDetailPage'
import EventsPage from './pages/EventsPage'

const router = createBrowserRouter([
  {path:'/', element:<Root/>,children :[
    {index:true, element: <HomePage/>},
    {path:':category', element: <EventsPage/>},
    {path:':category/:eventId', element: <EventDetailPage/>}
  ]}
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

