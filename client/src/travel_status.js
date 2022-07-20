import React from 'react'
import Axios from "axios";
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Header from "./navbar2";
import Footer from "./footer"
import { useState } from "react";


function Summary() {
    let username = localStorage.getItem('name');
    const [travelstatus, setTravelstatus] = useState({});
  
        Axios.post('http://localhost:3001/gettravelstatus', {
        }).then((response) => {
            //console.log(response.data)
            //alert(response.data)
            setTravelstatus(response.data)
            //console.log(refno)
            //setCoordinates(response.data);
        });
        
    return (
        <><Header />
            <center>
                <div id="bill">
                    Reference Number: {travelstatus.refno}<br />
                    Your Ticket Status: {travelstatus.status}
                </div>
            </center>

            <div>
                <center>
                    <Button id="button-result" variant="contained" color="primary" onClick><Link id="sign" to='/homepage2'>Back to Home Page</Link></Button>
                </center>
            </div>
            <Footer />
        </>
    )
}

export default Summary;