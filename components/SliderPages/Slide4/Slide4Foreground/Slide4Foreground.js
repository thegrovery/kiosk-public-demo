/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide4Foreground({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.Slide4Foreground}>
      {/*<img src="/images/slide-2-asset.png" alt="" />*/}

      <div className={componentStyles.slideLayout}>
        
        <div className={componentStyles.slideLayoutRight}>
          {/*right side*/}
          <img className={componentStyles.imageAsset} src="/images/slide-4-background-asset.png" alt="" />
        </div>
        
        <div className={componentStyles.slideLayoutLeft}>
          {/*left side*/}    
          
          <div className={componentStyles.textElement}>
            <div className={componentStyles.triangle}></div>
            
            <div className={componentStyles.inner}>
              <ul>
                <li>
                  <strong>Generate excitement and initiate</strong> communications channels with your target audience prior to the show
                </li>
                <li>
                  <strong>Create active engagements with</strong> messages delivered to mobile devices 
                </li>
                <li>
                  <strong>Foster conversions through relevant</strong> post conference communications
                </li>
                <li>
                  <strong>Deliver ROI on your conference</strong> spend and associated activities
                </li>
              </ul>
            </div>
            
          </div>

        </div>

      </div>




    </div>
  )
}
