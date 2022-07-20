import './airline_flightdetails.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [aadhaarno, setAadharno] = useState("");
    const [aadhaarname, setAadharname] = useState("");
    const [userdetails, setUserdetails] = useState([]);

    const savedetail = () => {
        Axios.post('http://localhost:3001/cargouser', {
            govtID: aadhaarno,
            idName: aadhaarname
        }).then((response) => {
            if(response.data=="success") {
                window.location.href='http://localhost:3000/cargo_billingpage';
            }
            setUserdetails(response.data);
        });
    }

    let username = localStorage.getItem('name');

    return (
        <div id="Cargo">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome {username}
                    </h1>
                </center>
            </div>
            <div id="details">
                <div>
                    <label>Enter Government ID Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setAadharno(event.target.value) }}></input>
                </div>
                <div>
                    <label>Enter Full Name as in Government ID: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setAadharname(event.target.value) }}></input>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Book</Button>
                </center>
            </div>
            {userdetails.map((value, key) => {
                return <div>
                    <Display
                        Aadhaarno={value.Aadhaar_No}
                        Aadhaarname={value.Aadhaar_Name} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;