import { useState } from 'react'
import React from 'react'

import './App.css'
import HomepageLayout from './components/homepage/HomePageLayout'
import DiscographyLayout from './components/discography/DiscographyLayout'
import ArtistLayout from './components/artist/ArtistLayout'
import ShopLayout from './components/shop/ShopLayout'
import SaveMoneyLayout from './components/save_money/SaveMoneyLayout'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
      <HomepageLayout/>
      <DiscographyLayout/>
      <ArtistLayout/>
      <ShopLayout/>
      <SaveMoneyLayout/>
      <Footer/>
      
      

    </>
  )
}

export default App
