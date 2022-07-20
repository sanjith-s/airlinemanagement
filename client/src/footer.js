import './airline_flightdetails.css';
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
function Footer() {
  return (
    <div className='footer footer-bottom-fixed' >
      {/* <div className='footer'> */}
          <div id="image">
            <BsTwitter padding="1em" size="2em" color="white" />
            &nbsp;
            &nbsp;
            <BsFacebook padding="1em" size="2em" color="white" />
            &nbsp;
            &nbsp;
            <BsInstagram padding="1em" size="2em" color="white" />
            &nbsp;
            &nbsp;
            <BsPinterest padding="1em" size="2em" color="white" />
            &nbsp;
            &nbsp;
            <BsYoutube padding="1em" size="2em" color="white" />
          </div>
          <div id="right-footer">@2022 CARVEL PVT. LTD.<br></br>No.12, 1st Floor, 100 Feet Link Road,<br></br>Kataboomhan Street, Chennai</div>
          <div id="right-footer"><u>CONTACT US:</u><br></br>Mobile No.: 9435412671<br></br>Email: carvelpvtltd@gmail.com</div>
      {/* </div> */}
    </div>
  );
}

export default Footer;