import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [flno, setFlno] = useState("");
    const [flightdetails, setFlightdetails] = useState([]);

    const searchflight = () => {
        Axios.post('http://localhost:3001/findflight', {
            flno: flno
        }).then((response) => {
            if(response.data=='success') {
                window.location.href='http://localhost:3000/airline_flightmodify';
            } else if(response.data=='notfound') {
                alert("Record Not found!")
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
                <Button id="button-result" variant="contained" color="primary" onClick={searchflight}>Search Flight</Button>
                </center>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;