import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";
import Header from "./navbar1";
import Footer from "./footer";
import Display from "./display";
import Signup from './signup'

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userdetails, setUserdetails] = useState([]);
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await axios.post(LOGIN_URL,
    //             JSON.stringify({ user, pwd }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data));
    //         //console.log(JSON.stringify(response));
    //         const accessToken = response?.data?.accessToken;
    //         const roles = response?.data?.roles;
    //         setAuth({ user, pwd, roles, accessToken });
    //         setUser('');
    //         setPwd('');
    //         setSuccess(true);
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 400) {
    //             setErrMsg('Missing Username or Password');
    //         } else if (err.response?.status === 401) {
    //             setErrMsg('Unauthorized');
    //         } else {
    //             setErrMsg('Login Failed');
    //         }
    //         errRef.current.focus();
    //     }
    // }
    let obj;
    const savedetail = () => {
        Axios.post('http://localhost:3001/login', {
            email: email,
            pwd: password
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response.data)
            if (response.data.length == 1) {
                obj = Object.values(response.data);
                localStorage.setItem("email", email);
                localStorage.setItem("name", obj[0].name);
                if (obj[0].type == 'admin') {
                    window.location.href = "http://localhost:3000/admin_homepage"
                } else {
                    window.location.href = "http://localhost:3000/homepage2"
                }

            } else if (response.data == 'invalid') {
                console.log("Invalid Email/Password")
                localStorage.setItem("email", "");
                localStorage.setItem("name", "");
            } else {
                console.log("error")
                localStorage.setItem("email", "");
                localStorage.setItem("name", "");
            }
        });
    }

    let username = localStorage.getItem('name');

    return (
        <>
            <div id="Users">
                <Header />
                <div>
                    <center>
                        <h1 id="title">
                            Thank you {username}
                        </h1>
                    </center>
                </div>
                {/* <div id="details">
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
                </div>
                <br></br>
                <div>
                    <center>
                        <button id="button-result" onClick={savedetail}>Login</button>
                    </center>
                </div>
                <div>
                    <center>
                        <h3>Don't have an account</h3>
                        <h4><Link id="sign" to='/signup'>Sign Up !!</Link></h4>
                        <br></br>
                    </center>
                </div>
                {userdetails.map((value, key) => {
                    return <div>
                        <Display
                            Email={value.Email}
                            Password={value.Password} />
                    </div>
                })} */}
                {/* <table border='10px'>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    {userdetails.map((value, key) => {
                        return <>
                        <tr>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                        </tr>
                        </>
                    })}
                    </table> */}
                <Footer />
            </div>
        </>

    );
}

export default App;