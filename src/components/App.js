import { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import ImageGallery from "./ImageGallery/ImageGallery";
import { Modal } from './Modal/Modal'
import { API } from "./Services/API"
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

export function App() {
  // state = {
  //   images: '',
  //   page: 1,
  //   modal: false,
  //   url: '',
  //   loader: false,
  //   imagesData: [],
  // };
  const [images, setImages] = useState('');
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [url, setUrl] = useState('');
  const [loader, setLoader] = useState(false);
  const [imagesData, setImagesData] = useState([]);



  const onModal = () => {
    setModal(prevState => !prevState);
  };

  const searchFormSubmitHandler = data => {
    setImages(data);
    setPage(1);
    setImagesData([]);
  };

  const loadMore = () => {
    // this.setState(prevState => ({ page: prevState.page + 1 }));
    setPage(prevState => prevState + 1);
  };

  const showBigImg = bigImg => {
    // this.setState({
    //   url: bigImg,
    // });
    setUrl(bigImg);
    setModal(prevState => !prevState);
    // this.setState(prevState => ({
    //   modal: !prevState.modal,
    // }));
  };

  useEffect(() => {
    if (images === '') {
      return;
    }
    setLoader(true)
    API(images, page).then(data => {
      setImagesData(prevState => prevState.concat(data));
      setLoader(false)
    })
  }, [images, page]);


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
          {imagesData.length >= 12 && <Button onClick={loadMore} />}

        </>
      ) : <p>There are no pictures yet</p>}

      {modal && (
        <Modal onClose={onModal} url={url} />
      )}
      <ToastContainer />
    </div>
  );
};