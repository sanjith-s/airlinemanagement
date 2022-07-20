import { Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import Status from './cargo_status';
import HomePage1 from './homepage1';
import HomePage2 from './homepage2';
import About1 from './about1';
import About2 from './about2';
import Login from './login'
import Logout from './logout'
import Signup from './signup'
import Profile from './profile'
import TravelBooking from './travel_bookingform'
import TravelTrack from './travel_trackingportal'
import TravelStatus from './travel_status'
import TravelHistory from './travel_bookinghistory'
import TravelFlights from './travel_flightsdisplay'
import TravelUserDetails from './travel_userdetails'
import TravelSeats from './travel_seatmatrix'
import TravelBilling from './travel_billingpage'
import TravelPayment from './travel_paymentconfirmation'
import CargoBooking from './cargo_bookingform'
import CargoStatus from './cargo_status'
import CargoBilling from './cargo_billingpage'
import CargoTrack from './cargo_trackingportal'
import CargoHistory from './cargo_bookinghistory'
import CargoUserDetails from './cargo_userdetails'
import CargoConfirm from './cargo_confirmation';
import Adminhome from "./admin_homepage";
import AddEmployee from "./airline_employeedetails";
import AddFlight from "./airline_flightdetails";
import AddRoute from "./airline_routedetails";
import AddMaint from "./airline_maintenancerecord";
import ModifyEmployee from "./airline_modifyempsearch";
import ModifyFlight from "./airline_modifyflightsearch";
import ModifyRoute from "./airline_modifyroutesearch";
import ModifyMaint from "./airline_modifymaintsearch";
import AdminCargoStatus from "./cargo_parcelmanagement";
import AdminTravelStatus from "./travel_ticketmanagement";
import EmployeeModify from "./airline_employeemodify";
import FlightModify from "./airline_flightmodify";
import RouteModify from "./airline_routemodify";
import MaintModify from "./airline_maintmodify";
import EmployeeDelete from "./airline_deleteemp";
import FlightDelete from "./airline_deleteflight";
import RouteDelete from "./airline_deleteroute";
import MaintDelete from "./airline_deletemaint";
import ReportForm from "./reportform";
// import Header from "./navbar1";
// import Footer from "./footer";

function App() {
    let theme = createTheme({
        palette: {
          primary: {
            main: '#0052cc',
          },
          secondary: {
            main: '#edf2ff',
          },
        },
      });
      
      theme = createTheme(theme, {
        palette: {
          info: {
            main: theme.palette.secondary.main,
          },
        },
      });

    return (
        <>
        <div classname="page-container">
        <div classname="content-wrap">
        <Navbar />
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/cargo_status' element={<Status />}></Route>
                <Route path='/homepage1' element={<HomePage1 />}></Route>
                <Route path='/homepage2' element={<HomePage2 />}></Route>
                <Route path='/about1' element={<About1 />}></Route>
                <Route path='/about2' element={<About2 />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/travel_bookingform' element={<TravelBooking />}></Route>
                <Route path='/travel_trackingportal' element={<TravelTrack />}></Route>
                <Route path='/travel_status' element={<TravelStatus />}></Route>
                <Route path='/travel_bookinghistory' element={<TravelHistory />}></Route>
                <Route path='/travel_flightsdisplay' element={<TravelFlights />}></Route>
                <Route path='/travel_userdetails' element={<TravelUserDetails />}></Route>
                <Route path='/travel_seatmatrix' element={<TravelSeats />}></Route>
                <Route path='/travel_billingpage' element={<TravelBilling />}></Route>
                <Route path='/travel_paymentconfirmation' element={<TravelPayment />}></Route>
                <Route path='/cargo_bookingform' element={<CargoBooking />}></Route>
                <Route path='/cargo_status' element={<CargoStatus />}></Route>
                <Route path='/cargo_billingpage' element={<CargoBilling />}></Route>
                <Route path='cargo_confirmation' element={<CargoConfirm />}></Route>
                <Route path='/cargo_trackingportal' element={<CargoTrack />}></Route>
                <Route path='/cargo_bookinghistory' element={<CargoHistory />}></Route>
                <Route path='/cargo_userdetails' element={<CargoUserDetails />}></Route>
                <Route path='/admin_homepage' element={<Adminhome />}></Route>
                <Route path='/airline_employeedetails' element={<AddEmployee />}></Route>
                <Route path='/airline_flightdetails' element={<AddFlight />}></Route>
                <Route path='/airline_routedetails' element={<AddRoute />}></Route>
                <Route path='/airline_maintenancerecord' element={<AddMaint />}></Route>
                <Route path='/airline_modifyempsearch' element={<ModifyEmployee />}></Route>
                <Route path='/airline_modifyflightsearch' element={<ModifyFlight />}></Route>
                <Route path='/airline_modifyroutesearch' element={<ModifyRoute />}></Route>
                <Route path='/airline_modifymaintsearch' element={<ModifyMaint />}></Route>
                <Route path='/cargo_parcelmanagement' element={<AdminCargoStatus />}></Route>
                <Route path='/travel_ticketmanagement' element={<AdminTravelStatus />}></Route>
                <Route path='/airline_employeemodify' element={<EmployeeModify />}></Route>
                <Route path='/airline_flightmodify' element={<FlightModify />}></Route>
                <Route path='/airline_routemodify' element={<RouteModify />}></Route>
                <Route path='/airline_maintmodify' element={<MaintModify />}></Route>
                <Route path='/airline_deleteemp' element={<EmployeeDelete />}></Route>
                <Route path='/airline_deleteflight' element={<FlightDelete />}></Route>
                <Route path='/airline_deleteroute' element={<RouteDelete />}></Route>
                <Route path='/airline_deletemaint' element={<MaintDelete />}></Route>
                <Route path='/reportform' element={<ReportForm />}></Route>
            </Routes>
        </div>
        </div>
           
        </>
    )
}

export default App