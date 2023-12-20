import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className='App'>
      <div className='container mainApp'>
        <main>
          <Dictionary defaultKeyword='real'/>
        </main>
      </div>
    </div>
  );
}

export default App;
