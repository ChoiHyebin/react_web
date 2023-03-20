import './Header.css';
import logo from '../images/logo.svg';
import Navbar from './navbar/Navbar';

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <a href="/"><img src={logo} alt="" /></a>
                </div>
                <div className="menu-bar">
                    <Navbar />
                </div>
            </div>
        </header>
    );
}

export default Header;