import React from 'react'
import Header from "./navbar2";
import Footer from "./footer";
import { useState } from "react";
import Axios from "axios";
let count = 0;
function Summary() {
    let username = localStorage.getItem('name');
    const [THistory, setTHistory] = useState([]);
        let uid = localStorage.getItem("uid")
        console.log(uid)
        Axios.post('http://localhost:3001/gettravelhistory', {
            uid: uid
        }).then((response) => {
            //console.log(response.data)
            setTHistory(response.data);
            console.log(response.data)
            //console.log(refno)
            //setCoordinates(response.data);
        });
        count++;

    return (
        <div id="Travel">
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
            <div id="details1">
                <center>
                    <table border='10px' collapse>
                        <tr>
                            <th><b>REFERENCE NO.</b></th>
                            <br></br>
                            <th><b>FLIGHT NO.</b></th>
                            <br></br>
                            <th><b>AIRLINE NAME</b></th>
                            <br></br>
                            <th><b>DEPARTURE DATE</b></th>
                            <br></br>
                            <th><b>ARRIVAL DATE</b></th>
                            <br></br>
                            <th><b>DEPARTURE LOCATION</b></th>
                            <br></br>
                            <th><b>ARRIVAL LOCATION</b></th>
                            <br></br>
                            <th><b>FINAL COST</b></th>
                            <br></br>
                            <th><b>STATUS</b></th>
                        </tr>
                        {THistory.map((value, key) => {
                            return <>
                                <tr>
                                    <td>{value.refno}</td>
                                    <br></br>
                                    <td>{value.flightno}</td>
                                    <br></br>
                                    <td>{value.operator}</td>
                                    <br></br>
                                    <td>{value.ddate}</td>
                                    <br></br>
                                    <td>{value.adate}</td>
                                    <br></br>
                                    <td>{value.dept}</td>
                                    <br></br>
                                    <td>{value.arr}</td>
                                    <br></br>
                                    <td>{value.payment}</td>
                                    <br></br>
                                    <td>{value.status}</td>
                                </tr>
                            </>
                        })}
                    </table>
                </center>
            </div>
            <Footer />
        </div>
    )
}

export default Summary