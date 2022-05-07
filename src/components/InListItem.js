import React, { useState } from "react";
import { ListGroup, Button, Modal, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function InListItem({ item, index }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(item.value.name);
  const [weight, setWeight] = useState(item.value.weight);
  const [count, setCount] = useState(item.value.count);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow  = () => setShow(true);
  
  const handleItemNameChange = event => setName(event.target.value);

  const handleItemWeightChange = event => setWeight(event.target.value);
  
  const handleItemCountChange = event => setCount(event.target.value);

  const changeItem = () => {
    dispatch(actionCreators.editItem({
      id: item.value.id,
      name: name,
      weight: weight,
      count: count
    }));
  };


  return (
    <ListGroup.Item
      key={index}
      variant="danger"
    >
      
      Name - {item.value.name}
      <br/>
      Weight - {item.value.weight}
      <br/>
      Count - {item.value.count}
      <br/>

      <Button className="button" variant="outline-dark"
      onClick={handleShow}
      >Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>

        
        <Modal.Body>

        <input
          className="input"
          placeholder="Change item name..."
          value={name}
          onChange={handleItemNameChange}
        />
        <input
          className="input"
          placeholder="Change item weight..."
          value={weight}
          onChange={handleItemWeightChange}
        />
        <input
          className="input"
          placeholder="Change item count..."
          value={count}
          onChange={handleItemCountChange}
        />

        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={changeItem && handleClose}>
            Save Item
          </Button>
        </Modal.Footer>
      </Modal>
    </ListGroup.Item>
  );
}
