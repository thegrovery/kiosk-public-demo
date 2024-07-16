/*===== Components =====*/
  import React, { useState, useEffect } from 'react';
  import { router } from 'next/router'
  import Head from 'next/head'
  import Link from 'next/link'
  import interact from 'interactjs'
  import Layout, { siteData } from '@components/layout'
  

  import SimpleHeader from '@components/SimpleHeader'

  //New Components
  import PageSlider from '@components/PageSlider'

/*===== Styles =====*/
  import pageStyles from '@styles/pages.module.scss'

/*===== Site Data =====*/
  import data from "@data/data.json"

/*===== Posts Data =====*/
  import { getSortedPostsData } from '@lib/posts'
  export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

/*===== Page Content =====*/
export default function Home({ allPostsData }) {
  
  //console.log(author);
   useEffect(() => {
   
   });

  return (
    <Layout home pageActionState="lvl-1" >
      
      <Head>
        {/*<title>KIOSK Demo | {siteData.siteTitleBase}</title> */}
        <title>KIOSK Demo | Grovery Kiosk Experience</title>
      </Head>

      <div className={pageStyles.pageLayout}>
        <div className={pageStyles.mainSection}>

          <PageSlider/>
          
        </div>        
      </div>
      
    </Layout>
  )
}
