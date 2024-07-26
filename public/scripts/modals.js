/* ============================================================ */
/*
	Modals, Popups, Widgets, & Banners
	- Notes content
	- Notes content

  Preferred Modal Structure:
  ModalWrapper > Specific Modal > Content
*/
/* ============================================================ */

console.log("modals.js loaded");

/* ===== ================================ ===== */
/* ===== Define Global Modal DOM Elements ===== */
/* ===== ================================ ===== */
  //define DOM targets
  let ModalWrapper = document.querySelector("#ModalWrapper");
  //let docBody = document.querySelector("body");

  let allIframes = document.querySelectorAll('#ModalWrapper iframe');
  let ContactModalButton = document.querySelector("#ContactModalOpen");


/* ===== ================ ===== */
/* ===== Helper Functions ===== */
/* ===== ================ ===== */

  /* ===== Toggle Body Scroll Settings ===== */
  //docBody.setAttribute("data-slider-scroll", "false");  
  function bodyScrollToggle() {
    let scrollAttribute = docBody.getAttribute("data-slider-scroll");

    if(scrollAttribute == 'true' || scrollAttribute == ''){
      docBody.setAttribute("data-slider-scroll", "false");
    } else {
      docBody.setAttribute("data-slider-scroll", "true");
    }
    return false;
  }


/* ===== ========================== ===== */
/* ===== Global Modal Open Funciton ===== */
/* ===== ========================== ===== */
  //modalName options: 
  //'ContactModal', 'PDFModal', 'InactivityModal', 'SupportModal', 'VideoModal'
  function modalOpen(modalName, iframeLink){
    console.log("modalOpen(modalName, iframeLink)");
    console.log("modalName: "+ modalName);
    console.log("iframeLink: "+ iframeLink);
    //modal-specific functions
    //Do these first so they happen before the modal is visible
      if(modalName == 'VideoModal'){
        //set video embed/file link in iframe
        let iframe = document.querySelector("#VideoModal iframe");
        iframe.setAttribute("src", iframeLink); 
      } else if(modalName == 'PDFModal'){
        //set PDF file link in iframe
        let iframe = document.querySelector("#PDFModal iframe");
        iframe.setAttribute("src", iframeLink+"#view=FitH"); 
      }

    //open specific modal
      ModalWrapper.setAttribute("data-modal-status", "active");
      ModalWrapper.setAttribute("data-modal-show", modalName);
    
    //disable body scroll
      //bodyScrollToggle();
    
  }



/* ===== =========================== ===== */
/* ===== Global Modal Close Funciton ===== */
/* ===== =========================== ===== */
  function modalClose(){
    ModalWrapper.setAttribute('data-modal-status', 'inactive');
    //bodyScrollToggle();

    //TODO:
    //clear iframes
    allIframes.forEach(element => {
      element.setAttribute('src', 'about:blank');
    });
  }

/* ===== ============================== ===== */
/* ===== Set EventListeners on Elements ===== */
/* ===== ============================== ===== */

  /* ===== Set EventListeners on all Modal OPEN Buttons/Elements ===== */
  function SetModalOpenTriggers(){
    let elements = document.querySelectorAll('[data-modal-open]');
    elements.forEach(element => {
      element.addEventListener('click', function() {
        //do the thing
        console.log(this.className); 

        let modalName = this.getAttribute("data-modal-open");
        
        //if modal is PDF or Video types
        if(modalName == "PDFModal" || modalName == "VideoModal"){
          let iframeLink = this.getAttribute("data-modal-iframe");
          console.log(iframeLink);
          //open modal
          modalOpen(modalName, iframeLink);
        } else{
          //open modal
          modalOpen(modalName);
        }

      }, false);
    });
  }

  /* ===== Set EventListeners on all Modal CLOSE Buttons/Elements ===== */
  function SetModalCloseTriggers(){
    let elements = document.querySelectorAll('[data-modal-close]');
    elements.forEach(element => {
      element.addEventListener('click', function() {
        //close modal - closes any/all instances
        console.log('CLICK | [data-modal-close]');
        modalClose();
      }, false);
    });
  }


/* ===== ========================== ===== */
/* ===== Run Functions on Page Load ===== */
/* ===== ========================== ===== */
  SetModalOpenTriggers();
  SetModalCloseTriggers();



/* ===== ============================= ===== */
/* ===== OLD SCRAP CODE - DELETE LATER ===== */
/* ===== ============================= ===== */
//Open modal functions
  function ContactModalOpen(){
    ModalWrapper.setAttribute("data-modal-status", "active");
    ModalWrapper.setAttribute("data-modal-show", "ContactModal");
    docBody.setAttribute("data-slider-scroll","false");

    //IMPORTANT: add function for turning off scroll detect on sliders
  }

//Close Modal Function (global)
  function ModalClose(e){
    e.preventDefault();
    //$("#SupportModal").attr("data-modal-status", "inactive");
    ModalWrapper.setAttribute("data-modal-status", "inactive");
    docBody.setAttribute("data-slider-scroll","true");
  }

//EventListeners
  ContactModalButton.addEventListener('click', () => {
    console.log("ContactModalButton event listener");
    ContactModalOpen();
  });