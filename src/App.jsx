import { useState } from "react";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-300 h-[100vh] flex justify-center items-center">
        <div>
          <h2>Counter App</h2>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
