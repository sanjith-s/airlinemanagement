import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [routeid, setRouteid] = useState("");
    const [deplocation, setDeplocation] = useState("");
    const [arrlocation, setArrlocation] = useState("");
    const [totstops, setTotstops] = useState("");
    const [distance, setDistance] = useState("");
    const [routedetails, setRoutedetails] = useState([]);

    const savedetail = () => {
        Axios.post('http://localhost:3001/addroute', {
            routeid: routeid,
            deplocation: deplocation,
            arrlocation: arrlocation,
            totstops: totstops,
            distance: distance
        }).then((response) => {
            setRoutedetails(response.data);
            if(response.data=='success') {
                alert('Route Inserted');
                window.location.href="http://localhost:3000/admin_homepage"
            }
        });
    }

    return (
        <div id="Routes">
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
                    <label>Enter Route ID: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setRouteid(event.target.value) }}></input>
                </div>
                <div>
                    <label>Enter Departure Location: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setDeplocation(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Arrival Location: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setArrlocation(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Total Stops: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setTotstops(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Distance of Route: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setDistance(event.target.value) }}></input>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Add Route</Button>
                </center>
            </div>
            {routedetails.map((value, key) => {
                return <div>
                    <Display
                        Route_ID={value.Route_ID}
                        Dep_Location={value.Start}
                        Arr_Location={value.End}
                        Total_Stops={value.Stops}
                        Distance={value.Distance} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;