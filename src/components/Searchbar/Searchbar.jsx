import { Component } from "react";
import styles from './Searchbar.module.css';

export class Searchbar extends Component{

  render() {
     const {submit}=this.props
        return (
            <header className={styles.Searchbar}>
  <form className={styles.form} onSubmit={submit}>
    <button type="submit" className={styles.button} >
      <span className={styles.btnLabel}>Search</span>
    </button>

              <input
                
      className={styles.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}