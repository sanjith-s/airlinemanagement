import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./admin_navbar";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [empid, setEmpid] = useState("");
    const [empdetails, setEmpdetails] = useState([]);

    const delemp =() => {
        Axios.post('http://localhost:3001/delemp', {
            empID: empid
        }).then((response) => {
            if(response.data=='success') {
                alert('Employee deleted')
                window.location.href='http://localhost:3000/admin_homepage';
            } else {
                console.log(response.data)
                alert('Employee not found/Error')
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
                    <Button id="button-result" variant="contained" color="primary" onClick={delemp}><Link id="sign" to='/admin_homepage'>Delete Employee</Link></Button>
                </center>
            </div>

            <Footer />
        </div>
    );
}

export default App;