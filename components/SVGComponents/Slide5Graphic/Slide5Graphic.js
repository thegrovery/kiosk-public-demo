/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"

export default function Slide5Graphic({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Slide5Graphic}>
      <svg id="Layer_1" data-name="Layer 1"  viewBox="0 0 106.3 120.9">
        <defs>
         
        </defs>
        <path id="slide-5-line1" fill='none' stroke='#fff' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='1.3px' d="M32.5,23.1c17.5,4.1,47.6,22.9,49.4,66.7"/>
        <path id="slide-5-line2" fill='none' stroke='#fff' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='1.3px' d="M36.1,29.8c11.6,4.6,31.4,18.5,37.8,53.5"/>
        <path id="slide-5-line3" fill='none' stroke='#fff' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='1.3px' d="M38.7,38.8c8.5,3.9,23.4,22.4,27.3,37.8"/>
        <path id="slide-5-line4" fill='none' stroke='#fff' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='1.3px' d="M39.5,47.3c6.9,4.4,20.1,18.3,23.2,53.3"/>
        <path id="slide-5-line5" fill='none' stroke='#fff' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='1.3px' d="M32.5,54c9.5,11.3,9.3,30.4,8.2,39.9"/>
        <path id="slide-5-line6" fill='none' stroke='#fff' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='1.3px' d="M40.2,56c3.1,3.1,9.3,21.4,10.8,29.9"/>
        <path id="slide-5-line7" fill='none' stroke='#fff' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='1.3px' d="M29.4,62.2c3.3,6.6,2.1,18.4.8,24.2"/>
      </svg>

    </div>
      
  )
}
