import { useState } from "react";
import WebsiteBlocker from "./components/WebsiteBlocker";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <WebsiteBlocker />
    </div>
  );
}

export default App;
