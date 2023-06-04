import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { state } = this.props;
    console.log(state);
    return (
      <>
        {state.arrayOfImages.map(image => (
          <li key={image.id} className={styles.ImageGalleryItem}>
            <img className={styles.ImageGalleryItem} src={image.largeImageURL} alt={image.tags} />
          </li>
        ))}
      </>
    );
  }
}
