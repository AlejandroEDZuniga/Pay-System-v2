import React from 'react'
import { CCard, CCardBody, CCol, CRow, CCardTitle, CCardText, CForm, CFormLabel, CFormInput, CButton  } from "@coreui/react";

const CobrarCarga = () => {

  return (
    <CRow>
    <CCard style={{ width: "18rem" }}>
      <CCardBody>
        <CCardTitle>Nombre de Usuario</CCardTitle>
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
            />
          </CCol>
          <CCol xs="auto">
            <CButton type="submit" className="mb-3">
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
