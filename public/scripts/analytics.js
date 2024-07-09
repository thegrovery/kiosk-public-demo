/* ============================================================ */
/*
  CUSTOM ANALYTICS EVENTS 
  - Connects to Google Analytics via Google Tag Manager
  - "eventName" variable - MUST match the "Event contains" value in 
    the "Custom GA Event Trigger" trigger in Google Tag Manager. 
    This then triggers the "Custom GA Event Passer" tag that 
    sends the data to Google Analytics as an event.
*/
/* ============================================================ */

//console.log test script file connection
//console.log("===== analytics.js file working!!! =====");

/* ===== ========================= ===== */
/* ===== ANALYTICS EVENT FUNCTIONS ===== */
/* ===== ========================= ===== */

  /* ===== Main Function - Event Pusher ===== */
    function AnalyticsEvent(eventCat, eventLab, eventAct, eventVal){
      //Set vars - event name & sub-parameters
      const eventName = "GAEvent"; //static, do not update
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
       //Push event to datalayer
       window.dataLayer = window.dataLayer || [];
       dataLayer.push({
         'event':          eventName,
         'eventCategory':  eventCat,
         'eventAction':    eventAct,
         'eventLabel':     eventLab,
         'eventValue':     eventVal,
       });
       console.log("===== Custom Analytics Event Pushed =====");
      } catch (e) {
       console.log("===== Custom Analytics Event Error =====");
      }
    };


  /* ===== HELPER FUNCTIONS ===== */

    /* ===== Formats the slide ID hash into the desired eventLabel format ===== */
    function slideHashEventLabel(hashValue){
      //define vars
      let eventLabel = "default_value";
      
      //remove "#" if present
      function removeHash(inputString) {
        return inputString.replace(/#/g, '');
      }

      //format hash value into event label syntax
      hashValue = removeHash(hashValue);
      eventLabel = hashValue+"_view";

      //function outputs eventLabel
      return eventLabel;
    }



/* ===== ========================== ===== */
/* ===== TRIGGERS - EVENT LISTENERS ===== */
/* ===== ========================== ===== */

  /* ===== Primary "Page View" Event Trigger ===== */ 
    //NOTE: site is based on in-page slides, not pages. This allows us to measure "page views"
    //'popstate' detects hash navigation/url update 
    window.addEventListener('popstate', function (event) {
      //grab current URL hash, then send through formatter function
      let hashNav = window.location.hash;
      let slideViewEvent = slideHashEventLabel(hashNav);
      
      //console.log displays
        //console.log("hashNav: "+hashNav);
        //console.log("slideViewEvent: "+slideViewEvent);

      //event settings
      let eventCat = "slide_navigation";
      let eventLab = slideViewEvent;
      let eventAct = "in_page_navigation";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    }, false);

/* ===== =============================== ===== */
/* ===== Deprecated but saving for later ===== */
/* ===== =============================== ===== */

  /* ===== Define target element vars ===== */
    //control buttons
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

    
    

    