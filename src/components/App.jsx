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
    arrayOfImages: [],
    page: 4,
    quantityPages:5
  };

  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      const inputValue = e.target[1].value;
      let page = this.state.page;
      let quantityPages = this.state.quantityPages
      fetchData(inputValue, page, quantityPages).then(resp => {  
        console.log(resp)
        this.setState({ arrayOfImages:[...resp.data.hits]});
      })
    
      
      
    };


    return (
    <div>
        <Searchbar submit={handleSubmit}  />
        <ImageGallery>
          <ImageGalleryItem state={ this.state}/>
        </ImageGallery>
        {this.state.arrayOfImages.length===0?null:(<Button/>)}
        <Loader />
        <Modal />
      
    </div>
  );
  
  }
};
