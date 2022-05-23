import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";


// const getContacts = createAsyncThunk("GET_CONTACTS", () => {
//   return axios
//     .get("/api/members")
//     .then((res) => res.data)
//     .then((contact) => contact)
//     .catch((error) => message.error(`Error: ${error.message}`, 5));
// });

const addUser = createAsyncThunk("ADD_USER", (data) => {
  return axios
    .post("/api/user/add", {
      
      name: data.name,
      email: data.email,
      number: data.number,
      qr: data.qr,
      money: data.money,

    })
    .then((req) => req.body)
    .then((user) => user)
    .catch((error) => message.error(`Error: ${error.message}`, 5));
});

// const deleteContact = createAsyncThunk("DELETE_CONTACT", ({ id }) => {
//   return axios.delete(`api/members/${id}`).then((req) => req.body);
// });

// const editContact = createAsyncThunk("PUT_USER", (data) => {
//   const { name, email, id, number, status } = data;
//   console.log("la data", data);
//   return axios
//     .put(`/api/members/${id}`, {name, email, number, status})
//     .then((req) => req.body)
//     .then((contact) => contact)
//     .catch((error) => message.error(`Error: ${error.message}`, 5));
// });

const userReducer = createReducer([], {
  // [getContacts.fulfilled]: (state, action) => action.payload,

  [addUser.fulfilled]: (state, action) => action.payload,

  // [deleteContact.fulfilled]: (state, action) => action.payload,

  // [editContact.fulfilled]: (state, action) => action.payload,
});

export { userReducer, addUser };
