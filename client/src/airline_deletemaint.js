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

    const delmaint =() => {
        Axios.post('http://localhost:3001/delmaint', {
            id: maintid
        }).then((response) => {
            if(response.data=='success') {
                alert('Record deleted')
                window.location.href='http://localhost:3000/admin_homepage';
            } else {
                console.log(response.data)
                alert('Record not found/Error')
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
                    <Button id="button-result" variant="contained" color="primary" onClick={delmaint}><Link id="sign" to='/admin_homepage'>Delete Maintenance Record</Link></Button>
                </center>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;