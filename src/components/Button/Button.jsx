import { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { pagination } = this.props;
    return (
      <button className={styles.Button} onClick={pagination}>
        Load More
      </button>
    );
  }
}
Button.propTypes = {
  pagination: PropTypes.func.isRequired,
};
