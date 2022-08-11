// import '../styles/globals.css's
// import 'carbon-components/css/carbon-components.min.css'
// import AppProps from 'next/app'
// import { React } from 'react' 
// import Home from '.'

// function MyApp({ Component, pageProps }) {

//   // const Layout = Component.Layout || De;

//   return <div className="container"> 
//         <link rel="stylesheet" href="https://unpkg.com/carbon-grid/dist/css/carbon-grid.css"></link>
//         <Component {...pageProps} />
//       </div>

// }

// // const EmptyLayout = ({ children }) => <>{children}</>

// export default MyApp

import '../styles/globals.css'
import 'carbon-components/css/carbon-components.min.css'
import { AuthProvider } from './contexts/auth';
import PrivateRoute from './home/PrivateRoute/PrivateRoute';
import { SessionProvider } from "next-auth/react"

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}) {
  return (
    <AuthProvider>
       <PrivateRoute>
         <SessionProvider>
           <Component {...pageProps} />
        </SessionProvider>
       </PrivateRoute>
    </AuthProvider>
    
  )
}