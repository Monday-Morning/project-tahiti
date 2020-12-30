import React from 'react';
import Campus from '../components/categories/Campus';
import Footer from '../components/marginals/Footer';
import Header from '../components/marginals/Header';
import TopBar from '../components/marginals/TopBar';

function Categories() {
  return (
    <div>
      <TopBar />
      <Header />

      <Campus />
      <Footer />
    </div>
  );
}

export default Categories;
