import react, {useReducer, useState} from "react";
import './App.css';


const reducer = (state, {type, payload}) =>{
  switch (type){
    case "INCREMENT" :{
      return state + payload;
    }
    case "DECREMENT": {
      return state-payload;
    }
    default: {
      console.log("type incorrect", type);
      return state;

    }
  }
}



function App() {
  const [counter, dispatch] = useReducer(reducer, 0);

  // need a state variable with initial value =  0;
  //  need a single place where this state changes can be monitored
  return (
    <div className="App">
  {/*<input type="text" value={counter.value} onchange={handleOnChange} />*/}

  Counter: {counter}
  <div>
  <button onClick={() => dispatch({type: "DECREMENT", payload:1})}>-</button>
  <button onClick={() => dispatch({type: "INCREMENT", payload:100})} >+</button>
  </div>
    </div>
  );
}

export default App;
