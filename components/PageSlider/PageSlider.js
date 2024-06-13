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

    //define target elements
      const foregroundSlider = document.querySelector('#foregroundSlider');
      const backgroundSlider = document.querySelector('#backgroundSlider');
      const controlNext = document.querySelector('#control-next');
      const controlPrev = document.querySelector('#control-prev');
      const controlInitial = document.querySelector('#control-initial');
      //control state vars
      const bodyTarget = document.querySelector('body');
      const controlStateAttr = 'data-control-state';
      const controlColorAttr = 'data-control-color';


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
          currentSlide = currentSlide +1; // +1 to account for 0 index
          bodyTarget.setAttribute("data-current-slide",currentSlide);
          controlState(currentSlide)
          console.log("slideDetect() function | CURRENT SLIDE: ",currentSlide);

          //return currentSlide; 
        }
        foregroundSlider.addEventListener('slidechange', (event) => {
          console.log('slide changed');
          slideDetect();
        });
        function scrollDetect(){
          window.onwheel = e => {
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
        


      //control functions
        //NOTE: only foreground slider needs to move, they're tied together
        //Run 
        function nextSlide(){
          foregroundSlider.swiper.slideNext();
          //slideDetect();
        }
        function prevSlide(){
          foregroundSlider.swiper.slidePrev();
          //slideDetect();
        }

    //on-load actions, run immediately
      slideDetect();
      scrollDetect();
      //foregroundSlider.setAttribute('focusableElements', 'p');

    //click actions
      controlNext.addEventListener('click', () => {
        nextSlide();
      });
      controlPrev.addEventListener('click', () => {
        prevSlide();
      });
      controlInitial.addEventListener('click', () => {
        nextSlide();
        //controlInitial.setAttribute("data-visible", "false");
      });

    

  });

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
        >
          <swiper-slide>
            <Slide1Foreground/>
          </swiper-slide>

          <swiper-slide>
            <Slide2Foreground/>
          </swiper-slide>

          <swiper-slide>
            <Slide3Foreground/>
          </swiper-slide>

          <swiper-slide>
            <Slide4Foreground/>
          </swiper-slide>
                    
          <swiper-slide>
            <Slide5Foreground/>
          </swiper-slide>

          <div className={componentStyles.lineElement}>
            <img src="/images/line-full-length.png" alt=""/>
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

        </div>
        
        {/*initial/first slide button*/}
        <div 
          id="control-initial"
          className={componentStyles.controlButton}
          data-visible="true"
          data-control="initial"
        >
          <div className={componentStyles.text}>
            Scroll to begin Xpo Connect experience
          </div>
          <div className={componentStyles.icon}>
            <img src="/images/control-button-icon.svg" alt=""/>
          </div>
        </div>

      </div>
    </div>
  )
}
