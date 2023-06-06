import { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const { state,foo} = this.props;
    
    return (
      <>
        {state.arrayOfImages.map(image => (
          <li onClick={foo} key={image.id} className={styles.item}>
            <img  className={styles.image} src={image.webformatURL} alt={image.tags} />
          </li>
        ))
       
        }
      </>
    );
  }
}
