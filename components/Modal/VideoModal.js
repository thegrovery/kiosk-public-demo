/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import CloseIcon from '@components/SVGComponents/CloseIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function VideoModal({ 
  //Props
  url, title, defaultZoom, disclaimerCopy,
}) {

  //console.log(author);

  return (
    <div 
      id="VideoModal"
      className={componentStyles.iFrameModal}
    >

      <div className={componentStyles.closeButtonSection}>
        <div 
          className={componentStyles.closeButton}
          data-modal-close="true"
        >
          <CloseIcon/>
        </div>
      </div>
      
      {/*<div id="VideoModalTitle" className={componentStyles.titleArea}>
        NO-US-2200226_BMS10289 AS Sample SOB Form_Pending Determination_FINAL.pdf
      </div>*/}
      
      <div className={componentStyles.iframeWrapper}>
        <iframe src="about:blank" frameBorder="0"></iframe>
      </div>

    </div>
  )
}
