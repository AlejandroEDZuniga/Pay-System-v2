import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
import imagen from "../../assets/images/QR.jpeg";

const DatosDeUsuario = () => {
  // const [money, setMoney] = useState("money")
  const money = useSelector((state) => state.money);
  console.log("mone", money)

  return (
    <CRow className="userDetails">
      <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={imagen} />
        <CCardBody>
          <CCardTitle>Alejandro Zuniga</CCardTitle>
          <CCardText>
            Dinero disponible: $ {money}
          </CCardText>
          <CButton href="/#/carga">Cargar dinero</CButton>
        </CCardBody>
      </CCard>
    </CRow>
  );
};

export default DatosDeUsuario;
