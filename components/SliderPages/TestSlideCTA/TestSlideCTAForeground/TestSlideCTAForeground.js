/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import pageStyles from '@styles/pages.module.scss'


export default function TestSlideCTAForeground({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.TestSlideCTAForeground}>
      
      <div className={componentStyles.textSection} data-testing>
        <h2>[HEADLINE]</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <a
            className={pageStyles.buttonMain} 
            href="#"
          >GROW WITH US</a>
      </div>
    </div>
  )
}
