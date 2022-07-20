import './airline_flightdetails.css';
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Header from "./navbar2";
import Footer from "./footer";
import { useState } from "react";
import Axios from "axios";

function Cpp() {
    let username = localStorage.getItem('name');
    const [refno, setRefno] = useState("");
    Axios.post('http://localhost:3001/getcargoid', {
    }).then((response) => {
        //console.log(response.data)
        setRefno(response.data)
        //console.log(refno)
        //setCoordinates(response.data);
    });
    return (
        <div id="Cargo">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome {username}
                    </h1>
                    <h3 id="title2">
                        Payment Successful
                    </h3>
                    <h3 id="title2"><b>
                        Your Cargo Reference Number is: {refno}
                        </b>
                    </h3>
                    <h3 id="title2">
                        Do you want to go back to the home page ?
                    </h3>
                </center>
            </div>
            <br></br>
            <center>
            {/* <div>
                <Button variant="contained" color="primary" onClick><Link id="sign" to='/cargo_status'>View Status</Link></Button>
            </div>
            <br></br> */}
            <div>
                <Button variant="contained" color="primary" onClick><Link id="sign" to='/homepage2'>Back to Homepage</Link></Button>
            </div>
            </center>
            <Footer />
        </div>
    );
}


export default Cpp;