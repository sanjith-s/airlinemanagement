import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [sname, setSname] = useState("");
    const [saddline1, setSaddline1] = useState("");
    const [saddline2, setSaddline2] = useState("");
    const [saddline3, setSaddline3] = useState("");
    const [scity, setScity] = useState("");
    const [szipcode, setSzipcode] = useState("");
    //const [spostalcode, setSpostalcode] = useState("");
    const [semail, setSemail] = useState("");
    const [dname, setDname] = useState("");
    const [daddline1, setDaddline1] = useState("");
    const [daddline2, setDaddline2] = useState("");
    const [daddline3, setDaddline3] = useState("");
    const [dcity, setDcity] = useState("");
    const [dzipcode, setDzipcode] = useState("");
    //const [dpostalcode, setDpostalcode] = useState("");
    const [demail, setDemail] = useState("");
    const [consignmenttype, setConsignmenttype] = useState("");
    const [weight, setWeight] = useState("");
    const [dimensions, setDimensions] = useState("");
    const [fragile, setFragile] = useState("");
    const [electronic, setElectronic] = useState("");
    const [perishable, setPerishable] = useState("");
    const [bookingdetails, setBookingdetails] = useState([]);

    localStorage.setItem('weight', weight);
    localStorage.setItem('dimensions', dimensions);

    const savedetail = () => {
        if (scity != dcity) {
            let uid = localStorage.getItem("uid");
            localStorage.setItem("sname", sname);
            localStorage.setItem("dname", dname);
            localStorage.setItem("semail", semail);
            localStorage.setItem("demail", demail);
            localStorage.setItem("scity", scity);
            localStorage.setItem("dcity", dcity);
                        
            Axios.post('http://localhost:3001/cargobook', {
                sname: sname,
                saddline1: saddline1,
                saddline2: saddline2,
                saddline3: saddline3,
                scity: scity.toLowerCase(),
                szipcode: szipcode,
                semail: semail,
                dname: dname,
                daddline1: daddline1,
                daddline2: daddline2,
                daddline3: daddline3,
                dcity: dcity.toLowerCase(),
                dzipcode: dzipcode,
                demail: demail,
                consignmenttype: consignmenttype,
                weight: weight,
                dimensions: dimensions,
                fragile: fragile,
                electronic: electronic,
                perishable: perishable,
                bookingdetails: bookingdetails,
                uid: uid,
            }).then((response) => {
                //setBookingdetails(response.data);
                if (response.data == "success") {
                    window.location.href = 'http://localhost:3000/cargo_billingpage';
                }
            });
        }
        else {
            alert('Departure and Arrival Location cannot be same')
            window.location.href = "http://localhost:3000/cargo_bookingform";
        }
    }

    let username = localStorage.getItem('name');

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
                            Book Cargo
                        </h3>
                    </center>
                </div>
                <div id="details">
                    <h3 id="title3">
                        SOURCE
                    </h3>
                    {/* <div class="form-check form-check-inline"></div>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={(event) => { setFrom(event.target.value); }}></input>
                <label class="form-check-label" for="inlineRadio1">One Way</label>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={(event) => { setFrom(event.target.value); }}></input>
                <label class="form-check-label" for="inlineRadio2">Round Trip</label>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" onChange={(event) => { setFrom(event.target.value); }}></input>
                <label class="form-check-label" for="inlineRadio3">Multi-City</label> */}

                    <div>
                        <label>Name: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setSname(event.target.value); }}></input>
                    </div>
                    <div>
                        <label>Address Line 1: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setSaddline1(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <div>
                        <label>Address Line 2: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setSaddline2(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <div>
                        <label>Address Line 3: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setSaddline3(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <div>
                        <label>City/Town: </label>
                        <select id="City" class="form-select" aria-label="Default select example"
                            onChange={(event) => { setScity(event.target.value); }}>
                            <option selected>Select</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="New Delhi">New Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Surat">Surat</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Pune">Pune</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Indore">Indore</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Vadodara">Vadodara</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Kanpur">Kanpur</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Madurai">Madurai</option>
                        </select>
                        <br></br>
                    </div>
                    <div>
                        <label>Zip Code: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setSzipcode(event.target.value); }}></input>
                        <br></br>
                    </div>
                    {/* <div>
                        <label>Postal Code: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setSpostalcode(event.target.value); }}></input>
                        <br></br>
                    </div> */}
                    <div>
                        <label>Enter Email: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setSemail(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <br></br>
                    <h3 id="title4">
                        DESTINATION
                    </h3>
                    <div>
                        <label>Name: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setDname(event.target.value); }}></input>
                    </div>
                    <div>
                        <label>Address Line 1: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setDaddline1(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <div>
                        <label>Address Line 2: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setDaddline2(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <div>
                        <label>Address Line 3: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setDaddline3(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <div>
                        <label>City/Town: </label>
                        <select id="City" class="form-select" aria-label="Default select example"
                            onChange={(event) => { setDcity(event.target.value); }}>
                            <option selected>Select</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="New Delhi">New Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Surat">Surat</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Pune">Pune</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Indore">Indore</option>
                            <option value="Bhopal">Bhopal</option>
                            <option value="Lucknow">Lucknow</option>
                            <option value="Vadodara">Vadodara</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Kanpur">Kanpur</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Madurai">Madurai</option>
                        </select>
                        <br></br>
                    </div>
                    <div>
                        <label>Zip Code: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setDzipcode(event.target.value); }}></input>
                        <br></br>
                    </div>
                    {/* <div>
                        <label>Postal Code: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setDpostalcode(event.target.value); }}></input>
                        <br></br>
                    </div> */}
                    <div>
                        <label>Enter Email: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setDemail(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <br></br>
                    <h4 id="title5">
                        CONSIGNMENT DETAILS
                    </h4>
                    <div>
                        <label>Consignment Type: </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setConsignmenttype(event.target.value); }}></input>
                    </div>
                    <div>
                        <label>Weight (in kgs): </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setWeight(event.target.value); }}></input>
                        <br></br>
                    </div>
                    <div>
                        <label>Dimensions (lxbxh): </label>
                        <input type="text" placeholder='Enter Text Here'
                            onChange={(event) => { setDimensions(event.target.value); }}></input>
                        <br></br>
                    </div>

                    <div class="form-check form-check-inline"></div>
                    <label class="form-check-label" for="inlineRadio1">Contains fragile goods? </label>
                    <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="inlineRadio1" value="option1" onChange={(event) => { setFragile(event.target.value); }}></input>

                    <div class="form-check form-check-inline"></div>
                    <label class="form-check-label" for="inlineRadio3">Contains electronic goods with Li-ion batteries? </label>
                    <input class="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" value="option2" onChange={(event) => { setElectronic(event.target.value); }}></input>

                    <div class="form-check form-check-inline"></div>
                    <label class="form-check-label" for="inlineRadio3">Contains perishable goods? </label>
                    <input class="form-check-input" type="radio" name="inlineRadioOptions3" id="inlineRadio3" value="option3" onChange={(event) => { setPerishable(event.target.value); }}></input>

                    <br></br>
                </div>
                <div>
                    {/* <center> */}

                    {/* </center> */}
                </div>
            </div>
            <br></br>
            <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Book a Cargo</Button>
            </center>

            {bookingdetails.map((value, key) => {
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
            }

            <Footer />
        </>
    );
}

export default App;