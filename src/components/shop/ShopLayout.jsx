import React from 'react'
import ShopIntro from './ShopIntro'
import ShopTemplateGrid from './ShopTemplateGrid'
import FeatureHighlights from './FeatureHighlights'
import MusicTheme from './MusicTheme'

function ShopLayout() {
  return (
    <div>
        <ShopIntro/>
        <ShopTemplateGrid/>
        <FeatureHighlights/>
        <MusicTheme/>
    </div>
  )
}

export default ShopLayout