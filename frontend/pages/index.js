// import React, { useEffect,useState } from "react"
// import Router from 'next/router'
// import Login from './login'

// // import styles from '../node_modules/carbon-components-react/umd/carbon-components-react.min.js'


// export default function Home() {
//   const [loaded,setLoaded] = useState(false)
//     useEffect(() => {
//         const {pathname} = Router
//         // conditional redirect
//         if(pathname == '/' ){
//             // with router.push the page may be added to history
//             // the browser on history back will  go back to this page and then forward again to the redirected page
//             // you can prevent this behaviour using location.replace
//             Router.push('/login')
//            //location.replace("/hello-nextjs")
//         }else{
//             setLoaded(false)
//         }
//       },[]);
//     return ( <div></div>
//     //   <Layout>
//     //     <Login/>
//     // </Layout>
//     )
// }

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getProviders, getSession, useSession } from 'next-auth/react'
import Login from './login'
import { useRouter } from "next/dist/client/router";
import HomePage from './home';
import { useAuth } from './contexts/auth';


export default function Home() {
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuth();
  console.log(isAuthenticated);


  return (
    <div className={styles.container}>
      <Head>
        <title> Aceuni </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <main>
         {isAuthenticated ? <HomePage /> : <Login />}
      </main>
    </div>
  )
}
