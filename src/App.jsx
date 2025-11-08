import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>branch A</h2>
      <h2>counter : {count}</h2>
      <h2>branche B</h2>
    </>
  );
}

export default App;
