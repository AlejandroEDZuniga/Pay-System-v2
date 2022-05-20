import React from "react";
import { CCard, CCardBody, CCardTitle, CCardText, CRow, CCardImage, CButton } from "@coreui/react";
import  imagen  from "../../assets/images/Example-QR-code.jpeg"


const MiQr = () => {

  return (
    <CRow className="qrContainer">
      <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={imagen} />
        <CCardBody>
          <CCardTitle>QR</CCardTitle>
          <CCardText>
            Si perdiste tu tarjeta fisica con tu código QR podes generarlo sin perder tu saldo.
          </CCardText>
          <CButton href="#">Generar nuevo QR</CButton>
        </CCardBody>
      </CCard>
    </CRow>
  );
};

export default MiQr;
