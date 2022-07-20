import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import Display from "./display";

let count=0

function App() {
    const [sanitationstatus, setSanitationstatus] = useState("");
    const [servicestatus, setServicestatus] = useState("");
    const [maindate, setMaindate] = useState("");
    const [maintime, setMaintime] = useState("");
    const [flightavail, setFlightavail] = useState("");
    const [maindetails, setMaindetails] = useState([]);
    const [maintobj, setMaintobj] = useState({});
        
    if (count == 0) {
        Axios.post('http://localhost:3001/getmaint', {
        }).then((response) => {
            //onsole.log(response.data);
            setMaintobj(response.data);
            console.log(response.data)
            //console.log(empobj)
            setSanitationstatus(response.data.sanitation)
            setServicestatus(response.data.service)
            setMaindate(response.data.recdate)
            setMaintime(response.data.rectime)
            setFlightavail(response.data.flavail)

            console.log(count)
            count=count+1
        });
    }

    const savedetail = () => {
        Axios.post('http://localhost:3001/setmaint', {
            sanitation: sanitationstatus,
            service: servicestatus,
            recdate: maindate,
            rectime: maintime,
            flavail: flightavail
        }).then((response) => {
            //setEmpdetails(response.data);
            if(response.data='success') {
                alert("Maintenance Record modified")
                window.location.href='http://localhost:3000/admin_homepage';
              }
        });
        //setMessage("Employee is added");
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
                    <label>Enter Sanitation Status: </label>
                    <select id="Sanitation" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setSanitationstatus(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="sanitised">Sanitised</option>
                        <option value="not Sanitised">Not Sanitised</option>
                    </select>
                </div>
                <div>
                    <label>Enter Service Status: </label>
                    <select id="Service" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setServicestatus(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="serviced">Serviced</option>
                        <option value="not Serviced">Not Serviced</option>
                    </select>
                    <br></br>
                </div>
                <div>
                    <label>Enter Date of Maintenance: </label>
                    <input type="date" defaultValue={maintobj.recdate}
                        onChange={(event) => { setMaindate(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Time of Maintenance(hh:mm:ss): </label>
                    <input type="text" placeholder={maintobj.rectime} defaultValue={maintobj.rectime}
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
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Modify Maintenance Record</Button>
                </center>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;