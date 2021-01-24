import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
    onMultiply: () => dispatch({ type: "MULTIPLY" }),
    onDivide: () => dispatch({ type: "DIVIDE" })
  });

const CounterComponent = ({ counter, onIncrement, onDecrement, onMultiply, onDivide}) => (
    <div>
    <h1>{counter}</h1>
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onMultiply}>*</button>
        <button onClick={onDivide}>/</button>
    </div>

 </div>
)
   


export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterComponent);