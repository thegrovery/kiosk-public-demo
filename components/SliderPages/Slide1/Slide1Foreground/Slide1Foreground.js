/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import pageStyles from '@styles/pages.module.scss'

export default function Slide1Foreground({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Slide1Foreground}>
      <div className={componentStyles.slideLayout}>
        
        <div className={componentStyles.slideLayoutRight}>
          <div className={componentStyles.text}>
            <p><strong>Supercharge your trade show</strong> plus conference presence with Xpo Connect.</p>
          </div>
        </div>
        
        <div className={componentStyles.slideLayoutLeft}>
          <img src="/images/slide-1-background-asset.png" alt="" />         
        </div>

      </div>
    </div>
  )
}
