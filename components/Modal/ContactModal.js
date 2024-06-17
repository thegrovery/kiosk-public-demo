/*===== Components =====*/
import React from "react"
import Link from 'next/link'

import CloseIcon from '@components/SVGComponents/CloseIcon'
//import Button1 from '@components/Button1'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ContactModal({ 
  //Props
  children, heading, 
}) {

  //console.log(author);
  const modalClose = () => {
    const element = document.getElementById("ModalWrapper");
    element.setAttribute('data-modal-status', 'inactive');
  }

  const closeClick = () => {
    modalClose();
  };

  return (
    <div 
      id="ContactModal"
      className={componentStyles.ContactModal}
    >

      <div 
        className={componentStyles.closeButton}
        onClick={modalClose}
      >
        <CloseIcon/>
      </div>
      
      <div className={componentStyles.scroll}>
        
        <div className={componentStyles.heading}>
          <h2>3 Ways to Get Support</h2>
          <p>Visit BMSAccessSupport.com for on-demand online support, or schedule a call or in-office visit with one of our specialists.</p>
        </div>

      </div>


    </div>
    
  )
}
