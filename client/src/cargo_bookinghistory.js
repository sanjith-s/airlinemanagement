import './airline_flightdetails.css';
import { useState } from "react";
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

let count = 0;
function App() {
    // const [message,setMessage]=useState("");
    // const [empid, setEmpid] = useState("");
    // const [empname, setEmpname] = useState("");
    // const [designation, setDesignation] = useState("");
    // const [vaccstatus, setVaccstatus] = useState("");
    const [CHistory, setCHistory] = useState([]);

    let username = localStorage.getItem('name');

    let uid = localStorage.getItem("uid")
        console.log(uid)
        Axios.post('http://localhost:3001/getcargohistory', {
            uid: uid
        }).then((response) => {
            //console.log(response.data)
            setCHistory(response.data);
            console.log(response.data)
            //console.log(refno)
            //setCoordinates(response.data);
        });
       
    return (
        <div id="Cargo">
            <Header />
            <div>
                <center>
                    <h1 id="title1">
                        Welcome {username}
                    </h1>
                    <h3 id="title2">
                        Your Booking History
                    </h3>
                </center>
            </div>
            <br></br>
            <div id="details1">
                <table border='10px' collapse>
                    <tr>
                        <th><b>REFERENCE NO.</b></th>
                        <br></br>
                        <th><b>SENDER NAME</b></th>
                        <br></br>
                        <th><b>SOURCE CITY</b></th>
                        <br></br>
                        <th><b>SOURCE ZIP CODE</b></th>
                        <br></br>
                        <th><b>DESTINATION NAME</b></th>
                        <br></br>
                        <th><b>DESTINATION CITY</b></th>
                        <br></br>
                        <th><b>DESTINATION ZIP CODE</b></th>
                        <br></br>
                        <th><b>CONSIGNMENT TYPE</b></th>
                        <br></br>
                        <th><b>CONSIGNMENT WEIGHT</b></th>
                        <br></br>
                        <th><b>CONSIGNMENT DIMENSIONS</b></th>
                        <br></br>
                        <th><b>STATUS</b></th>
                        <br></br>
                        
                    </tr>
                    {CHistory.map((value, key) => {
                        return <>
                            <tr>
                                <td>{value.refno}</td>
                                <br></br>
                                <td>{value.sname}</td>
                                <br></br>
                                <td>{value.src}</td>
                                <br></br>
                                <td>{value.szip}</td>
                                <br></br>
                                <td>{value.dname}</td>
                                <br></br>
                                <td>{value.dest}</td>
                                <br></br>
                                <td>{value.dzip}</td>
                                <br></br>
                                <td>{value.type}</td>
                                <br></br>
                                <td>{value.weight}</td>
                                <br></br>
                                <td>{value.dimension}</td>
                                <br></br>
                                <td>{value.status}</td>
                            </tr>
                        </>
                    })}
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default App;