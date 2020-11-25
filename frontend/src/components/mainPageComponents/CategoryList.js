import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import CategoryCard from './CategoryCard';


const CategoryList = ({ categories }) => {
  return (
    <Fragment>
      <div className='category__card__container'>
        {categories.map(category => {
          return <CategoryCard key={category.name} category={category} />
        })}
      </div>
      {/* <h1 className='explore__header'>Explore</h1> */}
    </Fragment>
  )
}


export default CategoryList;