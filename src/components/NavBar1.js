import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar1 = () => {
  const imageStyle = {
  };
  return (
    <div className='container' id='navbar'>
      <div className='row'>
      <div className='col-9'>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="imageStyle" to={"/"}><img src="https://acdn.mitiendanube.com/stores/001/053/068/themes/common/logo-485531772-1650308889-a57ebf07c38e425e3d981eb407bc61b51650308890-480-0.webp"></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to={"/"}>Inicio</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to={"/category/vestidos"}>vestidos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/category/Camisa"}>Camisa</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/category/Pantalones"}>Pantalones</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/category/buzos"}>buzos</NavLink>
        </li>
         <li className="nav-item">
         <Link className="justify-content-end  align-items-center" to={"/cart"}><CartWidget/></Link>
         </li>
       
       
      </ul>
      
    </div>
  </div>
  
</nav>
</div>
</div>
</div>

  )
}

export default NavBar1