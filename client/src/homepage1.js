import './airline_flightdetails.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";
import Header from "./navbar1";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [ticketrefno, setTicketrefno] = useState("");
    const [traveldetails, setTraveldetails] = useState([]);

    const searchtravel = () => {
        Axios.post('http://localhost:3001/emp', {
        }).then((response) => {
            setTraveldetails(response.data);
        });
    }

    return (
        <div id="Homepage">
            <Header />
            <div>
                <h1 id="titlehead1">
                    &nbsp;Let's Discover <br></br> The World Together
                </h1>
            </div>
            <div>
            <h2 id="titlehead2">
                    Make Your Hassle-Free Cargo <br></br> And Travel Plans with Us
                </h2>
            </div>
            <div id="buttongroups">
            <div id="buttons">
            <Button id="button-title" variant="contained" onClick><Link id="sign" to='/signup'>Sign Up</Link></Button>
            </div>
            <div id="buttons">
            <Button id="button-title" variant="contained" onClick><Link id="sign" to='/login'>Login</Link></Button>
            </div>
            </div>
            {/* <div id="details">
                <div>
                    <label>Enter Ticket Reference Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setTicketrefno(event.target.value) }}></input>
                </div>
            </div> */}
            <br></br>
            {/* <div>
                <center>
                    <button id="button-result" onClick={searchtravel}>Submit</button>
                </center>
            </div> */}
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