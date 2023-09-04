import React from 'react'

const Presentacion = ({name,price,img,description}) => {
  return (
    <div>
        <img src={img} alt='imagenclsset'/>
        <h1>Hola Somos: {name}</h1>
        <p>{description}</p>
        <p>{price}</p>
    </div>
  )
}

export default Presentacion