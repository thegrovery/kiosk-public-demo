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

/*===== Styles =====*/
  import componentStyles from './styles.module.scss'


export default function PageSlider({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  useEffect(() => {

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
            className={"controlButton " + componentStyles.controlButton}
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
