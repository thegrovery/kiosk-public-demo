console.log("Analytics.js file working!!!");

/* ===== =============== ===== */
/* ===== EVENT FUNCTIONS ===== */
/* ===== =============== ===== */

  function AnalyticsEvent(eventCat, eventLab, eventAct, eventVal){
    //Set vars
    let eventName = "GAEvent"; //GTM keys off of this, must remain hard coded
    eventCat = eventCat || 'no_category'; //gives default/fallback value
    eventLab = eventLab || 'no_label';
    eventAct = eventAct || 'no_action';
    eventVal = eventVal || 'no_value';

    //console log tester
    console.log("===== Custom Analytics Event Triggered =====");
    console.group();
      console.log("Event Category: ["+eventCat+"]");
      console.log("Event Label: ["+eventLab+"]");
      console.log("Event Action: ["+eventAct+"]");
      console.log("Event Value: ["+eventVal+"]");
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

  // Function to check if a specific URL parameter exists
  function hasURLHash(hash) {
    // Get the current URL search parameters
    const searchHash = window.location.hash;

    // Check if the parameter exists
    return hash;
  }



/* ===== ========================== ===== */
/* ===== TRIGGERS - EVENT LISTENERS ===== */
/* ===== ========================== ===== */

  /* ===== Define target element vars ===== */
    const controlNext = document.querySelector('#control-next');
    const controlPrev = document.querySelector('#control-prev');
    const controlInitial = document.querySelector('#control-initial');

  /* ===== EventListeners with function settings ===== */
    //next button click listener
    controlNext.addEventListener('click', function() {
      let eventCat = "slide_navigation";
      let eventLab = "test_eventLab";
      let eventAct = "next_control_button";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    }, false);

    //prev button click listener
    controlPrev.addEventListener('click', function() {
      let eventCat = "slide_navigation";
      let eventLab = "test_eventLab";
      let eventAct = "next_control_button";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    }, false);

    //init button click listener
    controlInitial.addEventListener('click', function() {
      let eventCat = "slide_navigation";
      let eventLab = "test_eventLab";
      let eventAct = "next_control_button";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    }, false);

    function slideHashEventLabel(hashValue){
      let eventLabel = "default_value";
      console.log("slideHashEventLabel(hashValue) | "+hashValue);
      if (hashValue == "#slide1") {
        eventLabel = "slide_1_view";
      }else if (hashValue == "#slide2") {
        eventLabel = "slide_2_view";
      }else if (hashValue == "#slide3") {
        eventLabel = "slide_3_view";
      }else if (hashValue == "#slide4") {
        eventLabel = "slide_4_view";
      }else if (hashValue == "#slide5") {
        eventLabel = "slide_5_view";
      }else {
        eventLabel = "out_of_range";
      }

      return eventLabel;
    }

    //hash navigation/url update detect 
    window.addEventListener('popstate', function (event) {
      // Log the hash to the console
      let hashNav = window.location.hash
      console.log(hashNav);
      let slideViewEvent = slideHashEventLabel(hashNav);
      console.log(slideViewEvent);

      //event
      let eventCat = "slide_navigation";
      let eventLab = slideViewEvent;
      let eventAct = "navigation";
      let eventVal = "n_a";
      AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);
    });

    