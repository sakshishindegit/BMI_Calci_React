import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e)=>{
    e.preventDefault();

    if(weight===0 || height ===0){
      alert("Please enter a valid weight and height")
    }

    else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMessage("you are underweight")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("you are a healthy weight")
      }
      else{
        setMessage("you are overweight")
      }
    }
  }


let reload= ()=>{
  window.location.reload();
}



  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(ibs)</label>
            <input
              type="text"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e)=> setWeight(e.target.value)}
            ></input>
          </div>

          <div>
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter height"
              value={height}
              onChange={(e)=> setHeight(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>

          <div className="center">
            <h3>your BMI is :{bmi}</h3>
            <h4>{message}</h4>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
