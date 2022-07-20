import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./admin_navbar";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [ticketrefno, setTicketrefno] = useState("");
    const [status, setStatus] = useState("");
    const [traveldetails, setTraveldetails] = useState([]);

    const manageticket = () => {
        Axios.post('http://localhost:3001/setTicketstatus', {
            refno: ticketrefno,
            status: status
        }).then((response) => {
            if(response.data=='success') {
                alert('Status updated')
                window.location.href='http://localhost:3000/admin_homepage'
            } else {
                alert('Ticket not found/Internal error')
            }
        });
    }

    return (
        <div id="Travel">
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
                    <label>Enter Ticket Reference Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setTicketrefno(event.target.value) }}></input>
                </div>
                <div>
                    <label>Select Status: </label>
                    <select id="Type" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setStatus(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="In Gate">In Gate</option>
                        <option value="Boarding">Delivered</option>
                        <option value="Ready for Takeoff">In Transit</option>
                        <option value="Departed">Cancelled</option>
                        <option value="Arrived">Returned</option>
                    </select>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button variant="contained" color="primary" id="button-result" onClick={manageticket}><Link id="sign" to='/admin_homepage'>Change Status</Link></Button>
                </center>
            </div>
            {traveldetails.map((value, key) => {
                return <div>
                    <Display
                        Ticketrefno={value.Ref_No}
                        Status={value.Status} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;