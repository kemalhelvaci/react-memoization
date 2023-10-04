import React, { useState, useEffect, useMemo, useCallback } from "react";

const App = () => {
  console.log("App Rendered.");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const duplicate = () => {
    [...new Array(10000000)].forEach((item) => {});

    return count * 2;
  };

  const duplicateCount = duplicate();

  return (
    <div className="App">
      <p>
        Count: <code>{count}</code>
      </p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Count Arttır
      </button>
      <p>
        DuplicateCount: <code>{duplicateCount}</code>
      </p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>
        Text: <code>{text}</code>
      </p>
    </div>
  );
};

export default App;
