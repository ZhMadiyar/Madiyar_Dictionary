import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";

export default function Pronetic(props) {
  let audioElement = new Audio(props.phonetic.audio);
  function handleClick() {
    audioElement.play();
  }

  return (
    <div className='Phonetic'>
      <FontAwesomeIcon className='Audio-button fa-2xl' icon={faVolumeOff} onClick={handleClick}/>
      <span className='text'>{props.phonetic.text}</span>
    </div>
  );
}