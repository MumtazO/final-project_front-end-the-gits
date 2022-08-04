// pages/_app.js
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Layout } from '../components/Layout';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}