/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide1Foreground({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Slide1Foreground}>
      
      <div className={componentStyles.text}>
        <p><strong>Supercharge your trade show</strong> plus conference presence with Xpo Connect.</p>
      </div>

      <img src="/images/slide-1-asset.png" alt="" />

    </div>
  )
}
