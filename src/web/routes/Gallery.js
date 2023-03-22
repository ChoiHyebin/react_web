import './Gallery.css';
import imgs from '../assets/Imagedata';
import { Gallery } from "react-grid-gallery";

const Galleryy = () => {

    return (
        <div className="gallery-container">
            <h1>GALLERY</h1>
            {/* <div className='gallery'>
                {
                    imgs.map((img)=>(
                        <img src={img.src} alt=""/>
                    ))
                }
            </div> */}

            <div className="gal">
                <Gallery
                    images={imgs}
                />
            </div>
        </div>
    );
}

export default Galleryy;