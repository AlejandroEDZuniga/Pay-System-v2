import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { contactReducer } from "../redux/slices/contactReducer";
import { authReducer } from "../redux/slices/authReducer";
// import { loggedUserReducer } from "../redux/slices/loggedUserReducer";
// import { usuariosReducer, loginReducer } from "../redux/slices/user";
// import { adminReducer } from "../redux/slices/adminReducer";
// import { tokenReducer } from "../redux/slices/user";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    // contact: contactReducer,
    // token: tokenReducer,
    // loggedUser: loggedUserReducer,
    isLogIn: authReducer,
    // usuarios: usuariosReducer,
    // login: loginReducer,
    // admin: adminReducer,
  },
});

export default store;
