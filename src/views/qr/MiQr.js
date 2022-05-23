import React from "react";
import { CCard, CCardBody, CCardTitle, CCardText, CRow, CCardImage, CButton } from "@coreui/react";
import  imagen  from "../../assets/images/QR.jpeg"
import { useSelector } from "react-redux";


const MiQr = () => {

  const money = useSelector((state) => state.money);
  return (
    <CRow className="qrContainer">
      <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={imagen} />
        <CCardBody>
          <CCardTitle>QR</CCardTitle>
          <CCardText>
            Si perdiste tu tarjeta fisica con tu código QR podes generarlo sin perder tu saldo.
          </CCardText>
          <CCardText>
            Saldo disponible: ${money}
          </CCardText>
          <CButton href="#">Generar nuevo QR</CButton>
        </CCardBody>
      </CCard>
    </CRow>
  );
};

export default MiQr;
