/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"

export default function Slide2Graphic({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Slide2Graphic}>
      <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 195.76 189.19">
        <defs>
          
        </defs>
        <polygon id="slide-2-burst1" fill='#f80' strokeWidth='0' points="0 49.42 2.7 52.12 92.67 10.81 81.08 0 0 49.42"/>
        <polygon id="slide-2-burst2" fill='#f80' strokeWidth='0' points="16.22 77.99 16.6 79.92 166.41 78.38 159.85 54.83 16.22 77.99"/>
        <polygon id="slide-2-burst3" fill='#f80' strokeWidth='0' points="45.56 107.72 195.76 163.71 193.44 153.67 45.56 107.72"/>
        <polygon id="slide-2-burst4" fill='#f80' strokeWidth='0' points="37.07 120.85 36.68 124.71 153.29 189.19 156.76 176.45 37.07 120.85"/>
      </svg>

    </div>
      
  )
}
