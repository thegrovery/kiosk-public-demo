/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function FullscreenOpenIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);

  return (
    <div className={componentStyles.FullscreenOpenIcon}>
      <svg height="48" viewBox="0 96 960 960" width="48"><path  d="M200 856V663h60v133h133v60H200Zm0-367V296h193v60H260v133h-60Zm367 367v-60h133V663h60v193H567Zm133-367V356H567v-60h193v193h-60Z"/></svg>
    </div>
      
  )
}
