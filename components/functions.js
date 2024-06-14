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

    console.log("Functions.js file working!!!");

    $(document).ready(function() {
      let ModalWrapper = document.querySelector("#ModalWrapper");
      /*document.querySelector("[data-modal-open='support']").click(function(e){
        e.preventDefault();
        ModalWrapper.setAttribute("data-modal-status", "active");
        ModalWrapper.setAttribute("data-modal-show", "SupportModal");
      });
*/
      $("[data-modal-close]").click(function(e){
        e.preventDefault();
        //$("#SupportModal").attr("data-modal-status", "inactive");
        ModalWrapper.setAttribute("data-modal-status", "inactive");
      });

    });

  });

  return (
    <div></div>
  )
}
