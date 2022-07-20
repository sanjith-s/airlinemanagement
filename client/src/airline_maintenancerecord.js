import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [sanitationstatus, setSanitationstatus] = useState("");
    const [servicestatus, setServicestatus] = useState("");
    const [maindate, setMaindate] = useState("");
    const [maintime, setMaintime] = useState("");
    const [flightavail, setFlightavail] = useState("");
    const [maindetails, setMaindetails] = useState([]);
    const [flno, setFlno] = useState("");

    const savedetail = () => {
        Axios.post('http://localhost:3001/addmaintenance', {
            flno: flno,
            sanitationstatus: sanitationstatus,
            servicestatus: servicestatus,
            maindate: maindate,
            maintime: maintime,
            flightavail: flightavail
        }).then((response) => {
            setMaindetails(response.data);
            if(response.data=='success') {
                window.location.href='http://localhost:3000/admin_homepage'
                alert("Maintenance Record added")
            
            }

        });
    }

    return (
        <div id="MaintenanceRecord">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome Admin
                    </h1>
                </center>
            </div>
            <div id="details">
                <div>
                    <label>Enter Flight Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setFlno(event.target.value) }}></input>
                </div>
                <div>
                    <label>Enter Sanitation Status: </label>
                    <select id="Sanitation" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setSanitationstatus(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="Sanitised">Sanitised</option>
                        <option value="Not Sanitised">Not Sanitised</option>
                    </select>
                </div>
                <div>
                    <label>Enter Service Status: </label>
                    <select id="Service" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setServicestatus(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="Serviced">Serviced</option>
                        <option value="Not Serviced">Not Serviced</option>
                    </select>
                    <br></br>
                </div>
                <div>
                    <label>Enter Date of Maintenance: </label>
                    <input type="date"
                        onChange={(event) => { setMaindate(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Time of Maintenance(hh:mm:ss): </label>
                    <input type="text"
                        onChange={(event) => { setMaintime(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Select Flight Availability: </label>
                    <select id="Availability" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setFlightavail(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="yes">Available</option>
                        <option value="no">Not Available</option>
                    </select>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Add Maintenance Record</Button>
                </center>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;