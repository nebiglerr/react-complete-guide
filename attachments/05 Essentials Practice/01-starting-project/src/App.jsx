import { useState } from "react";
import Header from "./component/Header.jsx";
import UserInput from "./component/UserInput.jsx";
import Result from "./component/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue ) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput}  onChange={handleChange}/>
      <Result input={userInput}/>
    </>
  );
}

export default App;
