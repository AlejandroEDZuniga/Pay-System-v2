import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import { contactReducer } from "../redux/slices/contactReducer";
import { authReducer } from "../redux/slices/authReducer";
import moneyReducer from "../redux/slices/dinero";
import { userReducer } from "./slices/userReducer";
import { loggedUserReducer } from "./slices/loggedUserReducer";
import { loginReducer } from "./slices/user";

// import { loggedUserReducer } from "../redux/slices/loggedUserReducer";
// import { usuariosReducer, loginReducer } from "../redux/slices/user";
// import { adminReducer } from "../redux/slices/adminReducer";
// import { tokenReducer } from "../redux/slices/user";




const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    // token: tokenReducer,
    loggedUser: loggedUserReducer,
    isLogIn: authReducer,
    // usuarios: usuariosReducer,
    login: loginReducer,
    // admin: adminReducer,
    money: moneyReducer,
  },
});

export default store;
