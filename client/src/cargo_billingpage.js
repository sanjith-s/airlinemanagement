import './airline_flightdetails.css';
import { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

let count = 0;
let d;
function App() {
    // const [sname, setSname] = useState("");
    // const [saddline1, setSaddline1] = useState("");
    // const [saddline2, setSaddline2] = useState("");
    // const [saddline3, setSaddline3] = useState("");
    // const [scity, setScity] = useState("");
    // const [szipcode, setSzipcode] = useState("");
    // const [spostalcode, setSpostalcode] = useState("");
    // const [semail, setSemail] = useState("");
    // const [dname, setDname] = useState("");
    // const [daddline1, setDaddline1] = useState("");
    // const [daddline2, setDaddline2] = useState("");
    // const [daddline3, setDaddline3] = useState("");
    // const [dcity, setDcity] = useState("");
    // const [dzipcode, setDzipcode] = useState("");
    // const [dpostalcode, setDpostalcode] = useState("");
    // const [demail, setDemail] = useState("");
    // const [consignmenttype, setConsignmenttype] = useState("");
    // const [weight, setWeight] = useState("");
    // const [dimensions, setDimensions] = useState("");
    // const [fragile, setFragile] = useState("");
    // const [electronic, setElectronic] = useState("");
    // const [perishable, setPerishable] = useState("");
    // const [bookingdetails, setBookingdetails] = useState([]);

    const [coordinates, setCoordinates] = useState({});
    const [distance, setDistance] = useState("");
    const [billdetails, setBilldetails] = useState([]);



    const toRadian = (n) => {
        return (n * Math.PI) / 180
    };

    Axios.post('http://localhost:3001/getcoordinates', {
    }).then((response) => {
        console.log(response.data)
        setCoordinates(response.data);
        //console.log(response.data);
        let lat2 = response.data.lat2;
        let lon2 = response.data.long2;
        let lat1 = response.data.lat1;
        let lon1 = response.data.long1;

        console.log(lat1, lon1 + "===" + lat2, lon2);
        let R = 6371;  // km
        let x1 = lat2 - lat1;
        let dLat = toRadian(x1);
        let x2 = lon2 - lon1;
        let dLon = toRadian(x2);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        d = R * c;

        
        //alert(d);
    });

    Axios.post('http://localhost:3001/getbill', {
    }).then((response) => {
        setBilldetails(response.data);
    });

    // let lat2 = coordinates.lat2;
    // let lon2 = coordinates.long2;
    // let lat1 = coordinates.lat1;
    // let lon1 = coordinates.long1;

    // console.log(lat1, lon1 + "===" + lat2, lon2);
    // let R = 6371;  // km
    // let x1 = lat2 - lat1;
    // let dLat = toRadian(x1);
    // let x2 = lon2 - lon1;
    // let dLon = toRadian(x2);
    // let a =
    //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //     Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    // let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // let d = R * c;

    // setDistance(d);
    // console.log(d);
    let dista = 1300.4354634

    let dist = parseFloat(d).toFixed(2)
    let weight = localStorage.getItem('weight');
    // let fare = parseFloat(localStorage.getItem('fare'));
    let cost = 0.05;
    let price = parseFloat((cost * dist) + (2 * weight)).toFixed(2);
    let dimensions = localStorage.getItem('dimensions');
    let username = localStorage.getItem('name');

    const savedetail = () => {


        let status = "success";

        Axios.post('http://localhost:3001/cargosave', {
            status: status,
            total: price
        }).then((response) => {
            console.log(response.data)
            if (response.data == "success") {
                alert("Cargo Booking Success");
                window.location.href = 'http://localhost:3000/cargo_confirmation';
            }
            //setBookingdetails(response.data);
        });
    };

    return (
        <>
            <div id="Cargo">
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
            </div>

            <div id="bill1">
                <table>
                    <td>
                        <tr>SENDER NAME</tr>
                        <tr>SENDER EMAIL</tr>
                        <tr>RECEIVER NAME</tr>
                        <tr>RECEIVER EMAIL</tr>
                        <tr>SOURCE CITY</tr>
                        <tr>DESTINATION CITY</tr>
                    </td>
                    <td>
                        <tr> : </tr>
                        <tr> : </tr>
                        <tr> : </tr>
                        <tr> : </tr>
                        <tr> : </tr>
                        <tr> : </tr>
                    </td>
                    <td>
                        <tr>{localStorage.getItem("sname")}</tr>
                        <tr>{localStorage.getItem("semail")}</tr>
                        <tr>{localStorage.getItem("dname")}</tr>
                        <tr>{localStorage.getItem("demail")}</tr>
                        <tr>{localStorage.getItem("scity")}</tr>
                        <tr>{localStorage.getItem("dcity")}</tr>
                    </td>
                    {/* <td>
                        <tr> cm3</tr>
                        <tr> kgs</tr>
                        <tr> kms</tr>
                    </td> */}
                </table>

                {/* <table>
                    <td>
                        <tr>Total Cost</tr>
                    </td>
                    <td>
                        <tr>=</tr>
                    </td>
                    <td>
                        <tr>{price}</tr>
                    </td>
                </table> */}
            </div>

            <div id="bill">
                <table>
                    <td>
                        <tr>Dimensions</tr>
                        <tr>Weight</tr>
                        <tr>Distance</tr>
                    </td>
                    <td>
                        <tr> : </tr>
                        <tr> : </tr>
                        <tr> : </tr>
                    </td>
                    <td>
                        <tr>{dimensions}</tr>
                        <tr>{weight}</tr>
                        <tr>{dist}</tr>
                    </td>
                    <td>
                        <tr> cm3</tr>
                        <tr> kgs</tr>
                        <tr> kms</tr>
                    </td>
                </table>
                ---------------------------------------------
                <table>
                    <td>
                        <tr>Total Cost</tr>
                    </td>
                    <td>
                        <tr>=</tr>
                    </td>
                    <td>
                        <tr>{price}</tr>
                    </td>
                </table>
            </div>
            <br></br>
            <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Pay</Button>
            </center>

            {/* {bookingdetails.map((value, key) => {
                return <div>
                    <Display
                        Sname={value.Sname}
                        Saddline1={value.Saddline1}
                        Saddline2={value.Saddline2}
                        Saddline3={value.Saddline3}
                        Scity={value.Scity}
                        Szipcode={value.Szipcode}
                        Spostalcode={value.Spostalcode}
                        Semail={value.Demail}
                        Dname={value.Dname}
                        Daddline1={value.Daddline1}
                        Daddline2={value.Daddline2}
                        Daddline3={value.Daddline3}
                        Dcity={value.Dcity}
                        Dzipcode={value.Dzipcode}
                        Dpostalcode={value.Dpostalcode}
                        Demail={value.Demail}
                        Consignment_Type={value.Consignment_Type}
                        Weight={value.Weight}
                        Dimensions={value.Dimensions}
                        Fragile={value.Fragile}
                        Electronic={value.Electronic}
                        Perishable={value.Perishable} />
                </div>
            })
            } */}

            <Footer />
        </>
    );
}

export default App;
