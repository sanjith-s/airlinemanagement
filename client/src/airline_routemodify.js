import './airline_flightdetails.css';
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import Display from "./display";

let count=0;

function App() {
    const [routeid, setRouteid] = useState("");
    const [deplocation, setDeplocation] = useState("");
    const [arrlocation, setArrlocation] = useState("");
    const [totstops, setTotstops] = useState("");
    const [distance, setDistance] = useState("");
    const [routedetails, setRoutedetails] = useState([]);
    const [routeobj, setRouteobj] = useState({});

    if (count == 0) {
        Axios.post('http://localhost:3001/getroute', {
        }).then((response) => {
            //onsole.log(response.data);
            setRouteobj(response.data);
            console.log(response.data)
            //console.log(empobj)
            setDeplocation(response.data.dept)
            setArrlocation(response.data.arr)
            setTotstops(response.data.stops)
            setDistance(response.data.distance);
            console.log(count)
            count=count+1
        });
    }

    const savedetail = () => {
        Axios.post('http://localhost:3001/setroute', {
            dept: deplocation,
            arr: arrlocation,
            stops: totstops,
            distance: distance
        }).then((response) => {
            //setEmpdetails(response.data);
            if(response.data='success') {
                alert("Route modified")
                window.location.href='http://localhost:3000/admin_homepage';
              }
        });
        //setMessage("Employee is added");
    }

    return (
        <div id="Routes">
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
                    <label>Enter Departure Location: </label>
                    <input type="text" placeholder={routeobj.dept} defaultValue={routeobj.dept}
                        onChange={(event) => { setDeplocation(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Arrival Location: </label>
                    <input type="text" placeholder={routeobj.arr} defaultValue={routeobj.arr}
                        onChange={(event) => { setArrlocation(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Total Stops: </label>
                    <input type="text" placeholder={routeobj.stops} defaultValue={routeobj.stops}
                        onChange={(event) => { setTotstops(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Distance of Route: </label>
                    <input type="text" placeholder={routeobj.distance} defaultValue={routeobj.distance}
                        onChange={(event) => { setDistance(event.target.value) }}></input>
                    <br></br>
                </div>
            </div>
            <br></br>
            <div>
                <center>
                <Button id="button-result" variant="contained" color="primary" onClick={savedetail}>Modify Flight</Button>
                </center>
            </div>
            <Footer />
        </div>
    );
}

export default App;