import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";
import kanye from "./kanye.png";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function submitSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
    let ApiKey = "a7a6554f85t5e58398103479eoba472e";
    let ApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${ApiKey}`;
    let headers = {
      Authorization: `
Bearer ${ApiKey}`,
    };

    axios.get(ApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitSearch();
  }
  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    submitSearch();
  }

  if (loaded) {
    return (
      <div className='Dictionary'>
        <div className='row'>
          <div className='col-5 galery'>
            {" "}
            <Photos photos={photos}/>{" "}
          </div>
          <div className='col-6'>
            <h1>{keyWord}</h1>
            <div className='form-inline'>
              <div className='flex'>
                <form className='input-section' onSubmit={handleSubmit}>
                  <input className='input-field' type='search' placeholder='   ....' defaultValue={props.defaultKeyword} onChange={handelKeywordChange}/>
                </form>
              </div>
            </div>

            <Results results={results}/>
          </div>

          <div className='col-1 credits'>
            <img src={kanye} className='reactLogo' alt='react logo'/>
          </div>
        </div>
      </div>
    );
  } else {
    load();
  }
}
