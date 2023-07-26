import React from "react";
import './footer.css';
import logo from '../Images/Footer_section/Medfuture-logo.png';
import facebook from '../Images/Footer_section/fb.png';
import instero from '../Images/Footer_section/inster.png';
import lindin from '../Images/Footer_section/lindin.png';
import twitter from '../Images/Footer_section/twitter.png';
import youtube from '../Images/Footer_section/youtube.png';
import fevicon from '../Images/Footer_section/fevicon.png';

function Footer() {

    return (
        <>

            <div className="footer_content">
                <div className="medlogo">
                    <img src={logo} alt="" />
                </div>
                <div className="media">
                    <ul>
                        <li><img src={facebook} alt="" /></li>
                        <li><img src={instero} alt="" /></li>
                        <li><img src={lindin} alt="" /></li>
                        <li><img src={twitter} alt="" /></li>
                        <li><img src={youtube} alt="" /></li>
                    </ul>
                </div>
                
                <div style={{width: 131, height: 226, left: 896, position: 'absolute',top: -130}}>
      <div style={{left: 0, top: 48, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>About</div>
      <div style={{left: 0, top: 87, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>News</div>
      <div style={{left: 0, top: 126, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Policies</div>
      <div style={{left: 0, top: 165, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Tearms of Use</div>
      <div style={{left: 0, top: 204, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Compliance</div>
      <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'uppercase', lineHeight: 22, wordWrap: 'break-word'}}>Information</div>
    </div>
    <div style={{width: 176, height: 150, left: 1189, top: -130, position: 'absolute'}}>
      <div style={{left: 0, top: 48, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Contact Us</div>
      <div style={{left: 0, top: 87, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Create an Account</div>
      <div style={{left: 0, top: 128, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Register for Job Alerts</div>
      <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'uppercase', lineHeight: 22, wordWrap: 'break-word'}}>Support</div>
    </div>
    <div style={{width: 208, height: 343, left: 1527, top: -130, position: 'absolute'}}>
      <div style={{width: 208, height: 295, left: 0, top: 48, position: 'absolute'}}>
        <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>New South Wales</div>
        <div style={{left: 0, top: 39, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Queensland</div>
        <div style={{left: 0, top: 78, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>South Australia</div>
        <div style={{left: 0, top: 117, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Tasmania</div>
        <div style={{left: 0, top: 156, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Victoria</div>
        <div style={{left: 0, top: 195, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Western Australia</div>
        <div style={{left: 0, top: 234, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Australian Capital Territory</div>
        <div style={{left: 0, top: 273, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 18, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 22, wordWrap: 'break-word'}}>Northern Territory</div>
      </div>
      <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'uppercase', lineHeight: 22, wordWrap: 'break-word'}}>Visiting</div>
    </div>
    <div style={{left: 831, top: 430, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>Copyrights © 2023 Medfuture</div>
    <div className="fcontet" style={{width: 816, height: 56, left: 172, top: 488, position: 'absolute'}} >Medfuture would like to acknowledge the traditional custodians of the land on which we live and work. 
    <br/>We would also like to pay respect to the elders past and present and extend that respect to all other Aboriginal people.</div>
    
    <div style={{width: 531, height: 104, left: 1202, top: 478, position: 'absolute'}}>
      <div style={{width: 342, height: 50, left: 0, top: 53, position: 'absolute', background: 'white', border: '0.50px #305779 solid'}} />
      <div style={{left: 0, top:-200, position: 'absolute', textAlign: 'center', color: '#EBEDEF', fontSize: 20, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'uppercase', lineHeight: 22, wordWrap: 'break-word'}}>Sign up for job alerts</div>
      <div style={{width: 119, height: 26, left: 20, top: -173, position: 'absolute', color: '#B1B2B5', fontSize: 20, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 25, wordWrap: 'break-word'}}>Your Email</div>
      <div style={{width: 216, height: 54, left: 315, top: 50, position: 'absolute'}}>
        <div style={{width: 191, height: 50, left: 25, top: 2, position: 'absolute', background: '#DADADA', borderRadius: 2}} />
        <div style={{width: 73, height: 28, left: 93, top: -243, position: 'absolute', color: '#125490', fontSize: 18, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'uppercase', lineHeight: 30, wordWrap: 'break-word'}}>Submit</div>
        <img style={{width: 50, height: 54, left: 0, top: 0, position: 'absolute', borderRadius: 2}} src={fevicon} />
      </div>
      
    </div>

            </div>
        </>
    );
}
export default Footer;