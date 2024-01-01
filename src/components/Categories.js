import React from 'react'
import CategoryCard from './CategoryCard'


const Categories = () => {
  return (
    <div style={{marginTop:'20rem', marginBottom:'5rem'}}>
      <CategoryCard title='MUSIC' category='Music'></CategoryCard>
      <CategoryCard title='ART' category='Art'></CategoryCard>
      <CategoryCard title='SPORT' category='Sport'></CategoryCard>
    </div>
  )
}

export default Categories
