import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayproductos from '../../json/arrayProductos.json'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item,setitem] = useState ([]);
    const {id}= useParams();
  
    useEffect (()=>{
        const promesa= new Promise ((resolve)=>{
            setTimeout (()=>{
            resolve (arrayproductos.find (item=> item.id === parseInt(id)));
            },2000)
        })
        promesa.then((data)=>{
        setitem(data)
        }) 
        
    }, [id]) 
  return (
    <div className='container'>
     <ItemDetail item={item}/>

    </div>
  )
}

export default ItemDetailContainer