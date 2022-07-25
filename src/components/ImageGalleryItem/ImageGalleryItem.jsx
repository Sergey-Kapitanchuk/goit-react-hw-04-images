import React from "react";
import CSS from "./ImageGalleryItem.module.css"


const ImageGalleryItem = ({ url, largeImageURL, onClick }) => {
    return (
        <li className={CSS.gallery_item}>
            <img
                className={CSS.image}
                src={url}
                alt="фото"
                onClick={() => onClick(largeImageURL)}
            />
        </li>
    );
};
export default ImageGalleryItem;