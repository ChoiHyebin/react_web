import './Navbar.css';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const[menu, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정
    const toggleMenu = () => {
        setMenu(menu=>!menu); // on, off
    }

    return (
        <nav>
            <div className={menu ? "menu" : "hide-menu"}>
                <ul>
                    <li><a href="/profile">PROFILE</a></li>
                    <li><a href="/discography">DISCOGRAPHY</a></li>
                    <li><a href="/gallery">GALLERY</a></li>
                    <li><a href="/video">VIDEO</a></li>
                    <li><a href="/notice">NOTICE</a></li>
                    <li><a href="/schedule">SCHEDULE</a></li>
                </ul>
            </div>
            <div className="menu-bar" onClick={()=>{
                toggleMenu()
            }}>
                {
                    menu ? (
                        <button>
                            <AiOutlineClose />
                        </button>
                    ) : (
                        <button>
                            <FiMenu />
                        </button>
                    )
                }
            </div>
        </nav>
    );
}

export default Navbar;