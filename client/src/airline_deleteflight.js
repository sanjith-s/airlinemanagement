import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./admin_navbar";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [flno, setFlno] = useState("");
    const [flightdetails, setFlightdetails] = useState([]);

    const delflight =() => {
        Axios.post('http://localhost:3001/delflight', {
            id: flno
        }).then((response) => {
            if(response.data=='success') {
                alert('Flight deleted')
                window.location.href='http://localhost:3000/admin_homepage';
            } else {
                console.log(response.data)
                alert('Flight not found/Error')
            }
        });
    }

    return (
        <div id="Flights">
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
            </div>
            <br></br>
            <div>
                <center>
                    <Button id="button-result" variant="contained" color="primary" onClick={delflight}><Link id="sign" to='/admin_homepage'>Delete Flight</Link></Button>
                </center>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;