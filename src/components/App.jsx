import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchData } from './Api';

export class App extends Component {
  state = {
    arrayOfImages: [],
    page: 1,
    quantityElements: 12,
    loading: true,
    inputValuee: '',
    open: false,
    imageSrcToModal: '',
    tagsImageToModal: '',
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }
  render() {
    const settingInputValue = e => {
      this.setState({ inputValuee: e.target.value });
      this.setState(prevState => {
        console.log(prevState.inputValuee);
        return { inputValuee: prevState.inputValuee };
      });
    };
    const handleSubmit = e => {
      e.preventDefault();
      const inputValue = e.target[1].value;
      let page = this.state.page;
      let quantityElements = this.state.quantityElements;
      fetchData(inputValue, page, quantityElements).then(resp => {
        if (inputValue === '') {
          return null
        }
        this.setState({ arrayOfImages: [...resp.data.hits] });
        
      });
    };

    const pagination = () => {
      let inputValue = this.state.inputValuee;
      let page = this.state.page;
      let quantityElements = this.state.quantityElements;
      fetchData(inputValue, page, quantityElements).then(resp => {
        this.setState({ quantityElements: this.state.quantityElements + 12 });
        this.setState({ arrayOfImages: [...resp.data.hits] });
      });
    };

    const modalOpen = e => {
      this.setState({
        imageSrcToModal: e.target.src,
        tagsImageToModal: e.target.alt,
        open: true,
      });
    };

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar submit={handleSubmit} inputValue={settingInputValue} />
        <ImageGallery>
          <ImageGalleryItem state={this.state} modalOpen={modalOpen} />
        </ImageGallery>
        {this.state.arrayOfImages.length === 0 ? null : (
          <Button state={this.state} pagination={pagination} />
        )}
        <Loader loading={this.state.loading} />
        {!this.state.open ? null : (
          <Modal state={this.state} source={modalOpen} />
        )}
      </div>
    );
  }
}
