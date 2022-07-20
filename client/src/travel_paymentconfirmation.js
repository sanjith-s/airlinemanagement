import './airline_flightdetails.css';
import { useState } from "react";
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
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

    const [refno, setRefno] = useState("");
    Axios.post('http://localhost:3001/gettravelid', {
    }).then((response) => {
        //console.log(response.data)
        setRefno(response.data)
        //console.log(refno)
        //setCoordinates(response.data);
    });

    const savedetail = () => {
        Axios.post('http://localhost:3001/emp', {
        }).then((response) => {
            setBookingdetails(response.data);
        });
    }

    let username = localStorage.getItem('name');

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
                            Payment Successful
                        </h3>
                        <h3 id="title2">
                            Your Travel Reference Number is: {refno}
                        </h3>
                        <h3 id="title2">
                            Do you want to go back to the home page ?
                        </h3>
                    </center>
                </div>

            </div>
            <br></br>
            <div>
                <center>
                    <center>
                        {/* <div>
                            <Button variant="contained" color="primary" onClick><Link id="sign" to='/travel_trackingportal'>View Status</Link></Button>
                        </div>
                        <br></br> */}
                        <div>
                            <Button variant="contained" color="primary" onClick><Link id="sign" to='/homepage2'>Back to Homepage</Link></Button>
                        </div>
                    </center>
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
            <Footer />
        </>
    );
}

export default App;