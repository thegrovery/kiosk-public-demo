/*===== Ultility Components =====*/
  import React, { useState, useEffect } from 'react';
  import $ from 'jquery'


/*===== JS Code =====*/
  //import interact from 'interactjs'
  //import {isTablet, isSafari, isIPad13} from 'react-device-detect';

export default function Functions({ 
  //PROPS
}) {
  
  useEffect(() => {

   

  })

  console.log("Functions.js file working!!!");

  //define DOM targets
    let ModalWrapper = document.querySelector("#ModalWrapper");
    let ContactModalButton = document.querySelector("a[data-modal-open='support']");
  //Open modal functions
    function ContactModalOpen(){
      ModalWrapper.setAttribute("data-modal-status", "active");
      ModalWrapper.setAttribute("data-modal-show", "SupportModal");
    }

  //Close Modal Function (global)
    function ModalClose(){
      e.preventDefault();
      //$("#SupportModal").attr("data-modal-status", "inactive");
      ModalWrapper.setAttribute("data-modal-status", "inactive");
    }

  //Event Listeners
    ContactModalButton.addEventListener('click', function() {
      //do the thing
      console.log("ContactModalButton event listener");
      ContactModalOpen();
    });



  return (
    <div></div>
  )
}
