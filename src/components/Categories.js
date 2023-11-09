import React from 'react'
import CategoryCard from './CategoryCard'


const Categories = () => {
  return (
    <div style={{marginTop:'20rem', marginBottom:'5rem'}}>
      <CategoryCard title='MUSIC'></CategoryCard>
      <CategoryCard title='EVENTS - ART'></CategoryCard>
      <CategoryCard title='SPORT'></CategoryCard>
    </div>
  )
}

export default Categories
