import React, { useState } from "react";
import Header from "./Components/Header";
import NewInvestmentForm from "./Components/NewInvestmentForm";
import Results from "./Components/Results";


function App() {
  const [yearlyResult,setResult]=useState(null);
  let initialInvestment=0;
  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    let totalInterest = 0;


    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest:totalInterest
      });
    }
    setResult(yearlyData);
    initialInvestment = userInput['current-savings'];
    // do something with yearlyData ...
  };
  

  return (
    <div>
      <Header></Header>
      <NewInvestmentForm onSubmitted={calculateHandler}></NewInvestmentForm>
      {(yearlyResult!= null && yearlyResult.length) > 0 ?
      <Results items = {yearlyResult} InitialInvestment={initialInvestment}></Results>:<p style={{textAlign:"center"}}>No Investment Found</p>}
      

      

    </div>
  );
}

export default App;
