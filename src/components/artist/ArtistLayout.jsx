import React from 'react'
import ArtistIntro from './ArtistIntro'
import ArtistSwitcher from './ArtistSwitcher'
import EasyToUse from './EasyToUse'

function ArtistLayout() {
  return (
    <div>
        <ArtistIntro/>
        <ArtistSwitcher/>
        <EasyToUse/>
    </div>
  )
}

export default ArtistLayout