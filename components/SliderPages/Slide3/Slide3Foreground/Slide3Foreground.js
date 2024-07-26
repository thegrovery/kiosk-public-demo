/*===== Components =====*/
import React from "react"
import Link from 'next/link'

import Slide3Graphic from '@components/SVGComponents/Slide3Graphic'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide3Foreground({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Slide3Foreground}>
      {/*<img src="/images/slide-2-asset.png" alt="" />*/}

      <div className={componentStyles.slideLayout}>
        
        <div className={componentStyles.slideLayoutRight}>
          {/*right side*/}
          <img className={componentStyles.imageAsset} src="/images/slide-3-woman-lightbulb.png" alt="" />
          <div className={componentStyles.extraGraphic}><Slide3Graphic/></div>
        </div>
        
        <div className={componentStyles.slideLayoutLeft}>
          {/*left side*/}  
          <div className={componentStyles.textElement}>
            <div className={componentStyles.triangle}></div>
            <div className={componentStyles.inner}>
              <p>
                <strong>The Grovery's comprehensive event activation and support services are designed to empower partners with impactful and dynamic</strong> presences at industry trade shows and conferences. Leveraging our full suite of brand strategy and digital media and marketing services, we craft pre- , during, and post- conference engagements that drive meaningful connections, generate leads, and convert prospects into loyal customers.
              </p>
              <br/>
              <a
                className={componentStyles.button}
                data-modal-open="VideoModal"
                data-modal-iframe="https://www.youtube.com/embed/nM4okRvCg2g?si=kl5BtiGt_MEKVE9r"
              >Open Video</a>
            </div>
            
          </div>      
        </div>

      </div>

      

    </div>
  )
}
