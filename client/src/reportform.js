import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [complaintdesc, setComplaintdesc] = useState("");
   

    const savedetail = () => {
        
        Axios.post('http://localhost:3001/setreport', {
            uid: localStorage.getItem('uid'),
            complaint: complaintdesc
        }).then((response) => {
            
            alert(`Complaint Received. Your complaint number: ${response.data}. Thank You. We will try to resolve the issue at the earliest`);
        });
    }

    let username = localStorage.getItem('name');

    return (
        <div id="ReportForm">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome to Report Page, {username}
                    </h1>
                </center>
            </div>
            <div id="details">
                <div>
                    <label>Enter Complaint: </label>
                    <textarea
                        onChange={(event) => { setComplaintdesc(event.target.value) }}></textarea>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}><Link id="sign" to='/homepage2'>Submit</Link></Button>
                </center>
            </div>
            <Footer />
        </div>
    );
}

export default App;