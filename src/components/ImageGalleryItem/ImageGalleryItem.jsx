import React from "react";
import CSS from "./ImageGalleryItem.module.css"


const ImageGalleryItem = ({ url, largeImgUrl, query, id, onClick }) => {
    return (
        <li className={CSS.gallery_item}>
            <img
                src={url}
                alt={query}
                id={id}
                onClick={() => onClick(largeImgUrl)}
                className={CSS.image}
            />
        </li>
    )
}
export default ImageGalleryItem;