/*===== Ultility Components =====*/
  import React, { useState, useEffect } from 'react';
  import Script from 'next/script'
  import Head from 'next/head'
  import Image from 'next/image'
  import { router } from 'next/router'
  import Link from 'next/link'
  import data from "@data/data.json"

/*===== 3rd Party JS Code =====*/
  //import interact from 'interactjs'
  import {isTablet, isSafari, isIPad13} from 'react-device-detect';
  import $ from 'jquery'
  import { GoogleTagManager } from '@next/third-parties/google'


/*===== Theme Components =====*/
  //import HeadAnalytics from '@components/HeadComponents/HeadAnalytics'
  //import HeadPWA from '@components/HeadComponents/HeadPWA'
  //import Sidebar from '@components/Sidebar'
  import Modal from '@components/Modal'
  import SmallScreenWarning from '@components/SmallScreenWarning'
  import IdleTimer from '@components/IdleTimer'
  import FullScreenButton from '@components/FullScreenButton'
  import VersionNotice from '@components/UtilityComponents/VersionNotice'
  import PrecacheControl from '@components/UtilityComponents/PrecacheControl'

  //import Functions from '@components/Functions'
  //import Analytics from '@components/Analytics'
  import AnalyticsTestButton from '@components/AnalyticsTestButton'

/*===== Styles =====*/
  import styles from './layout.module.scss'



/*===== Data Vars =====*/
  export const siteTitle = 'Grovery Kiosk Demo'
  export const siteData = data



export default function Layout({ 
  //PROPS
  children, home, card,
  access, enrollment, financial, resources,
  pageActionState, cardTooltipText, backButtonUrl
}) {
  
  useEffect(() => {
    /* ===== NOTES: ===== */
    /*
      Major functions are stored in the layout file here to keep them running only once in a single page app setting, otherwise they run multiple times per action
    */

    /* =============================== */
    /* ===== Global Action State ===== */
    /* =============================== */
      //define function
      //revised, fully dynamic function
      function updateActionState(thread, stateValue, delay) {
        let actionStateTarget = document.querySelector("#LayoutOuter");
        setTimeout(function() {
          let existingState = actionStateTarget.getAttribute("data-action-state-"+thread);
          actionStateTarget.setAttribute("data-action-state-"+thread, existingState+" "+stateValue);
        }, delay);
      }

      function clearActionState(thread, stateValue, delay) {
        let actionStateTarget = document.querySelector("#LayoutOuter");
        setTimeout(function() {
          actionStateTarget.setAttribute("data-action-state-"+thread, stateValue);
        }, delay);
      }

      
    
    /* =========================== */
    /* ===== Page Transition ===== */
    /* =========================== */
        updateActionState('transition', 'visible', 1000);
        function pageTransition(url, delay){
          console.log("page-transition: " + url + " | "+ delay);
          //router.prefetch(url); //prefetch next page
          clearActionState('transition', 'hidden', delay);
          setTimeout(function() {
            router.push(url);
          }, delay);
        } //END pageTransition function


    /* ================================== */
    /* ===== Page Transition Clicks ===== */
    /* ================================== */
      /* ===== Link Clicks ===== */
        let url = "";
        let delay = 1000;

        const pageTransitionLinks = document.querySelectorAll('[data-page-transition]');

        pageTransitionLinks.forEach(element => {
          element.addEventListener('click', () => {
            console.log("data-page-transition click");
            url = element.getAttribute("data-page-transition");
            delay = element.getAttribute("data-delay");
            pageTransition(url, delay);
          });
        });
          
      /* ===== Back Button Click ===== */
        const backButton = document.querySelectorAll('[data-page-back]');
        backButton.forEach(element => {
          element.addEventListener('click', () => {
            console.log("data-page-back click");
            updateActionState('transition', 'hidden', 0);
            window.history.back();
          });
        });

    
    /* ====================================== */
    /* ===== Content Overflow Detection ===== */
    /* ====================================== */
      // Select all elements with the data-attribute "data-target"
      const elements = document.querySelectorAll('[data-overflow-detect]');

      // Loop through each element and check if it has overflow content
      elements.forEach(element => {
        console.log("overflow element present");
        // Check if the element's scrollHeight is greater than its clientHeight
        if (element.scrollHeight > element.clientHeight) {
          console.log("overflow detected");
          // If overflow content is detected, add a class to the element
          element.setAttribute('data-overflow-detect', 'overflow');
        }
      });

      /* ===== Hide When Scrolled To Bottom ===== */

        // loop through each element
        elements.forEach(element => {
          // add a scroll event listener to each element
          element.addEventListener('scroll', () => {
            // check if the element's content is scrolled to the bottom
            const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
            // update the data-attribute value to true if scrolled to bottom, false otherwise
            
            if (atBottom) {
              console.log("overflow detected");
              // If overflow content is detected, add a class to the element
              element.setAttribute('data-overflow-detect', 'atBottom');
            }else{
              element.setAttribute('data-overflow-detect', 'overflow');
            }
          });
        });


    /* ================================== */
    /* ===== Browser/Device Detect  ===== */
    /* ================================== */
        function deviceDetect(){
          let element = document.querySelector("#LayoutOuter");
          if(isTablet){
            element.classList.add("detect--tablet");
          }
          if(isSafari){
            element.classList.add("detect--safari");
          }
          if(isIPad13){
            element.classList.add("detect--ipad");
          }
        }
        //run function
        deviceDetect();
 

    


  }); //END useEffect()

  return (
    <div 
      id="LayoutOuter" 
      className={styles.outer} 
      data-hidden="true" 
      data-action-state="initial"  
      data-action-state-load="initial"  
      data-action-state-transition="hidden"  
      data-action-state-tooltips="initial"
      data-action-state-cards="initial"
      data-action-state-cards-show="initial"
      data-action-state-cards-home-bg="initial"
      data-action-state-transition-screen="initial"
      data-action-state-page={pageActionState}
    >
      <Head>
        {/*STANDARD HEAD CONTENT*/}
          <link rel="icon" href="/favicon.png" />
          <meta
            name="description"
            content="Demo site for The Grovey's KIOSK product. A lightweight website that acts as a full-screen informational experience for in-person events and unique campaigns."
          />
          <meta property="og:image" content={`/images/BMSLogo.svg`}/>
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />

          {/* Default Fonts */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/> */}

        {/*COMPONENT IMPORTS*/}
          {/*<HeadAnalytics/>
          <HeadPWA/>*/}

        {/*PWA-RELATED*/}
          <link rel="manifest" href="/manifest.json" />
          <meta name="application-name" content="PWA App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Grovery Kiosk Demo" />
          <meta name="description" content="Demo site for The Grovey's KIOSK product. A lightweight website that acts as a full-screen informational experience for in-person events and unique campaigns." />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta name="theme-color" content="#007B98" />

          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

          <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />
          
          {/*<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />*/}
          <link rel="shortcut icon" href="/favicon.ico" />
          
      </Head>

      {/*Analytics Connection*/}
        <GoogleTagManager gtmId="GTM-P9HZ9592" />

      {/*Popups, Modals, Floating Buttons*/}
        <SmallScreenWarning/>
        {/*<FullScreenWidget/>*/}
        {/*<SupportModal/>*/}
        <Modal/>
        <FullScreenButton/>
      
      {/*Comment/Uncomment to control if IdleTimer is present*/}
      {/*Keep commented while working on development*/}
        {/*<IdleTimer/>*/}
            
      {/* MAIN SECTION */}
      <main className={styles.main}>
        
        {/* BREADCRUMBS */}
        {/*{!home && (
          <Container>
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          </Container>
        )}*/}
        
        <div id="mainContent" className={styles.mainContent}>
          {children}
        </div>

      </main>

      {/*Internal JS Scripts*/}
        <Script src="/scripts/modals.js" /> 
        <Script src="/scripts/analytics.js" /> 
        <Script src="/scripts/script.js" />
        <Script src="/scripts/slider.js" delay="50" />
    </div>
  )
}
