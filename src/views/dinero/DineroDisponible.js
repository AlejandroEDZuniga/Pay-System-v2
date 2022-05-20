import React from "react";
import { CCard, CCardBody, CCardTitle, CCardSubtitle, CRow, CCardLink, CCardText } from "@coreui/react";

const DineroDisponible = () => {
  const random = () => Math.round(Math.random() * 100);

  return (
    <CRow>
      <CCard style={{ width: "18rem" }}>
        <CCardBody>
          <CCardTitle>$1000</CCardTitle>
          <CCardSubtitle className="mb-2 text-medium-emphasis">
            Dinero disponible
          </CCardSubtitle>
          <CCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CCardText>
          <CCardLink href="/#/carga">Recargar saldo</CCardLink>
          <CCardLink href="/#/datos">Mis datos de usuario</CCardLink>
        </CCardBody>
      </CCard>
    </CRow>
  );
};

export default DineroDisponible;
