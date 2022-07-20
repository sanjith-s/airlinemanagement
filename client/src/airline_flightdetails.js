import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./admin_navbar";
import Footer from "./footer";
import Display from "./display";

function App() {
  const [flno, setFlno] = useState("");
  const [flcompany, setFlcompany] = useState("");
  //const [depdate, setDepdate] = useState("");
  const [deptime, setDeptime] = useState("");
  //const [arrdate, setArrdate] = useState("");
  const [arrtime, setArrtime] = useState("");
  const [duration, setDuration] = useState("");
  const [totseats, setTotseats] = useState("");
  const [fltype, setFltype] = useState("");
  const [routeid, setRouteid] = useState("");
  const [fare, setFare] = useState("");
  const [fldetails, setFldetails] = useState([]);

  const savedetail = () => {

    const deptimearr = deptime.split(':')
    const arrtimearr = arrtime.split(':')
    const duration = [Math.abs(parseInt(deptimearr[0])-parseInt(arrtimearr[0])), Math.abs(parseInt(deptimearr[1])-parseInt(arrtimearr[1])), Math.abs(parseInt(deptimearr[2])-parseInt(arrtimearr[2]))]
    const durationval=duration[0]+(duration[1]/60)+(duration[2]/3600);
    
    Axios.post('http://localhost:3001/addflight', {
      flno:flno,
      flcompany:flcompany,
      deptime:deptime,
      arrtime: arrtime,
      duration: durationval,
      totseats: totseats,
      fltype: fltype,
      routeid: routeid,
      fare: fare
    }).then((response) => {
      setFldetails(response.data);
      if(response.data=='success') {
        window.location.href='http://localhost:3000/admin_homepage'
        alert("Flight added")
      }
      
    });
  }

  return (
    <div id="Flights">
      <Header />
      <div>
        <center>
          <h1 id="title">
            Welcome Admin
          </h1>
        </center>
      </div>
      <div id="details">
        <div>
          <label>Enter Flight Number: </label>
          <input type="text" placeholder='Enter Text Here'
            onChange={(event) => { setFlno(event.target.value) }}></input>
        </div>
        <div>
          <label>Enter Flight Company: </label>
          <input type="text" placeholder='Enter Text Here'
            onChange={(event) => { setFlcompany(event.target.value) }}></input>
          <br></br>
        </div>
       
        <div>
          <label>Enter Departure Time(hh:mm:ss): </label>
          <input type="text"
            onChange={(event) => { setDeptime(event.target.value) }}></input>
          <br></br>
        </div>
        
        <div>
          <label>Enter Arrival Time(hh:mm:ss): </label>
          <input type="text"
            onChange={(event) => { setArrtime(event.target.value) }}></input>
          <br></br>
        </div>
        <div>
          <label>Enter Total Seats: </label>
          <input type="number" placeholder='Enter Value Here'
            onChange={(event) => { setTotseats(event.target.value) }}></input>
          <br></br>
        </div>
        <div>
          <label>Select Type of Flight: </label>
          <select id="Type" class="form-select" aria-label="Default select example"
            onChange={(event) => { setFltype(event.target.value) }}>
            <option selected>Select</option>
            <option value="Travel">Travel</option>
            <option value="Cargo">Cargo</option>
          </select>
          <br></br>
        </div>
        <div>
          <label>Enter Route ID: </label>
          <input type="text" placeholder='Enter Text Here'
            onChange={(event) => { setRouteid(event.target.value) }}></input>
          <br></br>
        </div>
        <div>
          <label>Enter Fare per Seat/km: </label>
          <input type="text" placeholder='Enter Text Here'
            onChange={(event) => { setFare(event.target.value) }}></input>
          <br></br>
        </div>
      </div>

      <br></br>
      <div>
        <center>
        <Button id="button-result"variant="contained" color="primary" onClick={savedetail}>Add Flight</Button>
        </center>
      </div>
      {fldetails.map((value, key) => {
        return <div>
          <Display
            Flight_Number={value.Flight_No}
            Flight_Company={value.Flight_Name}
            Departure_Date={value.Departure_Date}
            Departure_Time={value.Departure_Hrs}
            Arrival_Date={value.Arrival_Date}
            Arrival_Time={value.Arrival_Hrs}
            Duration={value.Duration}
            Total_Seats={value.Total_Seats}
            Flight_Type={value.Type}
            Route_ID={value.Route_ID}
            Fare={value.Fare} />
        </div>
      })}
      <Footer />
    </div>
  );
}

export default App;