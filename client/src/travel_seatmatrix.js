import './airline_flightdetails.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

let count = 0;
function SeatMatrix() {
    const [journeytype, setJourneytype] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [depdate, setDepdate] = useState("");
    const [arrdate, setArrdate] = useState("");
    // const [adults, setAdults] = useState("");
    // const [children, setChildren] = useState("");
    // const [infants, setInfants] = useState("");
    const [currency, setCurrency] = useState("");
    const [promocode, setPromocode] = useState("");
    const [bookingdetails, setBookingdetails] = useState([]);
    const [seatdetails, setSeatdetails] = useState([]);
    const [seats, setSeats] = useState([]);
    const [flightid, setFlightId] = useState("")
    const [disabled, setDisabled] = useState(false)

    Axios.post('http://localhost:3001/seats', {
        //flightno: 1
    }).then((response) => {
        setSeatdetails(response.data);
        setFlightId(seatdetails[0].flightid);
    });

    let adults = localStorage.getItem('adults');
    let children = localStorage.getItem('children');
    let infants = localStorage.getItem('infants');
    let total = parseInt(adults) + parseInt(children) + parseInt(infants);
    let username = localStorage.getItem('name');

    // let count = 0;

    const savedetail = (seatid) => {
        alert('Seat Booking Confirmed');
        count = count + 1;
        console.log(seatid)
        setSeats([...seats, seatid]);
        //console.log(seats)
        //alert(total)
        if (count == total) {
            alert('You have booked the necessary seats for this trip');
            
            //setDisabled(true);
        }
    }

    const blockseats = () => {
        Axios.post('http://localhost:3001/storeseats', {
            //flightno: 1
            seats: seats
        }).then((response) => {
            if(response.data=="err") {
                alert("Error in selecting seats");
            } else {
                window.location.href = "http://localhost:3000/travel_userdetails";
            }
        });
    }

    return (
        <>
            <div id="Travel">
                <Header />
                <div>
                    <center>
                        <h1 id="title1">
                            Welcome {username}
                        </h1>
                        <h3 id="title2">
                            Book Seats
                        </h3>
                    </center>
                </div>
                <div id="number"><center><span><u>Flight Number: {flightid}</u></span></center></div>
                <div id="details1">
                    <table border='10px' id="maintable">
                        <tr>
                            <th id="head"><b><u>Seat</u></b></th>
                            <th id="head"><b><u>Availablity</u></b></th>
                            <th id="head"><b><u>Book Seat</u></b></th>
                        </tr>
                        {seatdetails.map((value, key) => {
                            return <>
                                <tr>
                                    <td id="content">{value.seatid}</td>
                                    <td id="content">{value.status}</td>
                                    <td id="content"><button id="button-result1" onClick={() => savedetail(value.seatid)}>Book</button></td>
                                </tr>
                            </>
                        })}
                    </table>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={blockseats}>Proceed to Billing</Button>
                </center>
            </div>
            {/* <button id="button-result" onClick={savedetail}>Proceed to Billing</button> */}

            {/* {bookingdetails.map((value, key) => {
                return <div>seatMatix
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
            } */}
            <Footer />
        </>
    );
}

export default SeatMatrix;