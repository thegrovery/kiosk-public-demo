/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import PDFModal from './PDFModal'
import InactivityModal from './InactivityModal'
import SupportModal from './SupportModal'
import ContactModal from './ContactModal'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function Modal({ 
  //Props
  children, pdf, support, 
}) {

  /*const modalOpenDetect = () => {
    const element = document.getElementById("ModalWrapper");
    if (element.getAttribute('data-modal-status') == "active") {
      //Modal is open, close it
      element.setAttribute('data-modal-status', 'inactive');
      element.setAttribute('data-modal-show', '');
    } else {
      //Modal is closed, open it
      element.setAttribute('data-modal-status', 'active');
      element.setAttribute('data-modal-show', 'PDFModal');
    }
  }

  const handleClick = () => {
    modalOpenDetect();
  };*/

  //console.log(author);
  

  const modalClose = () => {
    const element = document.getElementById("ModalWrapper");
    const iframe = document.getElementById("ModalIframe");
    const docBody = document.querySelector('body');
    element.setAttribute('data-modal-status', 'inactive');
    iframe.setAttribute('src', '/images/BMSLogo.svg');
    docBody.setAttribute("data-slider-scroll","true");
  }

  const closeClick = () => {
    modalClose();
  };

  return (

    <div 
      id="ModalWrapper"
      className={componentStyles.ModalWrapper}
      data-modal-status="inactive"
      data-modal-show=""
    >
      
      {/*Backdrop filter, click to close*/}
      <div 
        className={componentStyles.backdrop} 
        onClick={modalClose}
      />
      
      <div className={componentStyles.modalInner}>
        <SupportModal />
        <PDFModal  />
        <ContactModal/>
        <InactivityModal />

      </div>

    </div>
  )
}
