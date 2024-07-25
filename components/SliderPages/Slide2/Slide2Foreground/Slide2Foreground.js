/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'
import Slide2Graphic from '@components/SVGComponents/Slide2Graphic'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

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
          <img className={componentStyles.imageAsset} src="/images/slide-2-phone-with-mouth.png" alt=""/>
          <div className={componentStyles.extraGraphic}><Slide2Graphic/></div>
        </div>
        
        <div className={componentStyles.slideLayoutLeft}>
          {/*left side*/}      
          <div className={componentStyles.textElement}>
            <div className={componentStyles.triangle}></div>
            <div className={componentStyles.inner}>
              <p>
                <strong>XpoConnect is a powerful &amp; integrated service offering that</strong> combines the strengths of The Grovery’s Digital Marketing and Brand Strategy expertise, along with strategic message development and graphic design to supercharge your trade show and conference presence.
              </p>
              <QRCodePreset link="https://thegrovery.com/xpoconnect?utm_source=kiosk_demo&utm_medium=qr_code_scan"/>
            </div>
          </div>

        </div>

      </div>

      

    </div>
  )
}
