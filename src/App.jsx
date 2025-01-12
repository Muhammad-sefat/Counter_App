import { useState } from "react";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [initialVaue, setInitialValue] = useState(0);

  const handleReset = () => setCount(initialVaue);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleIncrementBy5 = () => setCount(count + 5);
  const handleDecrementBy5 = () => setCount(count - 5);
  const SetIntialValue = (e) => {
    const value = parseInt(e.target.value) || 0;
    console.log(value);
  };

  return (
    <>
      <div className="bg-gray-300 h-[100vh] flex justify-center items-center text-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Counter App</h2>
          <p className="text-4xl font-bold my-5">{count}</p>
          <input type="number" className="border-none rounded p-2" />
          <button className="border rounded ml-3 p-2 font-medium bg-green-600 text-white hover:bg-green-700">
            Set Initial Value
          </button>
          <div className="text-center mt-5">
            <button
              onClick={handleReset}
              className="bg-orange-600 text-white px-4 py-2 rounded-md font-medium m-2 hover:bg-orange-700"
            >
              Reset
            </button>

            <div>
              <button
                onClick={handleIncrement}
                className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium m-2 hover:bg-blue-600"
              >
                Increment
              </button>
              <button
                onClick={handleDecrement}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-medium m-2 hover:bg-red-600"
              >
                Decrement
              </button>
            </div>

            <div>
              <button
                onClick={handleIncrementBy5}
                className="bg-green-700 text-white px-4 py-2 rounded-md font-medium m-2 hover:bg-green-600"
              >
                IncrementBy 5
              </button>
              <button
                onClick={handleDecrementBy5}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-medium m-2 hover:bg-red-600"
              >
                DecrementBy 5
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
