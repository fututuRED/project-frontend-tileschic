import { useState } from "react";
import FetchAbstractPaintings from "./component/FetchAbstractPaintings";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Abstract Art Gallery</h1>
        </header>
        <main>
          <FetchAbstractPaintings />
        </main>
      </div>
    </>
  );
}

export default App;
