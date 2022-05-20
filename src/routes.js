import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const DatosDeUsuario = React.lazy(() => import('./views/charts/DatosDeUsuario'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Registro = React.lazy(() => import('./views/pages/register/Register'))
const MiQr = React.lazy(() => import('./views/qr/MiQr'))
const DineroDisponible = React.lazy(() => import('./views/dinero/DineroDisponible'))
const Transacciones = React.lazy(() => import('./views/transacciones/Transacciones'))
const CargaDeDinero = React.lazy(() => import('./views/dinero/CargaDeDinero'))
const CobrarCarga = React.lazy(() => import('./views/dinero/CobrarCarga'))
const Aprobaciones = React.lazy(() => import('./views/aprobaciones/Aprobaciones'))
const ListaDeResellers = React.lazy(() => import('./views/listas/ListaDeResellers'))
const ListaDeUsuarios = React.lazy(() => import('./views/listas/ListaDeUsuarios'))
const ParteContable = React.lazy(() => import('./views/dinero/ParteContable'))

const routes = [
  { path: '/', exact: true, name: 'Inicio' },
  { path: '/inicio', name: 'Inicio', element: Dashboard },
  { path: '/login', name: 'Inicio de Sesion', element: Login },
  { path: '/registro', name: 'Registro', element: Registro },
  { path: '/qr', name: 'Mi QR', element: MiQr },
  { path: '/dinero', name: 'Dinero disponible', element: DineroDisponible },
  { path: '/transacciones', name: 'Transacciones', element: Transacciones},
  { path: '/carga', name: 'Carga de dinero', element: CargaDeDinero },
  { path: '/cobrar', name: 'Cobrar carga', element: CobrarCarga },
  { path: '/aprobaciones', name: 'Aprobaciones', element: Aprobaciones },
  { path: '/resellers', name: 'Resellers', element: ListaDeResellers },
  { path: '/usuarios', name: 'Usuarios', element: ListaDeUsuarios },
  { path: '/contable', name: 'Contable', element: ParteContable },
  { path: '/datos', name: 'Datos', element: DatosDeUsuario },
]

export default routes
