import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [empid, setEmpid] = useState("");
    //const [status, setStatus] = useState([]);

    const searchemp = () => {
        Axios.post('http://localhost:3001/findemp', {
            empid: empid
        }).then((response) => {
            if(response.data=='success') {
                window.location.href='http://localhost:3000/airline_employeemodify';
            } else if(response.data=='notfound') {
                alert("Record Not found!")
            }
        });
    }

    return (
        <div id="Employees">
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
                    <label>Enter Employee ID: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setEmpid(event.target.value) }}></input>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={searchemp}>Search Employee</Button>
                </center>
            </div>
         
            <Footer />
        </div>
    );
}

export default App;