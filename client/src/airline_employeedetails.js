import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [message,setMessage]=useState("");
    const [empid, setEmpid] = useState("");
    const [empname, setEmpname] = useState("");
    const [designation, setDesignation] = useState("");
    const [vaccstatus, setVaccstatus] = useState("");
    const [empdetails, setEmpdetails] = useState([]);

    const savedetail = () => {
        Axios.post('http://localhost:3001/emp', {
            empid: empid,
            empname: empname,
            designation: designation,
            vaccstatus: vaccstatus
        }).then((response) => {
            setEmpdetails(response.data);
            if(response.data=='success') {
                window.location.href='http://localhost:3000/admin_homepage'
                alert("Employee added")
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
                    <input type="text" placeholder='Enter Text Here' id="text"
                        onChange={(event) => { setEmpid(event.target.value) }}></input>
                </div>
                <div>
                    <label>Enter Employee Name: </label>
                    <input type="text" placeholder='Enter Text Here' id="text"
                        onChange={(event) => { setEmpname(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Designation: </label>
                    <input type="text" placeholder='Enter Text Here' id="text"
                        onChange={(event) => { setDesignation(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Select Vaccination Status: </label>
                    <select id="VaccStatus" class="form-select" aria-label="Default select example" 
                        onChange={(event) => { setVaccstatus(event.target.value) }}>
                        <option selected>Select</option>
                        <option value="Not Vaccinated">Not Vaccinated</option>
                        <option value="One Dose">One Dose</option>
                        <option value="Two Dose">Two Dose</option>
                    </select>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button variant="contained" color="primary" id="button-result" onClick={savedetail}></Button>
                </center>
            </div>
            {empdetails.map((value, key) => {
                return <div>
                    <Display
                        Employee_ID={value.ID}
                        Employee_Name={value.Name}
                        Designation={value.Designation}
                        Vacc_Status={value.Vacc_Status} />
                </div>
            })}
            {message}
            <Footer />
        </div>
    );
}

export default App;