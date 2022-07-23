import { Component } from "react";
import { toast } from "react-toastify";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

import API from "../Services/API"
import apiService from '../Services/API'



export default class ImageGallery extends Component {
    state = {
        images: [],
        Loading: false,
        button: false,
        status: 'idle',
        imageToScrollId: '',
    }

    componentDidUpdate(prevProps, prevState) {
        const { imageName } = this.props;

        if (prevProps.imageName !== imageName) {
            this.getPictures(imageName);
            console.log("imageName");
        }

    };

    getPictures = async (query) => {
        apiService.resetPage();
        console.log("query");
        apiService.query = query;

        const pictures = await apiService.getImages();

        if (typeof (pictures) === 'string') {
            toast.error("Sorry, something went wrong. Try again!");
            return;
        }

        if (pictures.length === 0) {
            toast.error('Please, enter a valid search query!', {
                duration: 2000
            });
        } else {
            this.setState({ images: [pictures], status: 'resolved', imagesToScrollId: '' });

            if (pictures.length === 12) {
                this.setState({ button: true })
            }
        }
    }

    loadMoreImagesBtnHandler = async () => {
        this.setState({ loading: true });
        this.setState({ button: false });

        const newImages = await apiService.getImages();
        this.setState({ imagesToScrollId: newImages[0].id })

        this.setState(prevState => {
            return ({ images: [...prevState.images, ...newImages] })
        });

        this.setState({ loading: false });

        if (newImages.length === 12) {
            this.setState({ button: true })
        } else {
            this.setState({ button: false })
        }
    }

    onImageClickHandler = largeImageURL => {
        this.props.activeImgUrlHandler(largeImageURL);
        this.props.onImgClick();
    }

    c

    render() {
        const { status, images, loading, button } = this.state;

        if (status === 'idle') {
            return <div>There are no pictures yet</div>
        }

        if (status === 'pending') {
            return <div>loading...</div>
        }

        return (
            <>
                <ul className="gallery" >
                    {images.map((e) => (
                        <ImageGalleryItem
                            key={e.id}
                            id={e.id}
                            url={e.webformatURL}
                            alt={this.props.imageName}
                            largeImgUrl={e.largeImageURL}
                            onClick={this.onImageClickHandler}
                        />
                    ))}
                </ul>
                {loading && <Loader />}
                {button && <Button onClick={this.loadMoreImagesBtnHandler} />}
            </>
        )
    }
}