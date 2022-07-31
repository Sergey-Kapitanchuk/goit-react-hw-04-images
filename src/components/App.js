import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from './Modal/Modal'
import { API } from "./Services/API"
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

export class App extends Component {
  state = {
    images: '',
    page: 1,
    modal: false,
    url: '',
    loader: false,
    imagesData: [],
  };



  onModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  searchFormSubmitHandler = data => {
    this.setState({
      images: data,
      page: 1,
      imagesData: [],
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  showBigImg = bigImg => {
    this.setState({
      url: bigImg,
    });
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.state.images ||
      prevState.page !== this.state.page) {
      this.setState({
        loader: true,
      });
      API(this.state.images, this.state.page).then(data => {
        this.setState(prevState => ({
          imagesData: prevState.imagesData.concat(data),
          loader: !prevState.loader,
        }));
      });
    }
  }

  render() {
    const { loader, imagesData, modal, url } = this.state;
    const { searchFormSubmitHandler, showBigImg, loadMore, onModal } = this;

    return (
      <div>
        <Searchbar onSubmit={searchFormSubmitHandler} />

        {imagesData.length > 0 ? (
          <>
            <ImageGallery
              imagesData={imagesData}
              onClick={showBigImg}
            />
            {loader && <Loader />}
            <Button onClick={loadMore} />
          </>
        ) : <p>There are no pictures yet</p>}

        {modal && (
          <Modal onClose={onModal} url={url} />
        )}
        <ToastContainer />
      </div>
    );
  }
}