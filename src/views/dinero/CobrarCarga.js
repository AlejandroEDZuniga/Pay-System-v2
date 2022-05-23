import React, { useState } from 'react'
import { CCard, CCardBody, CCol, CRow, CCardTitle, CCardText, CForm, CFormLabel, CFormInput, CButton  } from "@coreui/react";
import { useSelector, useDispatch } from "react-redux"
import { restMoney } from "../../redux/slices/dinero";

const CobrarCarga = () => {
  const [value, setValue] = useState("")
  var money = useSelector((state) => state.money);
  const dispatch = useDispatch();


  const resta = (e)=>{
    e.preventDefault();
    money = parseInt(money) - parseInt(value)
    console.log("soy money",money)
    // setState({money: money})
    dispatch(
      restMoney({
        money: money,
      })
    );
    setValue(e.value = "");
    
  }

  return (
    <CRow>
    <CCard style={{ width: "18rem" }}>
      <CCardBody>
        <CCardTitle>Nombre de Usuario</CCardTitle>
        <CCardTitle>Dinero disponible: $ {money}</CCardTitle>
        <CCardText>
          Cobrar 
        </CCardText>
        <CForm className="row g-3">
          <CCol xs="auto">
            <CFormLabel htmlFor="staticEmail2" className="visually-hidden">
              Email
            </CFormLabel>
          </CCol>
          <CCol xs="auto">
            <CFormLabel htmlFor="inputPassword2" className="visually-hidden">
              Inserte monto a cobrar
            </CFormLabel>
            <CFormInput
              type="number"
              id="inputPassword2"
              placeholder="Inserte monto a cobrar"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </CCol>
          <CCol xs="auto">
            <CButton type="submit" className="mb-3" onClick={resta}>
              Confirma cobro
            </CButton>
          </CCol>
        </CForm>
      </CCardBody>
    </CCard>
  </CRow>
  )
}

export default CobrarCarga
