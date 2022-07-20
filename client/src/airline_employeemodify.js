import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

let count = 0;

function App() {
    const [message, setMessage] = useState("");
    const [empid, setEmpid] = useState("");
    const [empname, setEmpname] = useState("");
    const [designation, setDesignation] = useState("");
    const [vaccstatus, setVaccstatus] = useState("");
    const [empdetails, setEmpdetails] = useState([]);
    const [empobj, setEmpobj] = useState({});


    if (count == 0) {
        Axios.post('http://localhost:3001/getemp', {
        }).then((response) => {
            //onsole.log(response.data);
            setEmpobj(response.data);
            console.log(response.data)
            //console.log(empobj)
            setEmpname(response.data.name)
            setDesignation(response.data.designation)
            setVaccstatus(response.data.vaccination)
            console.log(count)
            count=count+1
        });
    }

    const savedetail = () => {
        Axios.post('http://localhost:3001/setemp', {
            empname: empname,
            designation: designation,
            vaccstatus: vaccstatus
        }).then((response) => {
            //setEmpdetails(response.data);
            if(response.data='success') {
                alert("Employee modified")
                window.location.href='http://localhost:3000/admin_homepage';
              }
        });
        //setMessage("Employee is added");
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
                    <label>Enter Employee Name: </label>
                    <input type="text" placeholder={empobj.name} defaultValue={empobj.name} id="text"
                        onChange={(event) => { setEmpname(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Designation: </label>
                    <input type="text" placeholder={empobj.designation} defaultValue={empobj.designation} id="text"
                        onChange={(event) => { setDesignation(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Select Vaccination Status: </label>
                    <select id="VaccStatus" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setVaccstatus(event.target.value) }}>
                        <option selected>Select</option>
                        <option value='0'>Not Vaccinated</option>
                        <option value='1'>One Dose</option>
                        <option value='2'>Two Dose</option>
                    </select>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Modify Employee</Button>
                </center>
            </div>

            {message}
            <Footer />
        </div>
    );
}

export default App;