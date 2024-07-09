/* ============================================================ */
/*
  CUSTOM ANALYTICS EVENTS 
  - Connects to Google Analytics via Google Tag Manager
  - Notes content
*/
/* ============================================================ */

//console.log test script file connection
//console.log("===== analytics.js file working!!! =====");

/* ===== =============== ===== */
/* ===== EVENT FUNCTIONS ===== */
/* ===== =============== ===== */

  /* ===== MAIN FUNCTION ===== */
    function AnalyticsEvent(eventCat, eventLab, eventAct, eventVal){
      //Set vars
      let eventName = "GAEvent"; //GTM keys off of this, must match the "Event" value in the GTM tag that passes on the event data

      eventCat = eventCat || 'no_category'; //gives default/fallback value
      eventLab = eventLab || 'no_label';
      eventAct = eventAct || 'no_action';
      eventVal = eventVal || 'no_value';

      //console log tester
      console.groupCollapsed("===== Custom Analytics Event Triggered =====");
        console.log("Event Name: ["+eventName+"]");
        console.log("Event Category: ["+eventCat+"]");
        console.log("Event Label: ["+eventLab+"]");
        console.log("Event Action: ["+eventAct+"]");
        console.log("Event Value: ["+eventVal+"]");
        console.log("NOTES: To QA events, look under: Google Analytics Container > Realtime > Event Count by Event Name > 'GAEvent' > 'Event Label'.");
      console.groupEnd();

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

       console.log("===== GA Event Pushed =====");

      } catch (e) {
       console.log("===== GA Event Error =====");
      }
    };


  /* ===== HELPER FUNCTIONS ===== */
    
    /* ===== Returns the hash value of the current URL ===== */
    function hasURLHash(hash) {
      const searchHash = window.location.hash;
      return hash;
    }

    /* ===== Returns the hash value of the current URL ===== */
    function slideHashEventLabel(hashValue){
      //define vars
      let eventLabel = "default_value";
      
      //remove "#" if present
      function removeHash(inputString) {
        return inputString.replace(/#/g, '');
      }

      //format hash value into event label
      hashValue = removeHash(hashValue);
      eventLabel = hashValue+"_view";

      //function outputs eventLabel
      return eventLabel;
    }



/* ===== ========================== ===== */
/* ===== TRIGGERS - EVENT LISTENERS ===== */
/* ===== ========================== ===== */
//NOTE: maybe remove control button events in favor of single hash change detect event

  /* ===== Primary "Page View" Event Trigger ===== */ 
    //NOTE: site is based on in-page slides, not pages. This allows us to measure "page views"
    //hash navigation/url update detect 
    window.addEventListener('popstate', function (event) {
      //grab current URL hash, then send through formatter function
      let hashNav = window.location.hash;
      let slideViewEvent = slideHashEventLabel(hashNav);
      
      //console.log displays
        //console.log(hashNav);
        //console.log(slideViewEvent);

      //event settings
      let eventCat = "slide_navigation";
      let eventLab = slideViewEvent;
      let eventAct = "navigation";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    }, false);

  /* ===== Define target element vars ===== */
    const controlNext = document.querySelector('#control-next');
    const controlPrev = document.querySelector('#control-prev');
    const controlInitial = document.querySelector('#control-initial');

  /* ===== EventListeners with function settings ===== */
    //next button click listener
    /*controlNext.addEventListener('click', function() {
      let eventCat = "slide_navigation";
      let eventLab = "test_eventLab";
      let eventAct = "next_control_button";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    }, false);*/

    //prev button click listener
    /*controlPrev.addEventListener('click', function() {
      let eventCat = "slide_navigation";
      let eventLab = "test_eventLab";
      let eventAct = "next_control_button";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    }, false);*/

    //init button click listener
    /*controlInitial.addEventListener('click', function() {
      let eventCat = "slide_navigation";
      let eventLab = "test_eventLab";
      let eventAct = "next_control_button";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    }, false);*/

    
    

    