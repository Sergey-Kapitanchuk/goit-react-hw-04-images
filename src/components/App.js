import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from './Modal/Modal'

export class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    activeImgUrl: "",
  };

  handleFormSearchSubmit = (query) => {
    this.setState({ ImageName: query });
  };

  activeImgUrlHandler = (url) => {
    this.setState({ activeImgUrl: url });
  };

  onModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { imageName, activeImgUrl, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSearchSubmit} />
        <ImageGallery
          ImageName={imageName}
          activeImgUrlHandler={this.activeImgUrlHandler}
          onImgClick={this.onModal}
        />
        {showModal && (
          <Modal closeModal={this.onModal} url={activeImgUrl} />
        )}
        <ToastContainer />
      </>
    )
  };
};
