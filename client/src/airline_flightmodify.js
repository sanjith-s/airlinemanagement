import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./navbar1";
import Footer from "./footer";
import Display from "./display";

let count = 0

function App() {
  const [flno, setFlno] = useState("");
  const [flcompany, setFlcompany] = useState("");
  const [deptime, setDeptime] = useState("");
  const [arrtime, setArrtime] = useState("");
  const [duration, setDuration] = useState("");
  const [totseats, setTotseats] = useState("");
  const [fltype, setFltype] = useState("");
  const [routeid, setRouteid] = useState("");
  const [fare, setFare] = useState("");
  const [fldetails, setFldetails] = useState([]);
  const [flobj, setFlobj] = useState({});

  if (count == 0) {
    Axios.post('http://localhost:3001/getflight', {
    }).then((response) => {
      //onsole.log(response.data);
      setFlobj(response.data);
      console.log(response.data)
      //console.log(empobj)
      setFlcompany(response.data.operator)
      setDeptime(response.data.departure)
      setArrtime(response.data.arrival)
      setDuration(response.data.duration)
      setTotseats(response.data.seats)
      setFltype(response.data.type)
      setRouteid(response.data.routeid)
      setFare(response.data.fare)
      console.log(count)
      count = count + 1
    });
  }

  const deptimearr = deptime.split(':')
  const arrtimearr = arrtime.split(':')
  const durationarr = [Math.abs(parseInt(deptimearr[0]) - parseInt(arrtimearr[0])), Math.abs(parseInt(deptimearr[1]) - parseInt(arrtimearr[1])), Math.abs(parseInt(deptimearr[2]) - parseInt(arrtimearr[2]))]
  const durationval = durationarr[0] + (durationarr[1] / 60) + (durationarr[2] / 3600);

  const savedetail = () => {
    Axios.post('http://localhost:3001/setflight', {
      operator: flcompany,
      deptime: deptime,
      arrtime: arrtime,
      duration: durationval,
      seats: totseats,
      type: fltype,
      routeid: routeid,
      fare: fare
    }).then((response) => {
        //setEmpdetails(response.data);
        if(response.data='success') {
          alert("Flight modified")
          window.location.href='http://localhost:3000/admin_homepage';
        }
      });
    //setMessage("Employee is added");
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
          <label>Enter Flight Company: </label>
          <input type="text" placeholder={flobj.operator} defaultValue={flobj.operator}
            onChange={(event) => { setFlcompany(event.target.value) }}></input>
          <br></br>
        </div>
        <div>
          <label>Enter Departure Time(hh:mm:ss): </label>
          <input type="text" placeholder={flobj.departure} defaultValue={flobj.departure}
            onChange={(event) => { setDeptime(event.target.value) }}></input>
          <br></br>
        </div>
        <div>
          <label>Enter Arrival Time(hh:mm:ss): </label>
          <input type="text" placeholder={flobj.arrival} defaultValue={flobj.arrival}
            onChange={(event) => { setArrtime(event.target.value) }}></input>
          <br></br>
        </div>
        <div>
          <label>Enter Total Seats: </label>
          <input type="number" placeholder={flobj.seats} defaultValue={flobj.seats}
            onChange={(event) => { setTotseats(event.target.value) }}></input>
          <br></br>
        </div>
        <div>
          <label>Select Type of Flight: </label>
          <select id="Type" class="form-select" aria-label="Default select example"
            onChange={(event) => { setFltype(event.target.value) }}>
            <option selected>Select</option>
            <option value="travel">Travel</option>
            <option value="cargo">Cargo</option>
          </select>
          <br></br>
        </div>
        <div>
          <label>Enter Route ID: </label>
          <input type="text" placeholder={flobj.routeid} defaultValue={flobj.routeid}
            onChange={(event) => { setRouteid(event.target.value) }}></input>
          <br></br>
        </div>
        <div>
          <label>Enter Fare per Seat/km: </label>
          <input type="text" placeholder={flobj.fare} defaultValue={flobj.fare}
            onChange={(event) => { setFare(event.target.value) }}></input>
          <br></br>
        </div>
      </div>

      <br></br>
      <div>
        <center>
        <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Modify Flight</Button>
        </center>
      </div>
      {fldetails.map((value, key) => {
        return <div>
          <Display
            Flight_Number={value.Flight_No}
            Flight_Company={value.Flight_Name}
            Departure_Time={value.Departure_Hrs}
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