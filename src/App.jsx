import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>counter : {count}</h2>
    </>
  );
}

export default App;
