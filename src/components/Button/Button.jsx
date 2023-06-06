import { Component } from "react";
import styles from './Button.module.css'
export class Button extends Component{

    render() {
        const { pagination } = this.props;
        return (
            <button className={styles.Button} onClick={pagination}>Load More</button>
    )
}

}