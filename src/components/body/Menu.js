import React, { useState } from 'react'
import MenuItem from './MenuItem';
import DISHES from '../../data/dishes';
import Dishdetail from './dishdetail';


const Menu = () => {
  const [dishes] = useState(DISHES);
  const [selactedDish, setSelectedDish] = useState(null);
  const onSelectDish = (dish) => {
    setSelectedDish(dish);
  }
  const menu = dishes.map((dish) => {
    return <MenuItem dish={dish} onSelectDish={onSelectDish} key={dish.id} />;
  });

  const dishdetail = selactedDish ? <Dishdetail dish={selactedDish} /> : null;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-5'>{menu}</div>
        <div className='col-7'>{dishdetail}</div>
      </div>
    </div>
  );
};

export default Menu;
