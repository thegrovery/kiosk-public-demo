/*===== Components =====*/
import React from "react"
import Link from 'next/link'

import CloseIcon from '@components/SVGComponents/CloseIcon'
//import Button1 from '@components/Button1'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";
import ResourcesForm from "@components/ResourcesForm";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*const formHtml = '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script><script>hbspt.forms.create({region: "na1",      portalId: "39959608",formId: "a94bc5f2-8821-4981-bca9-8b00272101e9"});  </script>';*/

//new version
const formHtml = '<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script><script>hbspt.forms.create({region: "na1",      portalId: "39959608",formId: "bd7c288a-968c-425f-8c43-b9e3fc25e60e"});  </script>';

export default function ContactModal({ 
  //Props
  children, heading, 
}) {

  //console.log(author);
  const modalClose = () => {
    const element = document.getElementById("ModalWrapper");
    element.setAttribute('data-modal-status', 'inactive');
    const docBody = document.querySelector('body');
    docBody.setAttribute("data-slider-scroll","true");
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
          <h2>Contact Us</h2>
          <p>Send us a message, or scan the QR code with your phone to go to our website.</p>
        </div>

        <div className={componentStyles.splitLayout}>
          <div className={componentStyles.left}>
            <div className={componentStyles.qrCodeSection}>
              <h3>Scan to <br/>Learn More:</h3>
              <QRCodePreset 
                /*link="https://bms.claravine.com/global/599a76c9-d5ec-4ea5-98ba-683a3e967122"*/
                link="https://thegrovery.com/xpoconnect?utm_source=kiosk_demo&utm_medium=qr_code_scan"
              />    
              <a href="https://thegrovery.com/xpoconnect?utm_source=kiosk_demo&utm_medium=qr_code_link_click">[thegrovery.com/xpoconnect]</a>          
            </div>

          </div>
          <div className={componentStyles.right}>
            {/*<ResourcesForm/>*/}
            <div id="ContactForm">
              <div dangerouslySetInnerHTML={{ __html: formHtml }} />  
            </div>
            

            
          </div>
        </div>

      </div>


    </div>
    
  )
}
