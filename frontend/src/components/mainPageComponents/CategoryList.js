import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CategoryCard from './CategoryCard';


const CategoryList = ({ categories }) => {
  return (
    <div className='category__card__container'>
      {categories.map(category => {
        return <CategoryCard key={category.name} category={category} />
      })}
    </div>
  )
}


export default CategoryList;