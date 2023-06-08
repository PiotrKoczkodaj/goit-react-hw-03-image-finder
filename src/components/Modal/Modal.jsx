import { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  render() {
    const { state, modalClose } = this.props;
    return (
      <div onClick={modalClose} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={state.imageSrcToModal} alt={state.tagsImagetoModal} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  state: PropTypes.object.isRequired,
  modalClose: PropTypes.func.isRequired,
};
