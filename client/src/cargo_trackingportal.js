import './airline_flightdetails.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [carrefno, setCarrefno] = useState("");
    const [cargodetails, setCargodetails] = useState([]);

    const searchcargo = () => {
        Axios.post('http://localhost:3001/setcargorefno', {
            refno: parseInt(carrefno)
        }).then((response) => {
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
                    <label>Enter Cargo Reference Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setCarrefno(event.target.value) }}></input>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={searchcargo}><Link id="sign" to='/cargo_status'>View your Cargo Status</Link></Button>
                </center>
            </div>
            {cargodetails.map((value, key) => {
                return <div>
                    <Display
                        Carrefno={value.Ref_No} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;