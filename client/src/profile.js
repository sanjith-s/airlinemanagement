import './airline_flightdetails.css';
import { useState } from "react";
import Axios from "axios";
import Header from "./navbar2";
import Footer from "./footer";
import Display from "./display";

let count = 0;

function App() {

    const [profile, setProfile] = useState({});

        Axios.post('http://localhost:3001/getprofile', {
            uid: localStorage.getItem('uid')
        }).then((response) => {
            //alert(response.data)
            setProfile(response.data);

        });
      

    let username = localStorage.getItem('name');

    return (
        <><div id="Profile">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome {username}
                    </h1>
                </center>
            </div>
        </div>
            <div id="prof">
                <table>
                    <td>
                        <tr><b>NAME</b></tr>
                        <br></br>
                        <tr><b>EMAIL ID</b></tr>
                        <br></br>
                        <tr><b>MOBILE NO.</b></tr>
                        <br></br>
                        <tr><b>ADDRESS</b></tr>
                    </td>
                    <td>
                        <tr> : </tr>
                        <br></br>
                        <tr> : </tr>
                        <br></br>
                        <tr> : </tr>
                        <br></br>
                        <tr> : </tr>
                    </td>
                    <td>
                        <tr>{profile.name}</tr>
                        <br></br>
                        <tr>{profile.email}</tr>
                        <br></br>
                        <tr>{profile.mobno}</tr>
                        <br></br>
                        <tr>{profile.address}</tr>
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
        </table>
    </div>
    <br></br>
    <center>
        <Button id="button-result" variant="contained" color="primary" onClick><Link id="sign" to='/cargo_confirmation'>Pay</Link></Button>
    </center> */}

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
            </div>
            <Footer />
        </>
    );
}

export default App;