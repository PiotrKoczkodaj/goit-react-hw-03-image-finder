import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchData } from './Api';
import { prettyDOM } from '@testing-library/react';

export class App extends Component {
  state = {
    arrayOfImages: [],
    page: 1,
    quantityElements: 12,
    loading: false,
    inputValuee: '',
    open: false,
    imageSrcToModal: '',
    tagsImageToModal: '',
  };

  componentWillUnmount() {
    document.addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        this.setState({ open: false });
      }
    });
  }

  settingInputValue = e => {
    this.setState({ inputValuee: e.target.value });
    this.setState(prevState => {
      return { inputValuee: prevState.inputValuee };
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target[1].value;
    let page = this.state.page;
    let quantityElements = this.state.quantityElements;

    fetchData(inputValue, page, quantityElements).then(resp => {
      if (inputValue === '') {
        return null;
      }
      this.setState({ arrayOfImages: [...resp.data.hits] });
    });

    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  };

  pagination = () => {
    
    let inputValue = this.state.inputValuee;
    let page = this.state.page;
    let quantityElements = this.state.quantityElements;
    this.setState({ quantityElements: quantityElements + 12 });
    this.setState(prevState => {
      quantityElements = prevState.quantityElements;
      fetchData(inputValue, page, quantityElements).then(resp => {
        this.setState({ arrayOfImages: [...resp.data.hits] });
      });
    });
  };
  modalOpen = e => {
    this.setState({
      imageSrcToModal: e.target.src,
      tagsImageToModal: e.target.alt,
      open: true,
    });
  };
  modalClose = e => {
    console.log(e);
    this.setState({ open: false });
  };
  render() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar
          submit={this.handleSubmit}
          inputValue={this.settingInputValue}
        />
        <ImageGallery>
          <ImageGalleryItem state={this.state} modalOpen={this.modalOpen} />
        </ImageGallery>
        {this.state.arrayOfImages.length === 0 ? null : (
          <Button state={this.state} pagination={this.pagination} />
        )}
        <Loader loading={this.state.loading} />
        {!this.state.open ? null : (
          <Modal state={this.state} modalClose={this.modalClose} />
        )}
      </div>
    );
  }
}
