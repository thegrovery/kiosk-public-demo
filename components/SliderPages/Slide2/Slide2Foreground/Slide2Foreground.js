/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide2Foreground({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Slide2Foreground}>

      <div className={componentStyles.slideLayout}>
        
        <div className={componentStyles.slideLayoutRight}>
          {/*right side*/}
          <img src="/images/slide-2-background-asset.png" alt=""/>
        </div>
        
        <div className={componentStyles.slideLayoutLeft}>
          {/*left side*/}      
          <div className={componentStyles.textElement}>
            <div className={componentStyles.triangle}></div>
            <div className={componentStyles.inner}>
              <p>
                <strong>XpoConnect is a powerful &amp; integrated service offering that</strong> combines the strengths of The Grovery’s Digital Marketing and Brand Strategy expertise, along with strategic message development and graphic design to supercharge your trade show and conference presence.
              </p>
            </div>
          </div>

        </div>

      </div>

      

    </div>
  )
}
