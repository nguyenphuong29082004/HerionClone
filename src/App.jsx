import { useState } from 'react'
import React from 'react'

import './App.css'
import HomepageLayout from './components/homepage/HomePageLayout'
import DiscographyLayout from './components/discography/DiscographyLayout'
import ArtistLayout from './components/artist/ArtistLayout'

function App() {

  return (
    <>
      <HomepageLayout/>
      <DiscographyLayout/>
      <ArtistLayout/>
      

    </>
  )
}

export default App
