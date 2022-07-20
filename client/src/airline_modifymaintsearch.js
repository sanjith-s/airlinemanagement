import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./admin_navbar";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [maintid, setMaintid] = useState("");
    const [maintdetails, setMaintdetails] = useState([]);

    const searchmaint = () => {
        Axios.post('http://localhost:3001/findmaint', {
            id: maintid
        }).then((response) => {
            if(response.data=='success') {
                window.location.href='http://localhost:3000/airline_maintmodify';
            } else if(response.data== 'notfound') {
                alert("Record Not found!")
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
                    <label>Enter Maintenance ID: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setMaintid(event.target.value) }}></input>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={searchmaint}>Search Maintenance Record</Button>
                </center>
            </div>
            {maintdetails.map((value, key) => {
                return <div>
                    <Display
                        Maint_ID={value.Maint_ID} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;