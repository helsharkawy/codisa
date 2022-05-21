import Categories from "./Categories";
import Links from "./Links";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";


function DesktopHeader () {
    return (
        <div className='desktop-header'>
            <div className= 'desktop-nav-search '>
                <div className="container">
                    <Nav/>
                    <Search/>
                </div>
            </div>
            <div className="desktop-logo-links">
                <div className="container">
                    <Logo/>
                    <Links/>
                </div>    
            </div>
            <div className="desktop-cat-with-icon">
                <div className="container">
                    <Categories/>
                </div>    
            </div>
        </div>
    )
}

export default DesktopHeader;