import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserVoid } from "../../../redux/slices/loggedUserReducer";
import { useNavigate } from "react-router-dom";
import {
  setLogginTrue,
  setLogginFalse,
} from "../../../redux/slices/authReducer";
// import { getContacts } from "../../../redux/slices/contactReducer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";

const Login = (props) => {
  const isLogIn = useSelector((state) => state.isLogIn);
  const dispatch = useDispatch();
  const [value, setValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const user = useSelector((state) => state.loggedUser);

  const onChange = ({ target }) => {
    setValue((value) => {
      return {
        ...value,
        [target.name]: target.value,
      };
    });
  };
  console.log("value this", value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("target", e.target);
    axios

      .post("/api/auth/login", value)
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("paysystem", `Bearer ${data.token}`);
        dispatch(setLogginTrue());
        dispatch(setUser());
        navigate("/");
      })
      .catch((err) => {
        toast.error("Usuario y/o Contraseña incorrectos");
        dispatch(setLogginFalse());
      });
    console.log("va", value);
    // navigate("/");
  };
  function logOut() {
    localStorage.removeItem("paysystem");
    dispatch(setUserVoid());
  }
  return (
    <div className="divCont">
      <CContainer>
        {!isLogIn ? (
          <h2>Inicio de sesión</h2>
        ) : (
          <h2 className="mt-4">Hola, has iniciado sesión como: {user.name}</h2>
        )}

        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    {!isLogIn ? (
                      <div>
                        <h1>Inicio de Sesión</h1>
                        <p className="text-medium-emphasis">
                          Inicia sesión con tu cuenta
                        </p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput
                            placeholder="Correo electrónico"
                            onChange={onChange}
                            name="email"
                            className="input"
                            type="text"
                          />
                        </CInputGroup>
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="Contraseña"
                            onChange={onChange}
                            name="password"
                            className="input"
                          />
                        </CInputGroup>
                      </div>
                    ) : null}
                    <CRow>
                      <CCol xs={6}>
                        {!isLogIn ? (
                          <CButton
                            color="primary"
                            className="px-4"
                            onClick={onSubmit}
                          >
                            Iniciar
                          </CButton>
                        ) : (
                          <button
                            className="px-4"
                            color="warning"
                            onClick={logOut}
                          >
                            Cerrar sesión
                          </button>
                        )}
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Olvidaste tu contraseña?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>

              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "100%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Registrarse</h2>
                    <p>
                      Registrate para poder disfrutar de los beneficios de
                      nuestro evento.
                    </p>
                    <Link to="/registro">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Registrarme ahora!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
