import React from 'react';
import Layout from '../../components/layout';
import styles from '../components/index.module.css';

const HomePage: React.FC = () => {
  return (
     <Layout>
      <div className={styles.container}>
        <h1>Welcome to My Portfolio Website!!!</h1>
        {/* Add more content in due time */}
      </div>
      </Layout> 
  );
};

export default HomePage;

