/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import SimpleHeader from '@components/SimpleHeader'

//Slide 1
  import Slide1Foreground from '@components/SliderPages/Slide1/Slide1Foreground'
  import Slide1Background from '@components/SliderPages/Slide1/Slide1Background'

//Slide 2
  import Slide2Foreground from '@components/SliderPages/Slide2/Slide2Foreground'
  import Slide2Background from '@components/SliderPages/Slide2/Slide2Background'

//Slide 3
  import Slide3Foreground from '@components/SliderPages/Slide3/Slide3Foreground'
  import Slide3Background from '@components/SliderPages/Slide3/Slide3Background'

//Test Slides
import TestSlideCTAForeground from '@components/SliderPages/TestSlideCTA/TestSlideCTAForeground'
import TestSlideCTABackground from '@components/SliderPages/TestSlideCTA/TestSlideCTABackground'

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

    //initialize Swiper instances with options
        

    //simple combined functions for ease-of-use
      function nextSlide(){
        foregroundSlider.swiper.slideNext();
        //backgroundSlider.swiper.slideNext();
      }
      function prevSlide(){
        foregroundSlider.swiper.slidePrev();
        //backgroundSlider.swiper.slidePrev();
        console.log(backgroundSlider.swiper.activeIndex);
      }
      function firstSlideDetect(){
        let currentSlide = foregroundSlider.realIndex;
        //console.log('current slide: ',currentSlide);
        //console.log(backgroundSlider.swiper.activeIndex);
      }

    //click actions
      controlNext.addEventListener('click', () => {
        nextSlide();
        firstSlideDetect();
      });
      controlPrev.addEventListener('click', () => {
        prevSlide();
        firstSlideDetect();
      });
      controlInitial.addEventListener('click', () => {
        nextSlide();
        controlInitial.setAttribute("data-visible", "false");
      });

    //progress actions
      foregroundSlider.addEventListener('swiperslidechange', (event) => {
        console.log('slide changed');
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
          /*slides-per-view="1" 
          css-mode="true"
          //touch-mode="false"*/
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

          <swiper-slide>Slide 4</swiper-slide>
                    
          <swiper-slide>
            <TestSlideCTAForeground/>
          </swiper-slide>

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

          <swiper-slide>Slide 4</swiper-slide>

          <swiper-slide>
            <TestSlideCTABackground/>
          </swiper-slide>

        </swiper-container>
      </div>
      
      {/*CONTROL SECTION - Z-INDEX: 500 */}
      <div className={componentStyles.controls}>
        <div 
          id="control-prev"
          className={componentStyles.controlButton}
          data-visible="true"
          data-control="prev"
        >[PREV SLIDE]</div>
        <div 
          id="control-next"
          className={componentStyles.controlButton}
          data-visible="true"
          data-control="next"
        >[NEXT SLIDE]</div>
        <div 
          id="control-initial"
          className={componentStyles.controlButton}
          data-visible="true"
          data-control="next"
        >[INITIAL - NEXT SLIDE]</div>
      </div>
    </div>
  )
}
