import { Component } from 'react';
import styles from './Modal.module.css';



export class Modal extends Component {
  render() {
    const { state } = this.props;
    
    return (
     
      
      <div className={styles.Overlay}>
        
          <div className={styles.Modal}>
    <img src={state.imageSrcToModal} alt="dasdad" />
  </div>
  
</div>
      
    );
  }
}
