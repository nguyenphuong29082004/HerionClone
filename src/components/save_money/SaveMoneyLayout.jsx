import React from 'react'
import SaveMoneyIntro from './SaveMoneyIntro'
import SaveMoneyCotent from './SaveMoneyCotent'

function SaveMoneyLayout() {
  return (
    <div className='p-[40px]'>
        <SaveMoneyIntro/>
        <SaveMoneyCotent/>
    </div>
  )
}

export default SaveMoneyLayout