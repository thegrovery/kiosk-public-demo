/*===== Ultility Components =====*/
  import React, { useState, useEffect } from 'react';
  import $ from 'jquery'


/*===== JS Code =====*/
  //import interact from 'interactjs'
  //import {isTablet, isSafari, isIPad13} from 'react-device-detect';

export default function Analytics({ 
  //PROPS
}) {
  
  useEffect(() => {
    console.log("Analytics.js file working!!!");

    /* ===== EVENT FUNCTIONS ===== */
      function ClickAnalyticsEvent(targetElement){
        //Set vars
        var evCat = targetElement.attr('data-category') ? targetElement.attr('data-category') : '';
        var evAct = targetElement.attr('data-action') ? targetElement.attr('data-action') : '';
        var evLab = targetElement.attr('data-label')  ? targetElement.attr('data-label') : '';
        var evVal = targetElement.attr('data-value')  ? targetElement.attr('data-value') : '';

        try {
         //Fire event
         window.dataLayer = window.dataLayer || [];
         dataLayer.push({
           'event':          'GAEvent',
           'eventCategory':  evCat,
           'eventAction':    evAct,
           'eventLabel':     evLab,
           'eventValue':     evVal,
         });

         console.log("GA Event fired - Event Category: ["+evCat+"], Event Label: ["+evLab+"], Event Action: ["+evAct+"]");

        } catch (e) {
         console.log("GA Event Error");
        }
      };

      function TestAnalyticsEvent(targetElement){
        //Set vars
        let eventName = "GAEvent";
        let eventCat = "eventCat";
        let eventAct = "eventAct";
        let eventLab = "eventLab";
        let eventVal = "eventVal";

        console.log("GA Event fired - Event Name: ["+eventNametest+"], Event Category: ["+eventCat+"], Event Label: ["+eventLab+"], Event Action: ["+eventAct+"]");

        try {
         //Fire event
         window.dataLayer = window.dataLayer || [];
         dataLayer.push({
           'event':          eventName,
           'eventCategory':  eventCat,
           'eventAction':    eventAct,
           'eventLabel':     eventLab,
           'eventValue':     eventVal,
         });

         console.log("GA Event Pushed");

        } catch (e) {
         console.log("GA Event Error");
        }
    };


    /* ===== TRIGGERS - EVENT LISTENERS ===== */
      let testElement = document.querySelector('#AnalyticsTestButton');
      testElement.addEventListener("click", TestAnalyticsEvent, false);
   

  })

  return (
    <div></div>
  )
}
