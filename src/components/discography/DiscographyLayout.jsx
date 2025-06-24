import React from 'react'
import DemoImport from './DemoImport'
import ReleaseIntro from "./ReleaseIntro"
import ReleaseSwitcher from "./ReleaseSwitcher"
function DiscographyLayout() {
  return (
    <div>
        <ReleaseIntro/>
        <ReleaseSwitcher/>
        <DemoImport/>
    </div>
  )
}

export default DiscographyLayout