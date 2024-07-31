/*===== Components =====*/
import React from "react"
import Link from 'next/link'

import CloseIcon from '@components/SVGComponents/CloseIcon'
//import Button1 from '@components/Button1'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";
import ResourcesForm from "@components/ResourcesForm";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

//html for hubspot form - needs to be 1 line, inserted as direct html
const formHtml = '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script><script>hbspt.forms.create({region: "na1",      portalId: "39959608",formId: "bd7c288a-968c-425f-8c43-b9e3fc25e60e"});  </script>';

export default function ContactModal({ 
  //Props
  children, heading, 
}) {



  return (
    <div 
      id="ContactModal"
      className={componentStyles.ContactModal}
    >
      <div className={componentStyles.closeButtonSection}>
        <div 
          className={componentStyles.closeButton}
          data-modal-close="true"
        >
          <CloseIcon/>
        </div>
      </div>
      
      
      <div className={componentStyles.scrollSection}>
        
        <div className={componentStyles.heading}>
          <h2>Contact Us</h2>
          <p>Send us a message, or scan the QR code with your phone to go to our website.</p>
        </div>

        <div className={componentStyles.splitLayout}>
          <div className={componentStyles.left}>
            <div className={componentStyles.qrCodeSection}>
              <h3>Scan to <br/>Learn More:</h3>
              <QRCodePreset 
                link="https://thegrovery.com/xpoconnect?utm_source=kiosk_demo&utm_medium=qr_code_scan"
              />    
              <a href="https://thegrovery.com/xpoconnect?utm_source=kiosk_demo&utm_medium=qr_code_link_click">[thegrovery.com/xpoconnect]</a>          
            </div>

          </div>
          <div className={componentStyles.right}>
            {/*<ResourcesForm/>*/}
            {/* #ContactForm use global styling in main.scss*/}
            <div id="ContactForm">
              <div dangerouslySetInnerHTML={{ __html: formHtml }} />  
            </div>
            

            
          </div>
        </div>

      </div>


    </div>
    
  )
}
