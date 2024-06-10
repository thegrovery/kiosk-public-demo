/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide3Background({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Slide3Background}>
    <div className={componentStyles.endPiece}></div>
      <img src="/images/slide-3-background-asset.png" alt="" />
    </div>
  )
}
