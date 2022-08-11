import React from 'react';
import SearchResult from './search';
import Layout from '../components/layout/Layout';

    
// export function Layout({ Component, pageProps }) {
  
//   return Layout = Component.Layout || EmptyLayout;
// }
// const EmptyLayout = ({children}) => <>{children}</>;
// export default MyPage
const HomePage = () => {
  return (
    <Layout>
      <div><SearchResult /></div>
    </Layout>
  )
}

export default  HomePage;