import './Discography.css';
import album1 from '../images/album1.png';
import album2 from '../images/album2.png';
import cd from '../images/cd.png';
import { useState } from 'react';

const Discography = () => {
    const[cover, setCover] = useState(false); // 메뉴의 초기값을 false로 설정
    const toggleCover = () => {
        setCover(cover=>!cover); // on, off
    }
    const[cover2, setCover2] = useState(false); // 메뉴의 초기값을 false로 설정
    const toggleCover2 = () => {
        setCover2(cover2=>!cover2); // on, off
    }

    return (
        <div className="discography-container">
            <h1>DISCOGRAPHY</h1>
            <div className="album">
                <div className="album-intro">
                    <div className="album-img">
                        <img src={cd} alt="" 
                            className={cover ? "cd-active" : ""}
                        />
                        <img src={album2} alt=""
                            onClick={()=>{
                            toggleCover()
                        }} />
                    </div>
                    <div className="date">
                        <h3>Release Date</h3>
                        <p>2023-01-02</p>
                    </div>
                </div>
                
                <div className='album-content'>
                    <h1>NewJeans 'OMG'</h1>
                    <div className={cover ? "hide-explain" : "album-explain"}>
                        <p>여름의 끝에 데뷔해 풍성하고 감사한 계절을 보냈다. 어디에 서 있어도 격려와 응원의 목소리가 들려오는 것 같았다. 그리고 찬 바람이 불어오기 시작할 즈음, 어떤 장면이 보였다. 설원에 나간 작은 동물, 그리고 그 생명을 정성스럽게 렌즈에 담는 누군가가 있다. 더 가까이 다가가고 싶지만 그럴 수 없다. 상대방을 모른 척하고 마음껏 뛰어놀기엔 자꾸 눈길이 닿는다. 서로를 궁금해하고, 서로에게 더 가까이 다가가고 싶지만, 한 발 더 가까이 내딛는 것이 조심스럽다. 무언가가 더 필요하다, 고 생각 한다. 함께 보내는 겨울에 어울리는.</p>
                        <p>첫 겨울을 맞이하는 NewJeans의 새 앨범 “OMG”는 조금은 묘한 거리감, 조금은 낯선 배경 속에서 다시 한번 관계를 이야기한다. 그리고 그 안에 특별하고 의미 있는 선물을 담아내고 있다. 1st. EP “New Jeans”에서 담아냈던, 사람의 관계와 끌림에 대해 이야기하며 함께 있을 때 더 빛나는 10대 소녀들이 들려주는 '우리'라는 서사는 모습을 바꿔가며 또 한 번 펼쳐진다. 낯섦을 지나 공감, 환대, 호혜에 기반을 둘 때, '우리'는 더 가까워지고, 함께 성장한다고 믿는다.</p>
                    </div>
                    <div className={cover ? "album-list" : "hide-list"}>
                        <h3>TRACK LIST</h3>
                        <p>1. OMG</p>
                        <p>2. Ditto</p>
                    </div>
                </div>
            </div>

            <div className="album">
                <div className="album-intro">
                    <div className="album-img">
                        <img src={cd} alt="" 
                            className={cover2 ? "cd-active" : ""}
                        />
                        <img src={album1} alt="" 
                            onClick={()=>{
                                toggleCover2()
                            }}
                        />
                    </div>
                    <div className="date">
                        <h3>Release Date</h3>
                        <p>2022-08-01</p>
                    </div>
                </div>
                <div className="album-content">
                    <h1>NewJeans 1st EP 'New Jeans'</h1>
                    <div className={cover2 ? "hide-explain" : "album-explain"}>
                    <p>
                        NewJeans는 무엇보다 솔직함과 자연스러움을 추구한다.
                        항상 기존과 다른 방식으로 K-POP 시장의 트렌드를 이끌고, 혁신적인 아티스트 브랜드를 만들어 온 민희진 총괄 프로듀서는 ‘대중음악은 일상과 초근접해 있는 문화이기 때문에 마치 매일 입는 옷과도 같다'라고 말한다.
                    </p>

                    <p>
                        트렌드의 정중앙에서, 혹은 트렌드와 무관하게 시대 불문 남녀노소 모두에게 사랑받아온 ‘Jean'처럼.
                        이 시대의 새로운 아이콘으로, 매일 찾게 되는 언제입어도 질리지 않는 "New Jeans"가 되길!
                        이것이 NewJeans가 지향하는 가치이자, New Genes - NewJeans의 시작이다.
                    </p>
                    </div>
                    <div className={cover2 ? "album-list" : "hide-list"}>
                        <h3>TRACK LIST</h3>
                        <p>1. Attention</p>
                        <p>2. Hype boy</p>
                        <p>3. Cookie</p>
                        <p>4. Hurt</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discography;