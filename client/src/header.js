import './airline_flightdetails.css';
import Navbar from "./navbar1";
function Header() {
  return (
    <div id="header-main">
      <Navbar />
      <div>
        <img id="header-logo" alt="header-logo" src="https://thumbs.dreamstime.com/b/simple-illustration-dark-blue-hotel-logo-design-template-business-icon-inspiration-travel-tourism-sticker-idea-simple-165633303.jpg"></img>
      </div>
      <div>
        <a href="#HOME" id="top-link" class="brdr" >Home</a>
      </div>
      <div>
        <a href="login.js" id="top-link" class="brdr" >LOG IN</a>
      </div>
    </div>
  );
}
export default Header;