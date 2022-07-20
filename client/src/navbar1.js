// import React from 'react';
// import { render } from "react-dom"
// import { BrowserRouter, Routes, Route } from "./react-router-dom";
// const navbar= () => {
//   return (
//   <Routes>
//   <div>
//     <li>
//       <Link to="/">Dogs</Link>
//     </li>
//     <li>
//       <Link to="/cats">Cats</Link>
//     </li>
//     <li>
//       <Link to="/sheeps">Sheeps</Link>
//     </li>
//     <li>
//       <Link to="/goats">Goats</Link>
//     </li>
//   </div>
//   </Routes>
//   );
// }
// export default navbar;

import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import './airline_flightdetails.css';

function Navbar1() {
    return (
        <nav id="navbar1">
            <div class="navelement-img">
                {/* <img src='logonew.jpg' alt="Logo" /> */}
            </div>
            <div class="navelement">
                <NavLink to='/homepage1'><div class="navelement">HOME</div></NavLink>
            </div>
            <div class="navelement">
                <NavLink to='/about1'><div class="navelement">ABOUT US</div></NavLink>
            </div>
            <div>
                <Link to='/login'><BsFillPersonFill size="2em" color="white"/></Link>
            </div>
        </nav>
    )
}

export default Navbar1