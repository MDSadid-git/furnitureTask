import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the slice
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

// Create the slice using the createSlice function from Redux Toolkit
const cartSlice = createSlice({
  name: "cart", // The name of the slice
  initialState, // The initial state object
  reducers: {
    addItem: (state, action) => {
      // Get the new item from the action payload
      const newItem = action.payload;

      // Check if the item is already in the cart
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      // If the item is not in the cart, add it
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        // If the item is already in the cart, increase its quantity and update its total price
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      // Update the total quantity and total amount
      state.totalQuantity++;
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0 // The initial value of the total amount
      );

      // Log the current state to the console for debugging
    },
  },
});

// Export the action creators and the reducer function
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
