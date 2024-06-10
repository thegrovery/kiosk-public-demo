/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide4Background({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Slide4Background}>
    <div className={componentStyles.endPiece}></div>
      <img src="/images/slide-4-background-asset.png" alt="" />
    </div>
  )
}
