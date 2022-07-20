import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

let count = 0
function App() {
    const [flid, setFlid] = useState("");
    const [journeytype, setJourneytype] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [depdate, setDepdate] = useState("");
    const [arrdate, setArrdate] = useState("");
    const [adults, setAdults] = useState("");
    const [children, setChildren] = useState("");
    const [infants, setInfants] = useState("");
    const [currency, setCurrency] = useState("");
    const [promocode, setPromocode] = useState("");
    const [bookingdetails, setBookingdetails] = useState([]);
    const [searchRes, setSearchRes] = useState([]);

    if (count == 0) {
        Axios.post('http://localhost:3001/searchflight', {
        }).then((response) => {
            //console.log(response.data)
            if (response.data == "not found") {
                alert("No flights found in this route!!")
            } else {
                console.log(response.data)
                setSearchRes(response.data)
            }
        });
    }

    const savedetail = (flightid) => {

        console.log(flightid)

        Axios.post('http://localhost:3001/searchseat', {
            id: flightid
        }).then((response) => {
            setBookingdetails(response.data);
            if (response.data == 'success') {
                window.location.href = "http://localhost:3000/travel_seatmatrix";
            }
        });
        alert('You have selected a flight');
    }

    let username = localStorage.getItem('name');

    return (
        <>
            {/* <button onClick={test}>Testing</button> */}
            <div id="Travel">
                <Header />
                <div>
                    <center>
                        <h1 id="title1">
                            Welcome {username}
                        </h1>
                        <h3 id="title2">
                            Book Tickets
                        </h3>
                    </center>
                </div>
            </div><br></br>
            <table border='10px'>
                <tr>
                    <th>Flight ID</th>
                    <th>Operator</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Duration</th>
                    <th>Fare</th>
                </tr>
                {searchRes.map((value, key) => {
                    return <>
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.operator}</td>
                            <td>{value.departure}</td>
                            <td>{value.arrival}</td>
                            <td>{value.duration}</td>
                            <td>{value.fare}</td>
                            <td><button id="button-result" onClick={(() => savedetail(value.id))}>Select</button></td>
                        </tr>
                    </>
                })}
            </table>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}><Link id="sign" to='/travel_userdetails'>Proceed to User Details</Link></Button>
                </center>
            </div>
            {bookingdetails.map((value, key) => {
                return <div>
                    <Display
                        Journey_Type={value.Journey_Type}
                        From={value.Departure}
                        To={value.Arrival}
                        Dep_Date={value.Dep_Date}
                        Arr_Date={value.Arr_Date}
                        Adults={value.Adults}
                        Children={value.Children}
                        Infants={value.Infants}
                        Currency={value.Currency}
                        Promo_Code={value.Promo_Code} />
                </div>
            })
            }
            {flid}
            <Footer />
        </>
    );
}

export default App;