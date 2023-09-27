import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayproductos from '../json/arrayProductos.json'
import ItemList from './ItemList/ItemList';


const ItemListContainer = () => {

  const [item,setItem] = useState ([]);
  const {id}= useParams();

  useEffect (()=>{ 
    const fetchData = async ()=> { 
    try{  
     const data =await new Promise ((resolve)=>{
      setTimeout (()=>{ 
        resolve(id ? arrayproductos.filter(item => item.categoria === id) : arrayproductos)
      },2000);
    })
    setItem(data);
   }catch(error){ 
    console.log('error',error);  
    }
  }
  fetchData( ) 
  }, [id]) 

  return (
    <div className='container'>
      <div className='row'>
        <ItemList Items={item}/>
      </div>
    </div>
  ) 
  }


export default ItemListContainer