import React, {Suspense} from 'react'
import AdminTotal from '../admin/components/AdminTotal';
import { useLoaderData, Await } from 'react-router-dom'


const AdminPage = () => {
  const {events} = useLoaderData();
  return (
    <>
      <Suspense fallback={ <p style={{textAlign:'center'}}> Loading...</p>}>
        <Await resolve={events}>
          {(events) => <AdminTotal events={events}></AdminTotal>}
        </Await>
      </Suspense>
      
    </>
  )
}

export default AdminPage

