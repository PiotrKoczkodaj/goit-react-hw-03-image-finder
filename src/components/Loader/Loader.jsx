import { Component } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import styles from './Loader.module.css';

export class Loader extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className={styles.loader}>
        <MagnifyingGlass
          visible={loading}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
  }
}
