import './airline_flightdetails.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [passportno, setPassportno] = useState("");
    const [passportname, setPassportname] = useState("");
    const [passportexpdate, setPassportexpdate] = useState("");
    const [foodpref, setFoodpref] = useState("");
    const [email, setEmail] = useState([]);
    const [userdetails, setUserdetails] = useState([]);
    const [mobno, setMobno] = useState("");

    const savedetail = () => {
        Axios.post('http://localhost:3001/traveluser', {
            passportno: passportno,
            passportname: passportname,
            passportexpdate: passportexpdate,
            foodpref: foodpref,
            email: email,
            mobno: mobno
        }).then((response) => {
            if (response.data == "success") {
                window.location.href = 'http://localhost:3000/travel_billingpage';
            }
        });
    }

    return (
        <div id="Employees">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome UserABC
                    </h1>
                </center>
            </div>
            <div id="details">
                <div>
                    <label>Enter Government ID Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setPassportno(event.target.value) }}></input>
                </div>
                <div>
                    <label>Enter Full Name as Governemnt ID: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setPassportname(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Expiry Date of Passport: </label>
                    <input type="date" placeholder='Enter Text Here'
                        onChange={(event) => { setPassportexpdate(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Select Food Preference: </label>
                    <select id="FoodPref" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setFoodpref(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                    </select>
                    <br></br>
                </div>
                <div>
                    <label>Enter Email: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setEmail(event.target.value); }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Mobile Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setMobno(event.target.value) }}></input>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                    <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Poceed to Seat Selection</Button>
                </center>
            </div>
            <Footer />
        </div>
    );
}

export default App;