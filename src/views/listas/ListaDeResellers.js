import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CRow, CTableBody, CTableDataCell } from "@coreui/react";

const ListaDeResellers = () => {

  return (
    <CRow className="transaccionesBody">
      <CTable>
        <CTableHead>
          <CTableRow className="items">
            <CTableHeaderCell className="items" scope="col">#</CTableHeaderCell>
            <CTableHeaderCell className="items" scope="col">Class</CTableHeaderCell>
            <CTableHeaderCell className="items" scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell className="items" scope="col">Heading</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell className="items" scope="row">1</CTableHeaderCell>
            <CTableDataCell className="items">Mark</CTableDataCell>
            <CTableDataCell className="items">Otto</CTableDataCell>
            <CTableDataCell className="items">@mdo</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell className="items" scope="row">2</CTableHeaderCell>
            <CTableDataCell className="items">Jacob</CTableDataCell>
            <CTableDataCell className="items">Thornton</CTableDataCell>
            <CTableDataCell className="items">@fat</CTableDataCell>
          </CTableRow>
          <CTableRow>
          <CTableHeaderCell className="items" scope="row">3</CTableHeaderCell>
            <CTableDataCell className="items">Juan</CTableDataCell>
            <CTableDataCell className="items">Jose</CTableDataCell>
            <CTableDataCell className="items">@fat</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CRow>
  )
}

export default ListaDeResellers
