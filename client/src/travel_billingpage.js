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
    const [billdetails, setBilldetails] = useState({});

    let cost = billdetails.fare;
    //let dist = 100;
    cost = parseFloat(cost);
    let adult = localStorage.getItem('adults');
    let price1 = cost;
    // let price1 = localStorage.getItem('price1')
    price1 = parseFloat(price1).toFixed(2);
    let child = localStorage.getItem('children');
    let price2 = cost * 0.8;
    // let price2 = localStorage.getItem('price2');
    price2 = parseFloat(price2).toFixed(2);
    let infant = localStorage.getItem('infants');
    let price3 = cost * 0.6;
    // let price3 = localStorage.getItem('price3');
    price3 = parseFloat(price3).toFixed(2);
    let total = price1 + price2 + price3
    total = parseFloat(total).toFixed(2);
    let username = localStorage.getItem('name');
    Axios.post('http://localhost:3001/getbilldetails', {
    }).then((response) => {
        //alert(response.data)
        setBilldetails(response.data);
    });
    count++;

    const savedetail = () => {
        let status = "success"
        Axios.post('http://localhost:3001/bookticket', {
            status: status,
            total: total,
            uid: localStorage.getItem("uid")
        }).then((response) => {
            alert(response.data)
            if (response.data == "success") {
                alert("Ticket Booking Success");
                window.location.href = 'http://localhost:3000/travel_paymentconfirmation';
            }
        });
    }

    return (
        <><div id="Travel">
            <Header />
            <div>
                <center>
                    <h1 id="title1">
                        Welcome {username}
                    </h1>
                    <h3 id="title2">
                        Billing Page
                    </h3>
                </center>
            </div>

            <div id="bill1">
                <table>
                    <td>
                        <tr>NAME</tr>
                        <tr>EMAIL</tr>
                        <tr>MOBILE NO.</tr>
                        <tr>FROM</tr>
                        <tr>TO</tr>
                    </td>
                    <td>
                        <tr>:</tr>
                        <tr>:</tr>
                        <tr>:</tr>
                        <tr>:</tr>
                        <tr>:</tr>
                    </td>
                    <td>
                        <tr>{billdetails.uname}</tr>
                        <tr>{billdetails.email}</tr>
                        <tr>{billdetails.mobno}</tr>
                        <tr>{billdetails.from}</tr>
                        <tr>{billdetails.to}</tr>
                    </td>
                    {/* <td>
                        <tr>=</tr>
                        <tr>=</tr>
                        <tr>=</tr>
                    </td>
                    <td>
                        <tr>{price1}</tr>
                        <tr>{price2}</tr>
                        <tr>{price3}</tr>
                    </td> */}
                </table>
                -------------------------------
                {/* <table>
                    <td>
                        <tr>Total Fare</tr>
                    </td>
                    <td>
                        <tr>=</tr>
                    </td>
                    <td>
                        <tr>{total}</tr>
                    </td>
                </table> */}
            </div>

            <div id="bill">
                <table>
                    <td>
                        <tr>{adult}</tr>
                        <tr>{child}</tr>
                        <tr>{infant}</tr>
                    </td>
                    <td>
                        <tr>*</tr>
                        <tr>*</tr>
                        <tr>*</tr>
                    </td>
                    <td>
                        <tr>Adults</tr>
                        <tr>Children</tr>
                        <tr>Infants</tr>
                    </td>
                    <td>
                        <tr>=</tr>
                        <tr>=</tr>
                        <tr>=</tr>
                    </td>
                    <td>
                        <tr>{price1}</tr>
                        <tr>{price2}</tr>
                        <tr>{price3}</tr>
                    </td>
                </table>
                -------------------------------
                <table>
                    <td>
                        <tr>Total Fare</tr>
                    </td>
                    <td>
                        <tr>=</tr>
                    </td>
                    <td>
                        <tr>{total}</tr>
                    </td>
                </table>
            </div>
        </div>
            <br></br>
            <div>
                <center>
                    <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Pay</Button>
                </center>
            </div>


            <Footer />
        </>
    );
}

export default App;