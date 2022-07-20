import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [routeid, setRouteid] = useState("");
    const [routedetails, setRoutedetails] = useState([]);

    const searchroute = () => {
        Axios.post('http://localhost:3001/findroute', {
            routeid: routeid
        }).then((response) => {
            if(response.data=='success') {
                window.location.href='http://localhost:3000/airline_routemodify';
            } else if(response.data== 'notfound') {
                alert("Route Not found!")
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
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={searchroute}>Search Route</Button>
                </center>
            </div>
            {routedetails.map((value, key) => {
                return <div>
                    <Display
                        Route_ID={value.Route_ID} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;