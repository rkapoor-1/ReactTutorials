import React, { useState } from "react"; 
import styles from './NewInvestmentForm.module.css'

export default function NewInvestmentForm(props){
    const [UserInput,SetUserInput]= useState({
        "current-savings":10000,
        "yearly-contribution":1200,
        "expected-return":7,
        duration:10

    })
    function CurrentSavingsChangeHandler(event){
        SetUserInput((prev)=>{return {...prev,"current-savings":parseInt(event.target.value)}})
    }
    function DurationChangeHandler(event){
        SetUserInput((prev)=>{return {...prev,duration:parseInt(event.target.value)}})
    }
    function YearlySavingsChangeHandler(event){
        SetUserInput((prev)=>{return {...prev,"yearly-contribution":parseInt(event.target.value)}})
    }
    function ExpectedReturnChangeHandler(event){
        SetUserInput((prev)=>{return {...prev,"expected-return":parseInt(event.target.value)}})
    }
    function FormSubmitHandler(event){
      event.preventDefault();
        props.onSubmitted(UserInput);
    }
    function ResetHandler(){
        SetUserInput({
          "current-savings":10000,
          "yearly-contribution":1200,
          "expected-return":7,
          duration:10
  
      })
    }
    return (
        <form className={styles.form} onSubmit={FormSubmitHandler}>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={UserInput["current-savings"]} onChange={CurrentSavingsChangeHandler} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number"  value={UserInput["yearly-contribution"]} onChange={YearlySavingsChangeHandler}  id="yearly-contribution" />
          </p>
        </div>
        <div className={styles['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" value={UserInput["expected-return"]} onChange={ExpectedReturnChangeHandler} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={UserInput.duration} onChange={DurationChangeHandler}  />
          </p>
        </div>
        <p className={styles['actions']}>
          <button type="reset" onClick={ResetHandler} className={styles.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={styles.button} >
            Calculate
          </button>
        </p>
      </form>
    );

}