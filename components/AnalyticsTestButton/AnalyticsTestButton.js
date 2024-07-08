/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Link from 'next/link'


//import Button1 from '@components/Button1'
import FullscreenOpenIcon from '@components/SVGComponents/FullscreenOpenIcon'
import FullscreenCloseIcon from '@components/SVGComponents/FullscreenCloseIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function AnalyticsTestButton({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);
  useEffect(() => {
    
  });

  return (
    <div 
      id="AnalyticsTestButton"
      className={componentStyles.AnalyticsTestButton}
      data-state="not-fullscreen"
    >
      Analytics Test
    </div>
  )
}
