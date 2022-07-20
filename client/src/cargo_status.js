import React from 'react'
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Header from "./navbar2";
import Footer from "./footer";
import { useState } from "react";
import Axios from "axios";


function Summary() {
    let username = localStorage.getItem('name');
    const [cargstatus, setCargstatus] = useState({});
    
        Axios.post('http://localhost:3001/getcargostatus', {
        }).then((response) => {
            //console.log(response.data)
            setCargstatus(response.data)
            //console.log(refno)
            //setCoordinates(response.data);
        });
        
    return (
        <><Header />
            <center>
                <div id="bill">
                    Reference Number: {cargstatus.refno}<br />
                    Your Cargo Status: {cargstatus.status}
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

export default Summary