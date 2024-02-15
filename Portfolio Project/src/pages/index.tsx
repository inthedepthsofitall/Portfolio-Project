import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/index.module.css';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> & {
  getLayout: (page: React.ReactElement) => React.ReactNode;
} = () => {
  return (
    <div className={styles.container}>
      
      <h1>My Portfolio Website</h1>
      
    </div>
  );
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;









// import React, { ReactNode } from 'react';
// import Navbar from './Navbar';

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => (
//   <>
//     <Navbar />
//     <div>{children}</div>
//   </>
// );

// export default Layout;

// export function getLayout(page: React.ReactElement) {
//   return <Layout>{page}</Layout>;
// }


// import type { ReactElement } from 'react'
// import Layout from '../components/layout'

// import type { NextPageWithLayout } from '../pages/_app'
 
// const Page: NextPageWithLayout = () => {
//   return <p>My Portfolio Website</p>
// }
 
// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//     {page}
//     </Layout>
//   )
// }
 
// export default Page


// import React from 'react';
// import Layout from '../components/layout';
// import styles from '../components/index.module.css';

// const HomePage: React.FC = () => {
//   return (
//     <Layout>
//       <div className={styles.container}>
//         <h1>Welcome to My Portfolio Website!!!</h1>
//         {/* Add more content in due time */}
//       </div>
//     </Layout>
//   );
// };

// export default HomePage;