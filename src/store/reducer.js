import { useCallback } from "react";
import { isObjectBindingPattern } from "typescript";

const initialState = {
  items: []
};

const removeItemFromList = (array, action) => {
  return array.filter((item, index) => index !== action.payload);
};

const normalize = (obj) => {
  return {
    "id": obj.id,
    "imageUrl": obj.img ?? null ,
    "name": obj.name ?? 'ItemName',
    "count": obj.count ?? 1,
    "size": {
      "width": 200,
      "height": 200
    },
    "weight": obj.weight ?? 0,
    // "comments": ["CommentModel", "CommentModel"]
  }

}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
          ...state,
          items: [
            ...state.items,
            {
              value: normalize(
                { 
                  id: state.items.length === 0 ? 1 : state.items.slice(-1)[0].value.id += 1,
                  name: action.payload.name,
                  weight: action.payload.weight,
                  count: action.payload.count
                }),
              }
            ]
          };
    case "EDIT_ITEM":
      return {
        ...state,
          items: [
            state.items.map(
              (item) => item.id === action.payload.id ? { ...action.payload }
                                                      : item
            ),
          ]
        };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeItemFromList(state.items, action)
      };
    case "CLEAR_ITEMS": {
      return {
        items: []
      };
    }
    default:
      return state;
  }
};
