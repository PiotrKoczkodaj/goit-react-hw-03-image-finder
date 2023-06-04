import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { fetchData } from "./Api";

export class App extends Component {

  state = {
  images: []
  };

  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const inputValue = e.target[1].value;
      fetchData(inputValue).then(resp => {  
        return resp.data.hits
      })
     
      this.setState({ images:['d']});
    };

    console.log(this.state)
    return (
    <div>
        <Searchbar submit={handleSubmit } />
        <ImageGallery>
          <ImageGalleryItem/>
        </ImageGallery>
        <Button></Button>
        <Loader />
        <Modal />
      
    </div>
  );
  
  }
};
