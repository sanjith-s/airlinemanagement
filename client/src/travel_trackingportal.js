    import './airline_flightdetails.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";
import { NavLink, Link } from 'react-router-dom'

function App() {
    const [travelrefno, setTravelrefno] = useState("");
    const [traveldetails, setTraveldetails] = useState([]);

    const searchtravel = () => {
        Axios.post('http://localhost:3001/settravelrefno', {
            refno: parseInt(travelrefno)
        }).then((response) => {
        });
    }

    let username = localStorage.getItem('name');

    return (
        <div id="Travel">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome {username}
                    </h1>
                </center>
            </div>
            <div id="details">
                <div>
                    <label>Enter Ticket Reference Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setTravelrefno(event.target.value) }}></input>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button variant="contained" color="primary" id="button-result" onClick={searchtravel}><Link id="sign" to='/travel_status'>View Flight Status</Link></Button>
                </center>
            </div>
            {traveldetails.map((value, key) => {
                return <div>
                    <Display
                        Ticketrefno={value.BRef_No} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;