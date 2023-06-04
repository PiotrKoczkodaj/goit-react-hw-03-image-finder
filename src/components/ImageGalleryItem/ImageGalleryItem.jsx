import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { state } = this.props;
    console.log(state);
    return (
      <>
        {state.arrayOfImages.map(image => (
          <li key={image.id} className="gallery-item">
            <img src={image.largeImageURL} alt={image.tags} />
          </li>
        ))}
      </>
    );
  }
}
