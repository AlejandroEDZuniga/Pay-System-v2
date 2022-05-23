import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpreadsheet,
  cilCamera,
  cilCheck,
  cilCursor,
  cilDescription,
  cilCash,
  cilLibrary,
  cilCalculator,
  cilCreditCard,
  cilContact,
  cilUser,
  cilQrCode,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Inicio',
    to: '/inicio',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Opciones',
  },
  {
    component: CNavItem,
    name: 'Inicio de Sesión',
    to: '/login',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Datos de Usuario',
    to: '/datos',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Mi QR',
    to: '/qr',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Escanear QR',
    to: '/dinero',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Dinero disponible',
    to: '/dinero',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Registro de Usuario',
    to: '/registro',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Transacciones',
    to: '/transacciones',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Carga de Dinero',
    to: '/carga',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cobrar carga',
    to: '/cobrar',
    icon: <CIcon icon={cilCamera} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Aprobaciones pendientes',
    to: '/aprobaciones',
    icon: <CIcon icon={cilCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Lista de Resellers',
    to: '/resellers',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Lista de Usuarios',
    to: '/usuarios',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Parte Contable',
    to: '/contable',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
]

export default _nav
