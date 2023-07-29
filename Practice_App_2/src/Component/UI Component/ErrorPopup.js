import React from "react";
import Card from "./Card";
import Button from "./button";
import styles from './ErrorPopup.module.css';

export default function ErrorPopup(props){
    return(
        <Card>
            <div className={styles.backdrop} onClick={props.onConfirm}>
            <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p> {props.description} </p>
            </div>
            <footer className={styles.footer}>
                <Button text={props.action} onClick={props.onConfirm}></Button>
            </footer>
        </Card>
    </div>
        </Card>);
}