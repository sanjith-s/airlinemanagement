import './airline_flightdetails.css';
import { useState } from "react";
import Axios from "axios";
import Header from "./navbar1";
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
        <div id="Travel">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome {localStorage.getItem("name")}
                    </h1>
                </center>
            </div>
            <div>
                <h2>
                    This is the Home Page
                </h2>
            </div>
            {/* <div id="details">
                <div>
                    <label>Enter Ticket Reference Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setTicketrefno(event.target.value) }}></input>
                </div>
            </div> */}
            <br></br>
            <div>
                <center>
                    <button id="button-result" onClick={searchtravel}>Submit</button>
                </center>
            </div>
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