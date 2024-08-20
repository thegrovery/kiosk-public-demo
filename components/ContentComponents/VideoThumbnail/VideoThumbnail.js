/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import ZoomIcon from '@components/SVGComponents/ZoomIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function VideoThumbnail({ 
  //Props
  thumbnail, icon, name, url
}) {

  //console.log(author);

  //Currently using PDFModalfor corresponding modal
  useEffect(() => {
    
  });

  return (
    <div 
      className={componentStyles.VideoThumbnail}
      /*onClick={handleClick(this)}*/
      data-modal-open='video'
      data-video-url={url}
      data-video-name={name}
    >

      <div className={componentStyles.thumbnail}>
        {thumbnail ? 
          <img src={thumbnail} alt="" />
          :
          <img src="/images/thumbnails/oncologyEnrollmentForm.png" alt="" />
        }
        <div className={componentStyles.thumbnailIcon}>
          <ZoomIcon/>
        </div>
      </div>

      <div className={componentStyles.text}>
        {name ? name : "video Name"}
      </div>

    </div>
  )
}
