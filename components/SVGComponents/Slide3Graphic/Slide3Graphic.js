/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Site Data =====*/
import data from "@data/data.json"

export default function Slide3Graphic({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);
  let accentColor = data.accentColor1;

  return (
    <div className={componentStyles.Slide3Graphic}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752.29 1204.19">
        <g id="slide-3-burst1">
          <polygon class="green-1" fill="#89b939" fillRule="evenodd" strokeWidth="0px" points="194.05 0 728.36 741.65 0 186.08 194.05 0"/>
        </g>
        <g id="slide-3-burst2">
          <polygon class="green-1" fill="#89b939" fillRule="evenodd" strokeWidth="0px" points="63.8 558.23 640.64 789.5 15.95 741.65 63.8 558.23"/>
        </g>
        <g id="slide-3-burst3">
          <polygon class="green-1" fill="#89b939" fillRule="evenodd" strokeWidth="0px" points="77.09 1002.16 143.55 1204.19 752.29 882.54 77.09 1002.16"/>
        </g>
      </svg>

    </div>
      
  )
}
