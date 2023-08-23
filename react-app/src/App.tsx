import { useState } from "react";
import Notes from "./componenets/Notes";

function App() {
  const [readText, onReadText] = useState("");
  return (
    <div>
      <Notes />
    </div>
  );
}

export default App;
