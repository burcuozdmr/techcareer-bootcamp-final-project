import React from 'react'
import CategoryCard from './CategoryCard'


const Categories = ({events}) => {
 
  const musicEvents = events.filter((event) => event.category === 'Music');
  const artEvents = events.filter((event) => event.category === 'Art');
  const sportEvents = events.filter((event) => event.category === 'Sport');
  return (
    <div style={{marginTop:'3rem', marginBottom:'12rem'}}>
      <CategoryCard title='MUSIC' category='Music' events={musicEvents}></CategoryCard>
      <CategoryCard title='ART' category='Art' events={artEvents}></CategoryCard>
      <CategoryCard title='SPORT' category='Sport' events={sportEvents}></CategoryCard>
    </div>
  )
}

export default Categories
