/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Slide5Foreground({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);
  useEffect(() => {

   

  })
  

  return (
    <div className={componentStyles.Slide5Foreground}>
      <div className={componentStyles.slideLayout}>
        
        <div className={componentStyles.slideLayoutRight}>
          {/*right side*/}
          <img className={componentStyles.imageAsset} src="/images/slide-5-background-asset.png" alt="" />
        </div>
        
        <div className={componentStyles.slideLayoutLeft}>
          {/*left side*/}   
          <div className={componentStyles.textElement}>

            <div className={componentStyles.inner}>
              <h2>Ready to Grow?</h2>
              <p>
                Elevate your conference engagements to new heights with The Grovery's XpoConnect, a strategic, streamlined, and results-driven solution for your events.
              </p>
              <a
                id="ContactModalOpen" 
                className={componentStyles.button}
                data-modal-open='support'
              >Contact Us</a>
            </div>
            
          </div>

        </div>
      </div>

      
    </div>
  )
}
