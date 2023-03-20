import './Home.css';
import { useState } from 'react';
import rabbit1 from '../images/rabbit1.png';
import rabbit2 from '../images/rabbit2.png';
import rabbit3 from '../images/rabbit3.png';
import rabbit4 from '../images/rabbit4.png';
import rabbit5 from '../images/rabbit5.png';

const Home = () => {
    return (
        <div className="home-container">
            <div class="snowflake">
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
                <div class="snowflake"></div>
            </div>


            <div className="home-content">
                <h1>Welcome Bunnies !</h1>

                <div className="rabbit-content">
                    <img src={rabbit1} alt="" className='rabbit' />
                </div>
                <div className="rabbit-content">
                    <img src={rabbit2} alt="" className='rabbit' />
                </div>
                <div className="rabbit-content">
                    <img src={rabbit3} alt="" className='rabbit' />
                </div>
                <div className="rabbit-content">
                    <img src={rabbit4} alt="" className='rabbit' />
                </div>
                <div className="rabbit-content">
                    <img src={rabbit5} alt="" className='rabbit' />
                </div>

                {/* <div className="comment">
                    <div className="comment comment1">
                        Hello, Bunnies❣️
                    </div>
                    <div className="comment comment2">
                        Welcome🐰
                    </div>
                    <div className="comment comment3">
                        We
                    </div>
                    <div className="comment comment4">
                        Are
                    </div>
                    <div className="comment comment5">
                        NewJeans👖
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Home;