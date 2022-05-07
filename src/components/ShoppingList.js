import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { InListItem, InBasketItem } from ".";

export default function ShoppingList() {
  const items = useSelector(state => state.items);

  return (
    <ListGroup className="m-4" variant="flush">
      {items.map((item, index) => {
        return <InListItem item={item} index={index} />
        // item.inBasket ? (
        //   <InBasketItem item={item} index={index} />
        // ) : 
        
        // (
        // );
      })}
    </ListGroup>
  );
}
