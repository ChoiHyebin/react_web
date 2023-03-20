import './Footer.css';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {TfiYoutube} from 'react-icons/tfi';
import {FaTiktok} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="sns-container">
                    <ul>
                        <li>
                            <a href="#">
                                <AiOutlineInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <AiOutlineTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <TfiYoutube />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaTiktok />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="address">Copyright © <span className="enter">ADOR</span> ENTERTAINMENT Co., Ltd. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default Footer;