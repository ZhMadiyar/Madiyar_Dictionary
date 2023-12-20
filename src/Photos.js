import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className='Photos'>
        <div className='row'>
          {props.photos.map(function (photo, index) {
            return (
              <div className='col-12' key={index} alt='img'>
                <a href={photo.src.original} rel='noopener noreferrer' target='_blank'>
                  <img src={photo.src.landscape} alt='img' className='img-fluid'/>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}