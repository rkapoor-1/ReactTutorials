import React from "react";  

import styles from './UserList.module.css';
import Card from "../UI Component/Card";


export default function UserList(props){
    return (
        <Card cssClass={styles.users}>       
        <ul>
        {props.userList.length >0 ? 
            props.userList.map((item)=>{return <li>{item.userName} is {item.userAge} years old</li>}):
            <li>No Data Found</li>}
        </ul>
        </Card>
);

}