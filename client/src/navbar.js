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
import { NavLink,Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <img src = "https://www.logodesignlove.com/images/airlines/tame-airlines-logo.jpg" alt="Lo"></img>
            <NavLink to='/homepage'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
            <Link to='homepage'><img id="profile" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKYamkRB_qMHdd_HvhrxBlHhExgcAW6Mquw&usqp=CAU" alt="profile" /></Link>
        </nav>
    )
}

export default Navbar