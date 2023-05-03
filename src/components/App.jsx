import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import Button from "./Button/Button";
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";
import { fetchImages } from '../services/pixabayApi';
class App extends Component {
   state = {
    images: [],
    page: 1, 
    query: "",
    isLoading: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { query } = props;
    if (query !== state.query) {
      return { page: 1, query, images: [] };
    }
    return null;
  }

  getSnapshotBeforeUpdate() {
    return document.body.clientHeight - 75.63;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      (prevProps.query !== this.props.query && this.props.query) ||
      prevState.page !== this.state.page
    ) {
      this.getSearchedImages();
    }

    if (prevState.news !== this.state.news && this.state.page !== 1) {
      console.log("scroll");
      window.scrollTo({
        top: snapshot,
        behavior: "smooth",
      });
    }
  }

  getSearchedImages = async () => {
    this.setState({ isLoading: true });
    try {
      const data = await fetchImages(this.props.query, this.state.page);
      this.setState((prev) => ({ images: [...prev.images, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
   setQuery = (query) => {
    this.setState({ query });
  };
  
  render() {
    const { images } = this.state;
      return(
        <>
          <Searchbar setQuery={this.setQuery} query={this.state.query}/>
          <ImageGallery images={images} />
          <Loader />
          <Button />
          <Modal/>
        </>
  );
  }

};

export default App;