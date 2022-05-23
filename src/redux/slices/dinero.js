import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState:"500",
  reducers: {
    addMoney: (state, action) => {
      const newValue = {
        money: action.payload.money,
      };
      return parseInt(newValue.money)
    },
    restMoney:(state, action) => {
      const newValue = {
        money: action.payload.money,
      };
      return parseInt(newValue.money)
    },
  },
});



export const { addMoney, restMoney, deleteItem, deleteAllTasks } = moneySlice.actions;
export default moneySlice.reducer;
