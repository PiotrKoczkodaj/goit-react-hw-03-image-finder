import { Component } from 'react';

export class Loader extends Component {
  render() {
    const { loading } = this.props;
    console.log(loading);
    return <>{loading ? <p>Loading...</p> : <p>Loaded</p>}</>;
  }
}
