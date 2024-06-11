/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import pageStyles from '@styles/pages.module.scss'

export default function Slide2Background({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Slide2Background}>
      
      <div 
        className={pageStyles.slideEndPiece} 
        data-direction="down"
        data-color="midBlue"
      ></div>

      <img src="/images/slide-2-background-asset.png" alt="" />
    </div>
  )
}
