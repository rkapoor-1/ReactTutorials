import React from "react";
import styles from './Results.module.css';


export default function Results(props){
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
       


    return (
        <table className={styles.result}>
        <thead >
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {props.items.map(item => { return (
                <tr key={item['year']}>
                <td>{item['year']}</td>
                <td>{formatter.format(item['savingsEndOfYear'])}</td>
                <td>{formatter.format(item['yearlyInterest'])} </td>
                <td>{formatter.format(item['savingsEndOfYear']-props.InitialInvestment - item['yearlyContribution']*item['year'])} </td>
                <td>{formatter.format(props.InitialInvestment+item['yearlyContribution']*item['year'])} </td>
              </tr>           
            )
            }
            )}
         
        </tbody>
      </table>
    );
}