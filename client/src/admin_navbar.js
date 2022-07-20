import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './airline_flightdetails.css';

function Navbar2() {
    return (
        <nav id="adminnav">
            <div class="navelement-img">
                {/* <img src="logonew.jpg" ></img> */}
            </div>
            <div class="navelement">
                <NavLink to='/admin_homepage'><div class="navelement">HOME</div></NavLink>
            </div>
            {/* <div class="navelement">
                <NavLink to='/about2'>About</NavLink>
            </div> */}
            <div class="dropdown">
                <button class="dropbtn">
                    EMP
                </button>
                <div class="dropdown-content">
                    <Link to='/airline_employeedetails'>Add Employee</Link>
                    <Link to='/airline_modifyempsearch'>Modify Employee</Link>
                    <Link to='/airline_deleteemp'>Delete Employee</Link>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    FLIGHT
                </button>
                <div class="dropdown-content">
                    <Link to='/airline_flightdetails'>Add Flight</Link>
                    <Link to='/airline_modifyflightsearch'>Modify Flight</Link>
                    <Link to='/airline_deleteflight'>Delete Flight</Link>
                    {/* <Link to='/cargo_status'>View your Cargo Status</Link> */}
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    ROUTE
                </button>
                <div class="dropdown-content">
                    <Link to='/airline_routedetails'>Add Route</Link>
                    <Link to='/airline_modifyroutesearch'>Modify Route</Link>
                    <Link to='/airline_deleteroute'>Delete Route</Link>
                    {/* <Link to='/cargo_status'>View your Cargo Status</Link> */}
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    SERVICE
                </button>
                <div class="dropdown-content">
                    <Link to='/airline_maintenancerecord'>Add Maintenance Record</Link>
                    <Link to='/airline_modifymaintsearch'>Modify Maintenance Record</Link>
                    <Link to='/airline_deletemaint'>Delete Maintenance Record</Link>
                    {/* <Link to='/cargo_status'>View your Cargo Status</Link> */}
                </div>
            </div>
            <div>
                <Link to='/logout'><img id="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKYamkRB_qMHdd_HvhrxBlHhExgcAW6Mquw&usqp=CAU" alt="profile" /></Link>
            </div>
        </nav>
    )
}

export default Navbar2