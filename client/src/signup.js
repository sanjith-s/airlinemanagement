import './airline_flightdetails.css';
import { useState } from "react";
import Axios from "axios";
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Header from "./navbar1";
import Footer from "./footer";
import Display from "./display";

function App() {
    const emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    const passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const [mobno, setMobno] = useState("");
    const [address, setAddress] = useState("");
    const [userdetails, setUserdetails] = useState([]);
    const [message, setMessage] = useState("");

    const savedetail = () => {
        if (emailregex.test(email) && mobno.length == 10 && passregex.test(password) && password===confpassword) {
            Axios.post('http://localhost:3001/signup', {
                name: name,
                email: email,
                password: password,
                mobno: mobno,
                address: address
            }).then((response) => {
                // setUserdetails(response.data);
                console.log(response)
                if (response.data == 'success') {
                    window.location.href = "http://localhost:3000/login";
                }
            });
        } else {
            setMessage('Signup not correct');
        }
    }
    

    return (
        <div id="Users">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome to the Signup Page
                    </h1>
                </center>
            </div>
            <div id="details">
                <div>
                    <label>Enter Name: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setName(event.target.value) }}></input>
                </div>
                <div>
                    <label>Enter Email id: </label>
                    <input type="email" placeholder='Enter Text Here'
                        onChange={(event) => { setEmail(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Password: </label>
                    <input type="password" placeholder='Enter Text Here'
                        onChange={(event) => { setPassword(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" placeholder='Enter Text Here'
                        onChange={(event) => { setConfpassword(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Mobile Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setMobno(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Address: </label>
                    <input type="textarea" placeholder='Enter Text Here'
                        onChange={(event) => { setAddress(event.target.value) }}></input>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                    {/* <Link id="linking" to='/login'>Sign Up</Link> */}
                    <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Sign up</Button>
                </center>
                {message}
            </div>
            {userdetails.map((value, key) => {
                return <div>
                    <Display
                        Name={value.Name}
                        Email={value.Email}
                        Password={value.Password}
                        Conf_Password={value.Conf_Password}
                        Mob_No={value.Mobile_Number}
                        Address={value.Address} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;