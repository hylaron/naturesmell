// AddToCart // Получает объект item, который будет добавлен в state в payload. 
// Чтобы добавить товар, мы сначала проверяем, существует ли он уже с помощью метода find; 
// если он существует, мы увеличиваем его количество, но если нет, мы добавляем его в состояние с 
// помощью метода push.

// incrementQuantity // Получает ID элемента в payload, используемый для поиска
// элемента в state с помощью метода find, а затем увеличивает 
// его количество на 1.

// decrementQuantity // Этот редуктор получает ID элемента в payload. 
// Используя ID, мы находим и уменьшаем количество товара в state только тогда, 
// когда его количество больше 1.

// removeItem // Получает ID элемента в payload, которая затем 
// используется для удаления из состояния с помощью метода filter. 

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;