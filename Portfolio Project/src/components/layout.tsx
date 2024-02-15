import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

export default Layout;

// Add this to make it work with Next.js
export function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
}


