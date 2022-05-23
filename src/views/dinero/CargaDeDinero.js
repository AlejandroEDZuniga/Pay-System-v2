import React, {useState } from "react";
import { CCard, CCardBody, CCol, CRow, CCardTitle, CCardText, CForm, CFormLabel, CFormInput, CButton  } from "@coreui/react";
import { useSelector, useDispatch } from "react-redux"
import { addMoney } from "../../redux/slices/dinero";

const CargaDeDinero = () => {
  const dispatch = useDispatch();

  // const [number, setNumber] = useState("");
  const [user, setUser] = useState("Alejandro Zuniga")
  const [value, setValue] = useState("")
  var money = useSelector((state) => state.money);
  

  // console.log("number", number)
  console.log("value",value)


  const suma = (e)=>{
    e.preventDefault();
    money = parseInt(money) + parseInt(value)
    console.log("soy money",money)
    // setState({money: money})
    dispatch(
      addMoney({
        money: money,
      })
    );
    setValue(e.value = "");
    
  }
 

  return (
    <CRow>
      <CCard style={{ width: "18rem" }}>
        <CCardBody>
          <CCardTitle>{user}</CCardTitle>
          <CCardText>
            Saldo disponible: ${money}
          </CCardText>
          <CForm className="row g-3">
            <CCol xs="auto">
              <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
                Email
              </CFormLabel>
            </CCol>
            <CCol xs="auto">
              <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
                Inserte monto a cargar
              </CFormLabel>
              <CFormInput
                type="number"
                id="inputPassword2"
                placeholder="Inserte monto a cargar"
                className="form-control"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </CCol>
            <CCol xs="auto">
              <CButton type="submit" className="mb-3" onClick={suma}>
                Confirma recarga
              </CButton>
            </CCol>
          </CForm>
        </CCardBody>
      </CCard>
    </CRow>
  );
};

export default CargaDeDinero;
