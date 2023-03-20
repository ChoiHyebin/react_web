import './Profile.css';
import { useState } from 'react';
import minji from '../images/minji.jpg';
import haerin from '../images/haerin.jpg';
import hanni from '../images/hanni.jpg';
import daniel from '../images/daniel.jpg';
import hyein from '../images/hyein.jpg';

const Profile = () => {
    const [tabNum, setTabNum] = useState(1);

    return (
        <div className="profile-container">
            <ul className="member-list">
                <li onClick={()=>{setTabNum(1)}}
                    className={tabNum === 1 ? "active" : ""}>
                    <a href="#minji">MINJI</a>
                </li>
                <li onClick={()=>{setTabNum(2)}}
                    className={tabNum === 2 ? "active" : ""}>
                    <a href="#hanni">HANNI</a>
                </li>
                <li onClick={()=>{setTabNum(3)}}
                    className={tabNum === 3 ? "active" : ""}>
                    <a href="#daniel">DANIELLE</a>
                </li>
                <li onClick={()=>{setTabNum(4)}}
                    className={tabNum === 4 ? "active" : ""}>
                    <a href="#haerin">HAERIN</a>
                </li>
                <li onClick={()=>{setTabNum(5)}}
                    className={tabNum === 5 ? "active" : ""}>
                    <a href="#hyein">HYEIN</a>
                </li>
            </ul>

            <div id="minji" className={tabNum === 1 ? "member-content active" : "member-content"}>
                <img src={minji} alt="" className='member-photo'/>
                <div className="member-detail">
                    <h3>MINJI</h3>
                    <p>NAME: 김민지</p>
                    <p>BIRTH: 2004. 05. 07</p>
                </div>
            </div>
            <div id="hanni" className={tabNum === 2 ? "member-content active" : "member-content"}>
                <img src={hanni} alt="" className='member-photo' />
                <div className="member-detail">
                    <h3>HANNI</h3>
                    <p>NAME: Hanni Pham (하니 팜)</p>
                    <p>BIRTH: 2004. 10. 06</p>
                </div>
            </div>
            <div id="daniel" className={tabNum === 3 ? "member-content active" : "member-content"}>
                <img src={daniel} alt="" className='member-photo' />
                <div className="member-detail">
                    <h3>DANIELLE (다니엘 마쉬)</h3>
                    <p>NAME: Danielle Marsh</p>
                    <p>BIRTH: 2005. 04. 11</p>
                </div>
            </div>
            <div id="haerin" className={tabNum === 4 ? "member-content active" : "member-content"}>
                <img src={haerin} alt="" className='member-photo' />
                <div className="member-detail">
                    <h3>HAERIN</h3>
                    <p>NAME: 강해린</p>
                    <p>BIRTH: 2006. 05. 15</p>
                </div>
            </div>
            <div id="hyein" className={tabNum === 5 ? "member-content active" : "member-content"}>
                <img src={hyein} alt="" className='member-photo' />
                <div className="member-detail">
                    <h3>HYEIN</h3>
                    <p>NAME: 이혜인</p>
                    <p>BIRTH: 2008. 04. 21</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;