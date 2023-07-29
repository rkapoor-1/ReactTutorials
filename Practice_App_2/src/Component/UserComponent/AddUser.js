import React, { useState } from "react";
import styles from '../UserComponent/AddUser.module.css';
import Button from "../UI Component/button";
import Card from "../UI Component/Card";
import ErrorPopup from "../UI Component/ErrorPopup";


export default function User(props){
    const [error,setError]=useState(null)
    const [User,SetUser] = useState({
        userName:'',
        userAge:''
    });
    function onConfirmHandler(){
        setError(null);
    }
    function AddUser(event){
        event.stopPropagation();
        if (User.userName.trim().length===0 || User.userAge.trim().length===0){
            setError({
                title:'Error Occured',
                description:'Name/Age  cannot be blank',
                action:'Ok'
            })
            return ;
        }
        if(parseInt(User.userAge)<=1){
            setError({
                title:'Error Occured',
                description:'Age must be > 0',
                action:'Ok'
            })
            return ;
        }
        setError(null)
        props.AddUser(User);
        SetUser({userName:'',userAge:''})
    }
    

    function changeHandler(element,value){
        SetUser((prev)=>{return {...prev , [element]:value}})
    }
       
    return (
        <div>
           {error && <ErrorPopup title={error.title} description={error.description} action={error.action} onConfirm={onConfirmHandler}></ErrorPopup>}
        <Card cssClass={styles.input}>

        <label htmlFor="userName" id="userName" >Username</label>
        <input id="userName" value={User.userName} onChange={(event)=>{changeHandler('userName',event.target.value)}} type="text"/>
        <label htmlFor="userAge" id="userAge" >Age (Years)</label>
        <input id="userAge" type="number" onChange={(event)=>{changeHandler('userAge',event.target.value)}} value={User.userAge}/>
        <Button text="Add User" ClickHandler={AddUser}/>
       
         </Card>
    </div>);
}