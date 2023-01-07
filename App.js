import React from "react";
import Entry from "./Entry";
import emojisArray from "./Emojipedia";
import Heading from "./Heading";

function creatProps(emojisArray) {
  return <Entry
    emoji={emojisArray.emoji}
    name={emojisArray.name}
    definition = {emojisArray.description}
  />
}

function App() {
  return (
    <div id="catch">
      {emojisArray.map(creatProps)}
    </div>
  );
}

export default App;
