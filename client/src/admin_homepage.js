import './airline_flightdetails.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./admin_navbar";
import Footer from "./footer";
import Display from "./display";
import { NavLink, Link } from 'react-router-dom'

function Adminhome() {
    const [ticketrefno, setTicketrefno] = useState("");
    const [traveldetails, setTraveldetails] = useState([]);

    const searchtravel = () => {
        // Axios.post('http://localhost:3001/emp', {
        // }).then((response) => {
        //     setTraveldetails(response.data);
        // });
    }

    return (
        <div id="Admin">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome Admin
                    </h1>
                </center>
            </div>
            <div id="adminhomepage">
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_employeedetails'>Add Employee</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_flightdetails'>Add Flight</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_routedetails'>Add Route</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_maintenancerecord'>Add Maintenance Record</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_modifyempsearch'>Modify Employee</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_modifyflightsearch'>Modify Flight</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_modifyroutesearch'>Modify Route</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_modifymaintsearch'>Modify Maintenance Record</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/cargo_parcelmanagement'>Cargo Status</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/travel_ticketmanagement'>Travel Status</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_deleteemp'>Delete Employee</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_deleteflight'>Delete Flight</Link></Button>
                </div>
                <div id="gridele">
                    {/* <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_deleteroute'>Delete Route</Link></Button> */}
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_deleteroute'>Delete Route</Link></Button>
                </div>
                <div id="gridele">
                    <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_deletemaint'>Delete Maintenance Record</Link></Button>
                </div>
                <div id="gridele">
                    {/* <Button id="button-result" variant="contained" color="primary" onClick={searchtravel}><Link id="sign" to='/airline_deleteroute'>Delete Route</Link></Button> */}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Adminhome;