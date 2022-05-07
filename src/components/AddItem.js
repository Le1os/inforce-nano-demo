import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [weight, setWeight] = useState("");
  const [count, setCount] = useState("");

  const handleItemNameChange = event => setInput(event.target.value);

  const handleItemWeightChange = event => setWeight(event.target.value);

  const handleItemCountChange = event => setCount(event.target.value);


  const handleSubmit = () => {
    dispatch(actionCreators.addToList(
      {
        name: input,
        weight: weight,
        count: count
      }
    ));
    setInput("");
    setWeight("");
    setCount("");
  };

  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };


  return (
    <div>
      <input
        className="input"
        placeholder="Add item name..."
        value={input}
        onChange={handleItemNameChange}
      />
      <input
        className="input"
        placeholder="Add item weight..."
        value={weight}
        onChange={handleItemWeightChange}
      />
      <input
        className="input"
        placeholder="Add item count..."
        value={count}
        onChange={handleItemCountChange}
      />
      <br/> <br/>
      <Button className="button" variant="outline-dark" onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
}
