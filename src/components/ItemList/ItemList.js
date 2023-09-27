import React from 'react'
import Item from '../Item/Item'

const ItemList = ({Items}) => {
  return (
    <div className='row' id='itemlist'>
      {Items.map(i =>
      <div className='col-md-3'
       key={i.id}>
       <Item  item= {i}/>
       </div>
      )}
    </div>
  )
}

export default ItemList