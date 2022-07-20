import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";
import { responsiveFontSizes } from '@material-ui/core';

function App() {
    const [carrefno, setCarrefno] = useState("");
    const [status, setStatus] = useState("");
    const [cargodetails, setCargodetails] = useState([]);

    const managecargo = () => {
        Axios.post('http://localhost:3001/setCargostatus', {
            refno: carrefno,
            status: status
        }).then((response) => {
            if(response.data=='success') {
                alert('Status updated')
                window.location.href='http://localhost:3000/admin_homepage'
            } else {
                alert('Cargo not found/Internal error')
            }
        });
    }

    return (
        <div id="Cargo">
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
                    <label>Enter Cargo Reference Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setCarrefno(event.target.value) }}></input>
                </div>
                <div>
                    <label>Select Status: </label>
                    <select id="Type" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setStatus(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="Delivered">Delivered</option>
                        <option value="In Transit">In Transit</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Returned">Returned</option>
                    </select>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button variant="contained" color="primary" id="button-result" onClick={managecargo}>Change Status</Button>
                </center>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;