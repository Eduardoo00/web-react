import React from 'react'
import { useState } from 'react'

const ItemCount =({stockItems})=> {
    const[counter,setCounter] = useState (1);
    const[stock, setStock] = useState(stockItems);

    const incrementarStock =() => {
        if (counter < stock) {
            setCounter (counter +1);
        }
    }

    const descrementarStock =() => {
        if (counter > 1) {
            setCounter(counter -1)
        } 
    }
  return (
    <div className="container" id="itemcount">
        <div className="row mb-3">
            <div className="col-md-2">
                <div className="btn-group" role="group" aria-label="basic outlined example">
                <botton type="button" className="btn btn-outline-primary" onClick={descrementarStock}>-</botton>
                <botton type="button" className="btn btn-outline-primary">{counter}</botton>
                <botton type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</botton>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCount