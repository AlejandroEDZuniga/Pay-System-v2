import React from "react";
import { CCard, CCardBody, CCardImage, CCardTitle, CRow, CCardText, CButton } from "@coreui/react";
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from "@coreui/react-chartjs";
// import { DocsCallout } from "../components";
import imagen from "../../assets/images/Example-QR-code.jpeg";

const DatosDeUsuario = () => {
  const random = () => Math.round(Math.random() * 100);

  return (
    <CRow className="userDetails">
      <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={imagen} />
        <CCardBody>
          <CCardTitle>Nombre de Usuario</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CCardText>
          <CButton href="/#/carga">Cargar dinero</CButton>
        </CCardBody>
      </CCard>
    </CRow>
  );
};

export default DatosDeUsuario;
