import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { state,modalOpen} = this.props;
    
    return (
      <>
        {state.arrayOfImages.map(image => (
          <li onClick={modalOpen} key={image.id} className={styles.item}>
            <img  className={styles.image} src={image.webformatURL} alt={image.tags} />
          </li>
        ))
       
        }
      </>
    );
  }
}
