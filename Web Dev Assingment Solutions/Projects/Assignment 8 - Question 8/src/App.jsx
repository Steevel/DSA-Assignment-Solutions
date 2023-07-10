import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
