/* ==================================================
  PageSlider - main component for this project
  
  Description:  layered sliders that provide the main 
                content of this KIOSK experience
  - Number of slides: 5
================================================== */

/*===== Components =====*/
  //General functional components
    import React, { useState, useEffect } from 'react';
    import Link from 'next/link'

  //Simple components
    import SimpleHeader from '@components/SimpleHeader'

  //Slide components - basically this project's 'pages'
  //Slide 1
    import Slide1Foreground from '@components/SliderPages/Slide1/Slide1Foreground'
    import Slide1Background from '@components/SliderPages/Slide1/Slide1Background'

  //Slide 2
    import Slide2Foreground from '@components/SliderPages/Slide2/Slide2Foreground'
    import Slide2Background from '@components/SliderPages/Slide2/Slide2Background'

  //Slide 3
    import Slide3Foreground from '@components/SliderPages/Slide3/Slide3Foreground'
    import Slide3Background from '@components/SliderPages/Slide3/Slide3Background'

  //Slide 4
    import Slide4Foreground from '@components/SliderPages/Slide4/Slide4Foreground'
    import Slide4Background from '@components/SliderPages/Slide4/Slide4Background'

  //Slide 5
    import Slide5Foreground from '@components/SliderPages/Slide5/Slide5Foreground'
    import Slide5Background from '@components/SliderPages/Slide5/Slide5Background'


  //import Button1 from '@components/Button1'

/*===== Styles =====*/
  import componentStyles from './styles.module.scss'


export default function PageSlider({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  useEffect(() => {
    //console.log(author);
    /*===== =================== =====*/
    /*===== TOP-LEVEL VARIABLES =====*/
    /*===== =================== =====*/
      const foregroundSlider = document.querySelector('#foregroundSlider');
      const backgroundSlider = document.querySelector('#backgroundSlider');

    /*===== ============================ =====*/
    /*===== LINE ANIMATION FUNCTIONALITY =====*/
    /*===== ============================ =====*/
      //define vars
      let path = document.querySelector('#lineElement path');
      let length = path.getTotalLength();
      let screenWidth = window.screen.availWidth;
      let numberOfSlides = 5;
      let timePerSlide = 2200; //in ms
      let totalTime = timePerSlide * numberOfSlides;
      let lastSlide = false;
      let lastSlideExecute = false;

      //console logs
      console.log("line path length: ", length);
      console.log("screen width: ", screenWidth);

      console.log("numberOfSlides: ", numberOfSlides);
      console.log("timePerSlide: ", timePerSlide);
      console.log("totalTime: ", totalTime);

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
        console.log("sliderLock()");
        foregroundSlider.allowSlideNext="false";
        foregroundSlider.allowSlidePrev="false";
      }
      function sliderUnlock(){
        console.log("sliderUnlock()");
        foregroundSlider.allowSlideNext="true"
        foregroundSlider.allowSlidePrev="true"
      }
      
      function lineDrawStart(){
        path.style.animationPlayState = "paused";
        sliderLock();
        //initial delay
        setTimeout(() => {
          path.style.animationPlayState = "running";
        }, 2000); //time in ms

        //initial animation + delay time
        setTimeout(() => {
          path.style.animationPlayState = "paused";
          sliderUnlock();
        }, timePerSlide + 2000); //time in ms
        
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
        }, timePerSlide *0.45); //time in ms
      }



      //Run functions
        lineDrawStart();
        //lineDrawSection();

    /*===== ==================== =====*/
    /*===== SLIDER FUNCTIONALITY =====*/
    /*===== ==================== =====*/

      //define target elements
        const controlNext = document.querySelector('#control-next');
        const controlPrev = document.querySelector('#control-prev');
        const controlInitial = document.querySelector('#control-initial');
        const controlBackToStart = document.querySelector('#control-back-to-start');
        const docBody = document.querySelector('body');
        //control state vars
        const bodyTarget = document.querySelector('body');
        const controlStateAttr = 'data-control-state';
        const controlColorAttr = 'data-control-color';
        bodyTarget.setAttribute("data-reached-slide", "1");


      //simple combined functions for ease-of-use
        //detection functions
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
                console.error("error: out of bounds for control scheme")
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
              console.log("slideDetect() function | CURRENT SLIDE: ",currentSlide);
            //return currentSlide; 
          }

          function slideDetectDirection(){
            
            foregroundSlider.addEventListener('reachend', (event) => {
              console.log(' ==== lastSlide ===== ');
              //lineDrawSectionShort();
              lastSlide = true;
            });

            foregroundSlider.addEventListener('slidenexttransitionend', (event) => {
              console.log('slideDetectDirection() | NEXT');
              if(lastSlide == true){
                if(lastSlideExecute == true){
                  //do nothing, deactivates this code
                } else{
                  //lineDrawSectionShort();
                  lastSlideExecute = true;
                }
                console.log("lastSlide: ", lastSlide);
                console.log("lastSlideExecute: ", lastSlideExecute);
              }else{
                //lineDrawSection();
                console.log("lastSlide: ", lastSlide);
                console.log("lastSlideExecute: ", lastSlideExecute);
              }
              
            });
            foregroundSlider.addEventListener('slideprevtransitionend', (event) => {
              console.log('slideDetectDirection() | PREV');
            });
          }

          foregroundSlider.addEventListener('slidechange', (event) => {
            //console.log('slide changed');
            slideDetect();
          });

          function scrollDetect(){
            window.onwheel = e => {
              if(docBody.getAttribute('data-slider-scroll') === 'false'){
                //modal is open, no scrolling
              }else{
                if(e.deltaY >= 0){
                  // Wheel Down
                  console.log('Down');
                  nextSlide();
                } else {
                  // Wheel Up
                  console.log('Up');
                  prevSlide();
                }
              }
            }
          }
          
        //control functions
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

    /*===== RUN FUNCTIONS =====*/
      //on-load actions, run immediately
      slideDetect();
      //scrollDetect(); //deprecated in favor of swiper scroll method
      slideDetectDirection();
        
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

    
  }); //END useEffect()

  return (
    <div className={componentStyles.PageSlider}>

      {/* HEADER LAYER - Z-INDEX: 200 */}
      <div className={componentStyles.header}>
        <SimpleHeader/>  
      </div>
      
      {/* FOREGROUND SLIDER LAYER - Z-INDEX: 300 */}
      <div className={componentStyles.foregroundSlider}>
        <swiper-container 
          id="foregroundSlider"
          scrollbar="true"
          controller-control="#backgroundSlider"
          preventClicks="false"
          mousewheel="true"
          hash-navigation="true"
        >
          <swiper-slide data-hash="slide_1">
            <Slide1Foreground/>
          </swiper-slide>

          <swiper-slide data-hash="slide_2">
            <Slide2Foreground/>
          </swiper-slide>

          <swiper-slide data-hash="slide_3">
            <Slide3Foreground/>
          </swiper-slide>

          <swiper-slide data-hash="slide_4">
            <Slide4Foreground/>
          </swiper-slide>
                    
          <swiper-slide data-hash="slide_5">
            <Slide5Foreground/>
          </swiper-slide>

          <div id="lineElement" className={componentStyles.lineElement}>
            {/*<img src="/images/line-full-length.svg" alt=""/>*/}

            <svg width="11634" height="712" viewBox="0 0 11634 712" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-17.9685 422.119C297.914 250.22 888.515 399.178 1132.02 484.711C1408.93 581.977 1863.71 510.741 2213.3 359.528C2503.05 234.201 2893.09 306.605 3273.44 543.329C3654.94 780.76 4229.11 732.821 4602.06 552.27C5012.51 353.562 5212.09 301.659 5563.9 310.845C5975.09 321.581 7085.35 670.284 7566.72 478.175C8048.86 285.758 8324.12 -150.791 9139.64 65.4463C9782.08 235.791 10028.5 458.259 10557 423.113C10953.2 396.766 11056.4 118.655 11633 101.213" stroke="#00DBBE" strokeWidth="12.87"/>
            </svg>

          </div>
        </swiper-container>
      </div>
      
      {/* BACKGROUND SLIDER LAYER  - Z-INDEX: 100 */}
      <div className={componentStyles.backgroundSlider}>
        <swiper-container 
          id="backgroundSlider"
          controller-by="#foregroundSlider"
        >
          <swiper-slide>
            <Slide1Background/>
          </swiper-slide>

          <swiper-slide>
            <Slide2Background/>
          </swiper-slide>

          <swiper-slide>
            <Slide3Background/>
          </swiper-slide>

          <swiper-slide>
            <Slide4Background/>
          </swiper-slide>

          <swiper-slide>
            <Slide5Background/>
          </swiper-slide>
        </swiper-container>
      </div>
      
      {/*CONTROL SECTION - Z-INDEX: 500 */}
      <div 
        className={componentStyles.controls}
        data-control-state=""
        data-style-state=""
      >
        {/*Group to create 'button | button' layout*/}
        <div className={componentStyles.nextPrevGroup}>
          
          {/*previous slide button*/}
          <div 
            id="control-prev"
            className={"controlButton ",componentStyles.controlButton}
            data-visible="true"
            data-control="prev"
          >
            <div className={componentStyles.text}>
              Back
            </div>
            <div className={componentStyles.icon}>
              <img src="/images/control-button-icon.svg" alt=""/>
            </div>
          </div>

          {/*next slide button*/}
          <div 
            id="control-next"
            className={componentStyles.controlButton}
            data-visible="true"
            data-control="next"
          >
            <div className={componentStyles.text}>
              Next
            </div>
            <div className={componentStyles.icon}>
              <img src="/images/control-button-icon.svg" alt=""/>
            </div>
          </div>

          {/*back to first slide button*/}
          <div 
            id="control-back-to-start"
            className={componentStyles.controlButton}
            data-visible="true"
            data-control="back-to-start"
          >
            <div className={componentStyles.text}>
              Back to Start
            </div>
            <div className={componentStyles.icon}>
              <img src="/images/control-button-icon.svg" alt=""/>
            </div>
          </div>

        </div>
        
        {/*initial/first slide button*/}
        <div 
          id="control-initial"
          className={componentStyles.controlButton}
          data-visible="true"
          data-control="initial"
        >
          <div className={componentStyles.text}>
            Scroll, Swipe, or Click to begin Xpo Connect experience
          </div>
          <div className={componentStyles.icon}>
            <img src="/images/control-button-icon.svg" alt=""/>
          </div>
        </div>

      </div>
    </div>
  )
}
