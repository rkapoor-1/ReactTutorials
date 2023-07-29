import React from "react";

import styles from './button.module.css';

export default function Button(props){

    return(<button onClick={props.ClickHandler} className={styles.button}>{props.text}</button>);
}