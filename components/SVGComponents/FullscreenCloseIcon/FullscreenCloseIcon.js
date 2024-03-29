/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function FullscreenCloseIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);

  return (
    <div className={componentStyles.FullscreenCloseIcon}>
      <svg height="48" viewBox="0 96 960 960" width="48"><path d="M333 856V723H200v-60h193v193h-60Zm234 0V663h193v60H627v133h-60ZM200 489v-60h133V296h60v193H200Zm367 0V296h60v133h133v60H567Z"/></svg>
    </div>
      
  )
}
