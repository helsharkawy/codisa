import hookah from "../images/hookah.jpg";
import shisha from "../images/shisha.jpg";
import Accessories from "../images/Accessories.jpg";
import Charcoal from "../images/Charcoal.jpg";
import "./Landing.css"
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="landing">
            <div className="container">
                <div className="cat-main-items">
                    <div className="cat-item">
                        <div className="cat-image">
                            <img src={hookah} alt="Hookah Main"/>
                        </div>
                        <div className="cat-text">
                            <h2>HooKah</h2>
                            <p>Hookah from the world brands</p>
                            <Link to="/category/hookah">Shop Now</Link>
                        </div>
                    </div>
                    <div className="cat-item">
                        <div className="cat-image">
                            <img src={shisha} alt="Shisha Main"/>
                        </div>
                        <div className="cat-text">
                            <h2>Shisha</h2>
                            <p>Shisha from the best producers</p>
                            <Link to="/category/shisha">Shop Now</Link>
                        </div>
                    </div>
                    <div className="cat-item">
                        <div className="cat-image">
                            <img src={Accessories} alt="Accessories Main"/>
                        </div>
                        <div className="cat-text">
                            <h2>Accessories</h2>
                            <p>Accessories for hookah</p>
                            <Link to="/category/accessories">Shop Now</Link>
                        </div>
                    </div>
                    <div className="cat-item">
                        <div className="cat-image">
                            <img src={Charcoal} alt="Charcoal Main"/>
                        </div>
                        <div className="cat-text">
                            <h2>Charcoal</h2>
                            <p>Charcoal tobacco from the world brands</p>
                            <Link to="/category/charcoal">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;