import { createSlice } from "@reduxjs/toolkit";

export const sidebarShow = createSlice({
    initialState : {
        sidebarShow: true,
      },
  reducers: {
    changeState: (state, action) => {
      const newValue = {
        sidebarShow: false,
      };
      return sidebarShow
    },
  },
});





export const { changeState} = sidebarShow.actions;
export default sidebarShow.reducer;
