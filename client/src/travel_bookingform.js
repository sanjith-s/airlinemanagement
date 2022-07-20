import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    //const [journeytype, setJourneytype] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [depdate, setDepdate] = useState("");
    //const [arrdate, setArrdate] = useState("");
    const [adults, setAdults] = useState("");
    const [children, setChildren] = useState("");
    const [infants, setInfants] = useState("");
    const [currency, setCurrency] = useState("");
    const [bookingdetails, setBookingdetails] = useState([]);

    let username = localStorage.getItem('name');

    const toRadian = (n) => {
        return (n * Math.PI) / 180
    };

    const savedetail = () => {
        if (from != to) {
            Axios.post('http://localhost:3001/bookform', {
                from: from,
                to: to,
                depdate: depdate,
                //arrdate: arrdate,
                adults: adults,
                children: children,
                infants: infants,
                //currency: currency
            }).then((response) => {
                console.log("hello")
                setBookingdetails(response.data);
                window.location.href = "http://localhost:3000/travel_flightsdisplay";
            });

            // var lat2 = lattitude2;
            // var lon2 = longittude2;
            // var lat1 = lattitude1;
            // var lon1 = longittude1;

            // console.log(lat1, lon1 + "===" + lat2, lon2);
            // var R = 6371;  // km
            // var x1 = lat2 - lat1;
            // var dLat = toRadian(x1);
            // var x2 = lon2 - lon1;
            // var dLon = toRadian(x2);
            // var a =
            //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            //     Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
            // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            // var d = R * c;

            // setDistance(d);

        }
        else {
            alert('Departure and Arrival Location cannot be same')
            window.location.href = "http://localhost:3000/travel_bookingform";
        }
    }

    // let fare = parseFloat(localStorage.getItem('fare'));
    // let price = fare * d;
    // let price1 = adults * price;
    // let price2 = children * price * 0.8;
    // let price3 = infants * price * 0.6;
    // let total = price1 + price2 + price3;
    // console.log(total);
    // localStorage.setItem('adults', adults);
    // localStorage.setItem('price1', price1);
    // localStorage.setItem('children', children);
    // localStorage.setItem('price2', price2);
    // localStorage.setItem('infants', infants);
    // localStorage.setItem('price3', price3);
    // localStorage.setItem('total', total);

    localStorage.setItem('adults', adults);
    localStorage.setItem('children', children);
    localStorage.setItem('infants', infants);

    return (
        <><div id="Travel">
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
            <div id="details">
                <div>
                    <label>Enter From: </label>
                    <select id="City" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setFrom(event.target.value); }} >
                        <option selected>Select</option>
                        <option value="chennai">Chennai</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="new Delhi">New Delhi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="surat">Surat</option>
                        <option value="jaipur">Jaipur</option>
                        <option value="bengaluru">Bengaluru</option>
                        <option value="pune">Pune</option>
                        <option value="kochi">Kochi</option>
                        <option value="indore">Indore</option>
                        <option value="bhopal">Bhopal</option>
                        <option value="lucknow">Lucknow</option>
                        <option value="vadodara">Vadodara</option>
                        <option value="nagpur">Nagpur</option>
                        <option value="chandigarh">Chandigarh</option>
                        <option value="kanpur">Kanpur</option>
                        <option value="coimbatore">Coimbatore</option>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="madurai">Madurai</option>
                    </select>
                </div>
                <div>
                    <label>Enter To: </label>
                    <select id="City" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setTo(event.target.value); }}>
                        <option selected>Select</option>
                        <option value="chennai">Chennai</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="new Delhi">New Delhi</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="surat">Surat</option>
                        <option value="jaipur">Jaipur</option>
                        <option value="bengaluru">Bengaluru</option>
                        <option value="pune">Pune</option>
                        <option value="kochi">Kochi</option>
                        <option value="indore">Indore</option>
                        <option value="bhopal">Bhopal</option>
                        <option value="lucknow">Lucknow</option>
                        <option value="vadodara">Vadodara</option>
                        <option value="nagpur">Nagpur</option>
                        <option value="chandigarh">Chandigarh</option>
                        <option value="kanpur">Kanpur</option>
                        <option value="coimbatore">Coimbatore</option>
                        <option value="ahmedabad">Ahmedabad</option>
                        <option value="madurai">Madurai</option>
                    </select>
                    <br></br>
                </div>
                <div>
                    <label>Enter Departure Date: </label>
                    <input type="date" placeholder='Enter Text Here'
                        onChange={(event) => { setDepdate(event.target.value); }}></input>
                    <br></br>
                </div>

                <div>
                    <label>Adults: </label>
                    <select id="Adults" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setAdults(event.target.value); }}>
                        <option selected>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <br></br>
                </div>
                <div>
                    <label>Children: </label>
                    <select id="Children" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setChildren(event.target.value); }}>
                        <option selected>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <br></br>
                </div>
                <div>
                    <label>Infants: </label>
                    <select id="Infants" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setInfants(event.target.value); }}>
                        <option selected>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <br></br>
                </div>
                {/* <div>
                    <label>Currency Code: </label>
                    <select id="Currency" class="form-select" aria-label="Default select example"
                        onChange={(event) => { setCurrency(event.target.value); }}>
                        <option selected>Select</option>
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                    </select>
                    <br></br>
                </div> */}
                {/* <div>
                    <label>Enter Promo Code: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setPromocode(event.target.value); }}></input>
                    <br></br>
                </div> */}
            </div>
        </div><br></br><div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Search & Book</Button>
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