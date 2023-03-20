import './Gallery.css';
import imgs from '../assets/Imagedata';
import { Gallery } from "react-grid-gallery";
// import Lightbox from 'react-image-lightbox';
import { useState } from 'react';

const gallery = () => {

    return (
        <div className="gallery-container">
            <h1>GALLERY</h1>
            {/* <div className='gallery'>
                <div className="gallery-img">
                    {
                        imgs.map((img)=>(
                            <img src={img.src} alt=""/>
                        ))
                    }
                </div>
            </div> */}

            <div className="gal">
                <Gallery images={imgs} />
            </div>
        </div>
    );
}

export default gallery;