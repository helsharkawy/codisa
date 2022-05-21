import MobileMenu from './MobileMenu';
import './Header.css';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import DesktopStickyHeader from './DesktopStickyHeader';



function Header () {
    

    return (
        <div className='header'>
            <MobileMenu />
            <MobileHeader  />
            <DesktopHeader/>
            <DesktopStickyHeader/>
        </div>
    );
}

export default Header;