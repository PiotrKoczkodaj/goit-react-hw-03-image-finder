import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";

export class App extends Component {

  render(){
    return (
    <div>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem/>
        </ImageGallery>
        <Button></Button>
        <Loader />
        <Modal/>
    </div>
  );
  
  }
};
