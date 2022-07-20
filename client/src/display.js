import './airline_flightdetails.css';
function Display(props) {
  return (
    <div className="App">
        <div id="display-main1">
        <div id="display-main2">
          <div id="flno">{props.Flight_No}</div>
          <div id="flcom">{props.Flight_Name}</div>
          <div id="deptime">{props.Departure_Hrs}</div>
          <div id="arrtime">{props.Arrival_Hrs}</div>
          <div id="totseats">{props.Total_Seats}</div>
          <div id="fltype">{props.Type}</div>
          <div id="routeid">{props.Route_ID}</div>
      </div>
      <h2>For contact details
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/747/913/small/phone-call-icon-symbol-in-trendy-flat-style-call-icon-sign-for-app-logo-web-call-icon-flat-illustration-telephone-symbol-vector.jpg"
          alt="phone-logo" id="ph-logo"></img>
      </h2>
        <h2>+91 {props.PhNo}</h2>
        </div>
    </div>
  );
}

export default Display;