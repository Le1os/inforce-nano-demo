export const actionCreators = {
  addToList: data => ({ type: "ADD_TO_LIST", payload: data }),
  editItem: data => ({ type: "EDIT_ITEM", payload: data}),
  removeItem: data => ({ type: "REMOVE_ITEM", payload: data }),
  clearItems: () => ({ type: "CLEAR_ITEMS" })
};
