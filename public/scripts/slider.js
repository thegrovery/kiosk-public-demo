/* ============================================================ */
/*
	Notes Comments Section
	- Notes content
	- Notes content
*/
/* ============================================================ */

//console.log test script file connection
//console.log("===== slider.js file working!!! =====");

/*===== =================== =====*/
/*===== TOP-LEVEL VARIABLES =====*/
/*===== =================== =====*/
  const foregroundSlider = document.querySelector('#foregroundSlider');
  const backgroundSlider = document.querySelector('#backgroundSlider');

/*===== ============================ =====*/
/*===== ============================ =====*/
/*===== LINE ANIMATION FUNCTIONALITY =====*/
/*===== ============================ =====*/
/*===== ============================ =====*/
  //define vars
  let path = document.querySelector('#lineElement path');
  let length = path.getTotalLength();
  let screenWidth = window.screen.availWidth;
  let numberOfSlides = 5;
  let timePerSlide = 2250; //in ms
  //let totalTime = timePerSlide * numberOfSlides;
  let totalTime = 11000;
  let lastSlide = false;
  let lastSlideExecute = false;

  //console logs
  console.groupCollapsed("===== Slider Animation Info =====");
    console.log("line path length: ", length);
    console.log("screen width: ", screenWidth);
    console.log("numberOfSlides: ", numberOfSlides);
    console.log("timePerSlide: ", timePerSlide);
    console.log("totalTime: ", totalTime);
  console.groupEnd(); 

  //CSS animation settings
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.style.animationName = "lineDraw";
  path.style.animationDuration = "10s";
  //path.style.animationDelay = "1s";
  path.style.animationTimingFunction = "linear";
  path.style.animationDirection = "forward";
  path.style.animationIterationCount = "1";
  path.style.animationPlayState = "paused";

  function sliderLock(){
    //console.log("sliderLock()");
    foregroundSlider.allowSlideNext="false";
    foregroundSlider.allowSlidePrev="false";
  }
  function sliderUnlock(){
    //console.log("sliderUnlock()");
    foregroundSlider.allowSlideNext="true"
    foregroundSlider.allowSlidePrev="true"
  }
  
  function lineDrawStart(){
    //start off paused
    path.style.animationPlayState = "paused";
    sliderLock();
    let delay = 3000;
    //initial delay
    setTimeout(() => {
      path.style.animationPlayState = "running";
    }, delay); //time in ms

    //normal line animation time/length + delay time
    setTimeout(() => {
      path.style.animationPlayState = "paused";
      sliderUnlock();
    }, timePerSlide + delay); //time in ms
    
  }

  function lineDrawSection(){
    path.style.animationPlayState = "running";
    sliderLock();
    setTimeout(() => {
      path.style.animationPlayState = "paused";
      sliderUnlock();
    }, timePerSlide); //time in ms
  }

  function lineDrawSectionShort(){
    path.style.animationPlayState = "running";
    sliderLock();
    setTimeout(() => {
      path.style.animationPlayState = "paused";
      sliderUnlock();
    }, timePerSlide * 0.35); //time in ms
  }



  //Run functions
    
    //lineDrawSection();

/*==================== END OF: Line Animation Functions ====================*/
  

/*===== ==================== =====*/
/*===== ==================== =====*/
/*===== SLIDER FUNCTIONALITY =====*/
/*===== ==================== =====*/
/*===== ==================== =====*/

    //define target elements
      const controlNext = document.querySelector('#control-next');
      const controlPrev = document.querySelector('#control-prev');
      const controlInitial = document.querySelector('#control-initial');
      const controlBackToStart = document.querySelector('#control-back-to-start');
      let docBody = document.querySelector('body');
      //control state vars
      const bodyTarget = document.querySelector('body');
      const controlStateAttr = 'data-control-state';
      const controlColorAttr = 'data-control-color';
      bodyTarget.setAttribute("data-reached-slide", "1");


    //simple combined functions for ease-of-use
      /*===== Detection Functions =====*/
        function controlState(slideNumber){
          //primary control track - button visiblity
            if(slideNumber == '1'){
              bodyTarget.setAttribute(controlStateAttr,'firstSlide');
            } else if(slideNumber == '5'){
              bodyTarget.setAttribute(controlStateAttr,'lastSlide');
            } else{
              bodyTarget.setAttribute(controlStateAttr,'general');
            }
          //secondary control track - colors
            if(slideNumber == '1'){
              bodyTarget.setAttribute(controlColorAttr,'darkBlueBackground');
            } else if(slideNumber == '2'){
              bodyTarget.setAttribute(controlColorAttr,'whiteBackground');
            } else if(slideNumber == '3'){
              bodyTarget.setAttribute(controlColorAttr,'lightBlueBackground');
            } else if(slideNumber == '4'){
              bodyTarget.setAttribute(controlColorAttr,'whiteBackground');
            } else if(slideNumber == '5'){
              bodyTarget.setAttribute(controlColorAttr,'darkBlueBackground');
            } else{
              //exceeded number of slides
              //console.error("error: out of bounds for control scheme")
            }
        }

        function slideDetect(){
          let currentSlide = foregroundSlider.swiper.activeIndex;
          let reachedSlide = bodyTarget.getAttribute("data-reached-slide");
          currentSlide = currentSlide +1; // +1 to account for 0 index
            if(currentSlide <= reachedSlide){
              //do nothing, already reached this slide
            } else {
              reachedSlide = currentSlide;
              bodyTarget.setAttribute("data-reached-slide", reachedSlide);
              //check if last slide
              if(reachedSlide == 5){
                lineDrawSectionShort();
              }else{
                lineDrawSection();
              }
              
            }

          //set new data
            bodyTarget.setAttribute("data-current-slide",currentSlide);
            controlState(currentSlide);
          //debug info
            //console.log("slideDetect() function | CURRENT SLIDE: ",currentSlide);
          return currentSlide; 
        }

        function slideDetectDirection(){
          //slider is on last slide in the series
          foregroundSlider.addEventListener('reachend', (event) => {
            //console.log(' ==== lastSlide ===== ');
            //lineDrawSectionShort();
            lastSlide = true;
          });

          foregroundSlider.addEventListener('slidenexttransitionend', (event) => {
            //console.log('slideDetectDirection() | NEXT');
            if(lastSlide == true){
              if(lastSlideExecute == true){
                //do nothing, deactivates this code
              } else{
                //lineDrawSectionShort();
                lastSlideExecute = true;
              }
            }else{
              //do nothing, code moved for optimization
            }
          });

          foregroundSlider.addEventListener('slideprevtransitionend', (event) => {
            //console.log('slideDetectDirection() | PREV');
          });
        }

      /*===== Abitrary Back/Forth Control Functions =====*/
        //NOTE: only foreground slider needs to move, they're tied together
        function nextSlide(){
          foregroundSlider.swiper.slideNext();
          //slideDetect();
        }
        function prevSlide(){
          foregroundSlider.swiper.slidePrev();
          //slideDetect();
        }
        function firstSlide(){
          foregroundSlider.swiper.slideTo(0, 1000);
          //slideDetect();
        }

  

/*==================== END OF: Swiper Control/Behavior Functions ====================*/
  

/*===== ============= =====*/
/*===== ============= =====*/
/*===== RUN FUNCTIONS =====*/
/*===== ============= =====*/
/*===== ============= =====*/

  /*===== Event Listener Triggers =====*/
    //click actions
    controlNext.addEventListener('click', () => {
      nextSlide();
    });
    controlPrev.addEventListener('click', () => {
      prevSlide();
    });
    controlInitial.addEventListener('click', () => {
      nextSlide();
    });
    controlBackToStart.addEventListener('click', () => {
      firstSlide();
    });

    foregroundSlider.addEventListener('slidechange', (event) => {
      //console.log('slide changed');
      slideDetect();
    });

  /*===== on-load actions, run immediately/continuously =====*/
    foregroundSlider.swiper.slideTo(0, 0);    
    slideDetect();
    slideDetectDirection();
    lineDrawStart();
    
  