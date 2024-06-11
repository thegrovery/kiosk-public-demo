/*===== Components =====*/
import React from "react"
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

  return (
    <div className={componentStyles.Slide5Foreground}>
      {/*<img src="/images/slide-2-asset.png" alt="" />*/}
      <div className={componentStyles.textElement}>

        <div className={componentStyles.inner}>
          <h2>Ready to Grow?</h2>
          <p>
            Elevate your conference engagements to new heights with The Grovery's XpoConnect, a strategic, streamlined, and results-driven solution for your events.
          </p>
          <a 
            href="#"
            className={componentStyles.button}
          >Contact Us</a>
        </div>
        
      </div>
    </div>
  )
}
