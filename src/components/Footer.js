import Logo from "./Logo";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Categories from "./Categories";
import './Footer.css';
import NewsletterSignup from "./NewsletterSignup";

const Footer = () => {
    return (

        <footer id="footer">
            <div className="container">
                <div className="logo-social">
                    <div className="logo-name">
                        <Logo/>
                        <div className="text">
                            <p><span>Codisa-Swiss GmbH</span><br/>Import<span>,</span> Export <span>&</span> Trading</p>
                        </div>
                    </div>    
                    <ul className="social">
                        <li><a href="" className="facebook"><FaFacebookSquare/></a></li>
                        <li><a href="" className="instagram"><FaInstagramSquare/></a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <div className="line">
                        <span><FaMapMarkerAlt/></span>
                        <span>
                            <a target="blank" href="https://goo.gl/maps/kbccMy1oJgVM7rERA">TrÜllenweg 6<br/>8247 Flurlingen - Switzerland</a>
                        </span>
                    </div>
                    <div className="line">
                        <span><FaPhoneAlt/></span>
                        <span>
                            <a href="tel:+41768168186">+41768168186 </a><i><FaWhatsapp/><FaViber/></i><br/> 
                            <a href="tel:+201019661812">+201019661812</a>
                        </span>
                    </div>
                    <div className="line">
                        <span><FaEnvelope/></span>
                        <span>
                            <a href="mailto:info@codisa-swiss.ch">info@codisa-swiss.ch</a>
                        </span>
                    </div>
                    <div className="line">
                        <span><FaClock/></span>
                        <span>Mo - sa 9:00 - 22:00</span>
                    </div>
                </div>
                <div className="main-cat">
                    <h3>Store</h3>
                    <Categories/>
                </div>
                <NewsletterSignup/>
            </div>
            <div className="copyright">
                <p>All Rights Reserved © Codisa-Swiss 2022</p>
            </div>
        </footer>

    );
}

export default Footer;