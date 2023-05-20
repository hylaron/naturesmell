import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css';
import Header from './pageComponents/Header/Header';
import Body from './pageComponents/Body/Body';
import SmallCatalog from './pageComponents/SmallCatalog/SmallCatalog'
import AboutWax from './pageComponents/AboutWax/AboutWax'
import Footer from './pageComponents/Footer/Footer';
import AboutProduct from './pageComponents/AboutProduct/AboutProduct';
import NotFound from './pageComponents/NotFound/NotFound';
import Catalog from './pageComponents/Catalog/Catalog';
import Product from './pageComponents/Catalog/Product/Product';
import AboutUs from './pageComponents/AboutUs/AboutUs';
import Blog from './pageComponents/Blog/Blog';

import LoginForm from './pageComponents/LoginForm/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Header />
      <Routes>
        {/* MAIN PAGE */}
        <Route key={0} path='/' element={
          [
            <Body />,
            <SmallCatalog title='Популярные товары:' />,
            <AboutWax title='Почему соевый воск?' />,
            <AboutProduct title='Качественный продукт' />
          ]
        } />
        {/* CATALOG PAGE */}
        <Route key={1} path='/catalog' element={
          [
            <Catalog />
          ]
        } />
        {/* CATALOG PRODUCT PAGE */}
        <Route key={2} path='/catalog/product/:id' element={
          [
            <Product />
          ]
        } />
        {/* ABOUT US PAGE */}
        <Route key={3} path='/about-us' element={
          [
            <AboutUs />
          ]
        } />
        {/* BLOG PAGE */}
        <Route key={4} path='/blog' element={
          [
            <Blog />
          ]
        } />
        {/* 404 PAGE */}
        <Route key={5} path='/*' element={<NotFound />} />
        
        <Route key={6} path='/login' element={<LoginForm />} />

      </Routes>
      <Footer />
    </Provider>
  </BrowserRouter>
);
