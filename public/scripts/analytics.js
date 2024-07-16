/* ============================================================ */
/*
  CUSTOM ANALYTICS EVENTS 
  - Connects to Google Analytics via Google Tag Manager
  
  WARNINGS:
  - Event Naming Rules for GA: https://support.google.com/analytics/answer/13316687?hl=en&ref_topic=13367860&sjid=17187452480426313666-NA#zippy=%2Cweb
  -- Shortlist: 'click', 'error', 'form_submit', 'form_start', 'file_download'
============================================================
  - Functions:

  -- General Event Pusher 
  --- what sends the events to GTM/GA
  --- "eventName" variable: MUST match the "Event contains" value in 
        the "Custom GA Event Trigger" trigger in Google Tag Manager. 
        This then triggers the "Custom GA Event Passer" tag that 
        sends the data to Google Analytics as an event.
  --- USAGE:
        //event settings
        let eventCat = "slide_navigation";
        let eventLab = slideViewEvent;
        let eventAct = "in_page_navigation";
        let eventVal = "n_a";
        AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);

  -- UTM Event Pusher 
  --- modified event pusher
  --- "eventName" variable: uses 'custom_utm_event'
  --- note: 'utm_state' variable is non-standard and experimental
  --- USAGE:
        //event settings
        let utm_campaign = utm_values.utm_campaign;
        let utm_content = utm_values.utm_content;
        let utm_medium = utm_values.utm_medium;
        let utm_source = utm_values.utm_source;
        let utm_term = utm_values.utm_term;
        let utm_state = utm_values.utm_state;
        AnalyticsEventUTM(utm_campaign, utm_content, utm_medium, utm_source, utm_term, utm_state);

  -- URL Parameter Logger 
  --- grabs URL parameters and saves them to sessionStorage and 
        localStorage, keeping the values availble for later use
  --- sample URL: https://website.com?utm_source=test&utm_medium=test&utm_campaign=test&utm_term=test&utm_content=test

  -- Get UTMs 
  --- returns latest live or saved UTM data
  --- returns UTMs as single object, access like: 'utm_values.utm_campaign'
  --- USAGE:
        //Grab all values at once for efficiency
        let utm_values = GetUTMs();
        let utm_campaign = utm_values.utm_campaign;
        let utm_content = utm_values.utm_content;
        let utm_medium = utm_values.utm_medium;
        let utm_source = utm_values.utm_source;
        let utm_term = utm_values.utm_term;
        let utm_state = utm_values.utm_state;

  -- Misc. Helper Functions

  -- Run Functions / Triggers

*/
/* ============================================================ */

//console.log test script file connection
//console.log("===== analytics.js file working!!! =====");

/* ===== =================== ===== */
/* ===== Top-Level Variables ===== */
/* ===== =================== ===== */
  //These variables are absolutely necessary for the GTM tags, and they MUST match the corresponding variables in GTM.
  const analyticsEventName = "custom_ga_event";
  const utmAnalyticsEventName = "custom_utm_event";
  const customAnalyticsEventPrefix = "custom_event_";

/* ===== ==================================== ===== */
/* ===== Main Function - General Event Pusher ===== */
/* ===== ==================================== ===== */

  function AnalyticsEvent(eventCat, eventLab, eventAct, eventVal){
    //Set vars - event name & sub-parameters
    const eventName = analyticsEventName; //static, do not update
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


/* ===== =================================== ===== */
/* ===== Main Function - Simple Event Pusher ===== */
/* ===== =================================== ===== */

function SimpleAnalyticsEvent(event_name){
  //Set vars - event name & sub-parameters
  //const eventName = analyticsEventName; //static, do not update
  //eventCat = eventCat || 'no_category'; //gives default/fallback value
  //eventLab = eventLab || 'no_label';
  //eventAct = eventAct || 'no_action';
  //eventVal = eventVal || 'no_value';

  //event_name = customAnalyticsEventPrefix+event_name;

  //console log tester
  console.groupCollapsed("===== Dynamically-Named Analytics Event Triggered =====");
    console.log("Event Name: [dynamic_event_name]");
    console.log("Event Detail: ["+event_name+"]");
    console.log("NOTES: To QA events, look under: Google Analytics Container > Realtime > Event Count by Event Name");
  console.groupEnd();

  try {
   //Push event to datalayer
   window.dataLayer = window.dataLayer || [];
   dataLayer.push({
     'event': "dynamic_event_name",
     'event_detail': event_name,
   });
   console.log("===== Dynamically-Named Analytics Event Pushed =====");
  } catch (e) {
   console.log("===== Dynamically-Named Analytics Event Error =====");
  }
};


/* ===== ================================ ===== */
/* ===== Main Function - UTM Event Pusher ===== */
/* ===== ================================ ===== */

  function AnalyticsEventUTM(utm_campaign, utm_content, utm_medium, utm_source, utm_term, utm_state){
    //Set vars - event name & sub-parameters
      const eventName = utmAnalyticsEventName; //static, do not update
      
      utm_campaign  = utm_campaign || "n_a"; //gives default/fallback value
      utm_content   = utm_content  || "n_a";
      utm_medium    = utm_medium   || "n_a";
      utm_source    = utm_source   || "n_a";
      utm_term      = utm_term     || "n_a";
      utm_state     = utm_state    || "n_a";

    //console log tester
      console.groupCollapsed("===== Custom UTM Analytics Event Triggered =====");
        console.log("Event Name: ["+eventName+"]");
        console.log("UTM Campaign: ["+utm_campaign+"]");
        console.log("UTM Content: ["+utm_content+"]");
        console.log("UTM Medium: ["+utm_medium+"]");
        console.log("UTM Source: ["+utm_source+"]");
        console.log("UTM Term: ["+utm_term+"]");
        console.log("UTM State (experimental): ["+utm_state+"]");
        console.log("NOTES: To QA events, look under: Google Analytics Container > Realtime > Event Count by Event Name > 'custom_utm_event' > 'Event Label'.");
      console.groupEnd();

    //Push event to datalayer
      try {
       window.dataLayer = window.dataLayer || [];
       dataLayer.push({
         'event':          eventName,
         'utm_campaign': utm_campaign,
         'utm_content':  utm_content,
         'utm_medium':   utm_medium,
         'utm_source':   utm_source,
         'utm_term':     utm_term,
         'utm_state':    utm_state,
       });
       console.log("===== Custom UTM Analytics Event Pushed =====");
      } catch (e) {
       console.log("===== Custom UTM Analytics Event Error =====");
      }
  };


/* ===== ==================================== ===== */
/* ===== Main Function - URL Parameter Logger ===== */
/* ===== ==================================== ===== */
  function parameterLogger(param) {
    var searchParams = new URLSearchParams(window.location.search); 
    var paramValue = "";
    var utm_state = "";

    if(searchParams.has(param)) {
      //if UTM parameters are present in URL
      //console.log("===== UTM values detected - in URL =====");
      utm_state = "url";
      paramValue = searchParams.get(param);
      sessionStorage.setItem(param, paramValue);
      localStorage.setItem(param, paramValue);

    }else if(sessionStorage.getItem(param)){
      //if UTM parameters are not present in URL, but are in SessionStorage
      //console.log("===== UTM values detected - in short-term session =====");
      utm_state = "sessionStorage";
      paramValue = sessionStorage.getItem(param);

    }else if(localStorage.getItem(param)){
      //if UTM parameters are not present in URL or SessionStorage, but are in LocalStorage
      //console.log("===== UTM values detected - in long-term session =====");
      utm_state = "localStorage";
      paramValue = localStorage.getItem(param);

    }
    //console.log("UTM detected: "+param+": "+paramValue+", utm_state: "+utm_state);

    //NOTES:
    //paramValue: actual value of the UTM
    //utm_state: context state of the individual value

    //return paramValue;
    return {paramValue, utm_state};
  };


/* ===== ======================== ===== */
/* ===== Main Function - Get UTMs ===== */
/* ===== ======================== ===== */
  function GetUTMs(){
    /* ===== Grab UTMs ===== */
      let utm_source = parameterLogger("utm_source");
      let utm_medium = parameterLogger("utm_medium");
      let utm_campaign = parameterLogger("utm_campaign");
      let utm_term = parameterLogger("utm_term");
      let utm_content = parameterLogger("utm_content");
      let utm_state = utm_source.utm_state;

    /* ===== Formatting for Ease Of Use ===== */
      utm_source = utm_source.paramValue;
      utm_medium = utm_medium.paramValue;
      utm_campaign = utm_campaign.paramValue;
      utm_term = utm_term.paramValue;
      utm_content = utm_content.paramValue;
      //utm_state = utm_source.utm_state;

    /* ===== Package up data in a single object ===== */
      var utm_values = {
        utm_campaign : utm_campaign,
        utm_content  : utm_content,
        utm_medium   : utm_medium,
        utm_source   : utm_source,
        utm_term     : utm_term,
        utm_state    : utm_state,
      }

    /* ===== console log tester ===== */
      /*console.groupCollapsed("===== UTM Tracking Present =====");
        console.log("utm_source: ["+utm_values.utm_source+"]");
        console.log("utm_medium: ["+utm_values.utm_medium+"]");
        console.log("utm_campaign: ["+utm_values.utm_campaign+"]");
        console.log("utm_term: ["+utm_values.utm_term+"]");
        console.log("utm_content: ["+utm_values.utm_content+"]");
        console.log("utm_state: ["+utm_values.utm_state+"]");
      console.groupEnd();*/

    return utm_values;
  }
  

/* ===== ====================== ===== */
/* ===== Misc. Helper Functions ===== */
/* ===== ====================== ===== */

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

  /* ===== Determines if URL currently has a UTM present ===== */
    function checkForUTM(){
      if(GetUTMs().utm_state == "url"){
        console.log("===== checkForUTM | [true] =====");
        return true;
      } else {
        console.log("===== checkForUTM | [false] =====");
        return false;
      }
    }


/* ===== ========================================== ===== */
/* ===== RUN FUNCTIONS - TRIGGERS & EVENT LISTENERS ===== */
/* ===== ========================================== ===== */

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

      SimpleAnalyticsEvent(slideViewEvent);
    }, false);

    //First Slide Event - page loads on first slide, doesn't activate main trigger
    window.addEventListener("load", (event) => {
      //Site always loads on Slide 1, insert statically
        let slideViewEvent = "slide_1_view";
      
      //Complex Analytics Event
        let eventCat = "slide_navigation";
        let eventLab = slideViewEvent;
        let eventAct = "in_page_navigation";
        let eventVal = "n_a";
        AnalyticsEvent(eventCat, eventLab, eventAct, eventVal);

      //Simple Analytics Event
        SimpleAnalyticsEvent(slideViewEvent);
    });

  /* ===== UTM Event Trigger ===== */ 
    if(checkForUTM()){
      //Grab all values at once for efficiency
      let utm_values = GetUTMs();

      //event settings
      let utm_campaign = utm_values.utm_campaign;
      let utm_content = utm_values.utm_content;
      let utm_medium = utm_values.utm_medium;
      let utm_source = utm_values.utm_source;
      let utm_term = utm_values.utm_term;
      let utm_state = utm_values.utm_state;
      AnalyticsEventUTM(utm_campaign, utm_content, utm_medium, utm_source, utm_term, utm_state);
    } else {
      //UTMs not present in current URL, do nothing
    }
    

/* ===== END of file ===== */