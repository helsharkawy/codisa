import Categories from "./Categories";
import Links from "./Links";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



function DesktopStickyHeader () {

    const showDesktopSearch = () => {
        document.querySelector(".desktop-search").style.display="block";
    }
    const showHideLinks = () => {
        if (document.querySelector(".sticky-links").style.display === "none"){
            document.querySelector(".sticky-links").style.display = "block";
        }
        else {
            document.querySelector(".sticky-links").style.display = "none"
        }
    }
    return (
        <div className="desktop-sticky-header" style={{display:"none"}}>
            <div className="sticky-main-head">
                <div className="container">
                    <div className="logo-nav">
                        <Logo/>
                        <Nav/>
                    </div>
                    <div className="icons">
                        <div className="search-icon">
                            <i onClick={showDesktopSearch}><FaSearch/></i>
                            <div className="search-container desktop-search" style={{display:"none"}}>
                                <div className="close-desktop-search container">
                                    <span>What are you Looking for?</span>
                                </div>
                                <Search/>
                            </div>
                        </div>
                        <div className="cart-icon">
                            <i><FaShoppingCart/></i>
                        </div>
                        <div className="links-icon">
                            <i onClick={showHideLinks}><FaUser/></i>
                            <div className="sticky-links" style={{display:"none"}}>
                                <Links />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky-cat">
                <div className="container">
                    <Categories/>
                </div>    
            </div>
        </div>
    )
}

export default DesktopStickyHeader;