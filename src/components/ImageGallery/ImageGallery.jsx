import React from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import CSS from './ImageGallery.module.css'

// import API from "../Services/API"




const ImageGallery = ({ imagesData, onClick }) => {

    return (
        <>
            <ul className={CSS.ImageGallery}>
                {imagesData &&
                    imagesData.map(e => (
                        <ImageGalleryItem
                            key={e.id}
                            id={e.id}
                            url={e.webformatURL}
                            largeImageURL={e.largeImageURL}
                            onClick={onClick}
                        />
                    ))}
            </ul>
        </>
    );

}
export default ImageGallery;