/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Link from 'next/link'


//import Button1 from '@components/Button1'
import FullScreenOpenIcon from '@components/SVGComponents/FullScreenOpenIcon'
import FullScreenCloseIcon from '@components/SVGComponents/FullScreenCloseIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function FullScreenButton({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);
  useEffect(() => {
    //vars
    let FullScreenButton = document.querySelector('#FullScreenButton');

    // Function to toggle full-screen mode
    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        enterFullScreen();
        FullScreenButton.setAttribute("data-state", "fullscreen");
      } else {
        exitFullScreen();
        FullScreenButton.setAttribute("data-state", "not-fullscreen");
      }
    }

    function checkFullScreen() {
      if (!document.fullscreenElement) {
        //enterFullScreen();
        FullScreenButton.setAttribute("data-state", "fullscreen");
      } else {
        //exitFullScreen();
        FullScreenButton.setAttribute("data-state", "not-fullscreen");
      }
    }
    

    // Function to enter full-screen mode
    function enterFullScreen() {
      let docElement = document.documentElement;
      docElement.requestFullscreen();
      /*if (docElement.requestFullscreen) {
        docElement.requestFullscreen();
      } else if (docElement.mozRequestFullScreen) { // Firefox
        docElement.mozRequestFullScreen();
      } else if (docElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        docElement.webkitRequestFullscreen();
      } else if (docElement.msRequestFullscreen) { // IE/Edge
        docElement.msRequestFullscreen();
      }*/
    }

    // Function to exit full-screen mode
    function exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }

    // Example usage: Toggle full-screen mode on a button click
    FullScreenButton.addEventListener('click', toggleFullScreen);
  });

  return (
    <div 
      id="FullScreenButton"
      className={componentStyles.FullScreenButton}
      data-state="not-fullscreen"
    >
      <div className={componentStyles.open}>
        <FullScreenOpenIcon/>
      </div>
      <div className={componentStyles.close}>
        <FullScreenCloseIcon/>
      </div>
    </div>
  )
}
