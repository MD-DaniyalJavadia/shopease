import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './Pages/Home/Home'
import MensLatest from './Pages/Home/MensLatest'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import WomenLatest from './Pages/Home/WomenLatest'
import ExploreAres from './Pages/Home/ExploreAres'
import SocialArea from './components/SocialArea'
import SubscribeArea from './components/SubscribeArea'
import About from './Pages/About/About'
import Team from './Pages/About/Team';
import OurServices from './Pages/About/OurServices';
import OurProducts from './pages/Products/OurProducts';
import LatestProducts from './pages/Products/LatestProducts';
import Singleproduct from './pages/Products/Singleproduct';
import BannerImg from './components/BannerImg';
import ContactForm from './pages/Contact/ContactForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <Home />
              <MensLatest />
              <WomenLatest />
              <ExploreAres />
              <SocialArea />
              <SubscribeArea />
            </>
          }></Route>
          <Route path='/about' element={
            <>
              <BannerImg title={"About Our Company"} />
              <About />
              <Team />
              <OurServices />
              <SubscribeArea />
            </>
          }></Route>
          <Route path='/products' element={
            <>
              <OurProducts title={"Check Our Products"} />
              <LatestProducts />
            </>
          }>
          </Route>

          <Route path='/single-product' element={
            <>
              <OurProducts title={"Single Product Page"} />
              <Singleproduct />
            </>
          }>
          </Route>
          <Route path='ContactUs' element={
            <>
              <BannerImg title={"Contact Us"} />
              <ContactForm />
            </>
          }>

          </Route>

        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
