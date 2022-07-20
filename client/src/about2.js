import './airline_flightdetails.css';
import { useState } from "react";
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

function App() {
    const [ticketrefno, setTicketrefno] = useState("");
    const [traveldetails, setTraveldetails] = useState([]);

    const searchtravel = () => {
        Axios.post('http://localhost:3001/emp', {
        }).then((response) => {
            setTraveldetails(response.data);
        });
    }

    return (
        <div id="AboutUs">
            <Header />
            <div>
                <center>
                    <h2 id="titlehead2">
                        CARVEL
                    </h2>
                </center>
            </div>
            <div id="About">
                <div id="aboutpic">
                    <img id="pic" src="https://media.istockphoto.com/photos/aerial-flying-airplane-and-sky-landscape-closeup-picture-id1332501286?b=1&k=20&m=1332501286&s=170667a&w=0&h=rNCkGji4sDiwMutL0WQpUlmzMnjbsHSElI_CqGKCZA8="></img>
                </div>
                <br></br>
                <div id="about1">
                    <b>We are a main online travel and cargo organization in India giving a best as far as a class can tell with the objective to be "India's Travel Planner".</b>
                    <br></br>
                    <br></br>
                    <b>Through our site, users can investigate, explore, analyze costs and do an extensive variety of travel and cargo bookings taking into account their movement needs.</b>
                    <br></br>
                    <br></br>
                    <b>Since our origin in 2006, in excess of 7 million users have utilized at least one of our exhaustive administrations, which incorporate local air ticketing and local cargo booking.</b>
                    <br></br>
                    <br></br>
                    <b>A solid and “believed” travel and cargo brand of India, our qualities incorporate a vast and faithful client base, a multi-channel stage for relaxation and business explorers, a powerful portable eco-framework for a range of voyagers and providers.</b>
                    <br></br>
                    <br></br>
                    <b>A solid innovation stage intended to convey an abnormal state of adaptability and advancement and a prepared senior supervisory crew including industry officials with profound roots in the movement business in India and abroad.</b>
                </div>
            </div>
            {/* <div id="details">
                <div>
                    <label>Enter Ticket Reference Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setTicketrefno(event.target.value) }}></input>
                </div>
            </div> */}
            <br></br>
            {/* <div>
                <center>
                    <button id="button-result" onClick={searchtravel}>Submit</button>
                </center>
            </div> */}
            {traveldetails.map((value, key) => {
                return <div>
                    <Display
                        Ticketrefno={value.BRef_No} />
                </div>
            })}
            <Footer />
        </div>
    );
}

export default App;