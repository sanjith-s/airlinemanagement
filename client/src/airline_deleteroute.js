import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./admin_navbar";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [routeid, setRouteid] = useState("");
    const [routedetails, setRoutedetails] = useState([]);

    const delroute =() => {
        Axios.post('http://localhost:3001/delroute', {
            id: routeid
        }).then((response) => {
            if(response.data=='success') {
                alert('Route deleted')
                window.location.href='http://localhost:3000/admin_homepage';
            } else {
                console.log(response.data)
                alert('Route not found/Error')
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
                        onChange={(event) => { setRoutedetails(event.target.value) }}></input>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                    <Button id="button-result" variant="contained" color="primary" onClick={delroute}><Link id="sign" to='/admin_homepage'>Delete Route</Link></Button>
                </center>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;