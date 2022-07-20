import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import './airline_flightdetails.css';
function Navbar2() {
    return (
        <nav id="navbar2">
            <div class="navelement-img">
                {/* <img src="logonew.jpg" alt="Logo"></img> */}
            </div>
            <div class="navelement">
                <NavLink to='/profile'><div class="navelement">PROFILE</div></NavLink>
            </div>
            <div class="navelement">
                <NavLink to='/homepage2'><div class="navelement">HOME</div></NavLink>
            </div>
            <div class="navelement">
                <NavLink to='/about2'><div class="navelement">ABOUT US</div></NavLink>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                <div>TRAVEL</div>
                </button>
                <div class="dropdown-content">
                    <Link to='/travel_bookingform'>Book a Ticket</Link>
                    <Link to='/travel_trackingportal'>Track your Flight</Link>
                    <Link to='/travel_bookinghistory'>View your Travel History</Link>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                <div>CARGO</div>
                </button>
                <div class="dropdown-content">
                    <Link to='/cargo_bookingform'>Book a Cargo</Link>
                    <Link to='/cargo_trackingportal'>Track your Cargo</Link>
                    <Link to='/cargo_bookinghistory'>View your Cargo History</Link>
                    {/* <Link to='/cargo_status'>View your Cargo Status</Link> */}
                </div>
            </div>
            <div class="navelement">
                <NavLink to='/reportform'><div class="navelement">REPORT</div></NavLink>
            </div>
            <div>
                <Link to='/logout'><BsFillPersonFill size="2em" color="white"/></Link>
            </div>
        </nav>
    )
}

export default Navbar2