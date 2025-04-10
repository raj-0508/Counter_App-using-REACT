import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Counter cannot go below 0");
    }
  };
  const intervalRef = useRef(null);

  const autoIncrement = () => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const stopAutoIncrement = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const reset = () => setCount(0);

  return (
    <>
      <div className="counter-app shadow-lg rounded-lg p-8 bg-slate-600 mx-auto mt-20">
        <h1 className="text-center text-3xl font-bold mb-4">Counter App</h1>
        <p className="text-center text-xl mb-4">
          A simple counter app using React
        </p>
        <p className="text-center text-3xl mb-4">Current Count:</p>
        <div className="counter-display text-4xl m-7">{count}</div>
        <div className="flex flex-col items-center gap-3.5">
          <div className="button-group flex flex-wrap justify-center gap-3.5">
            <button
              onClick={increment}
              className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
            >
              Increase
            </button>

            <button
              onClick={reset}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mx-2"
            >
              Reset
            </button>
            <button
              onClick={decrement}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Decrease
            </button>
          </div>

          <div className="button-group flex flex-wrap justify-center gap-3.5">
            <button
              onClick={autoIncrement}
              className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
            >
              Auto Increase
            </button>
            <button
              onClick={stopAutoIncrement}
              className="bg-green-500 text-white px-4 py-2 rounded-lg ml-2"
            >
              Stop Auto Increase
            </button>
          </div>
        </div>
        <p className="text-center text-lg mt-4">Made with ❤️ using React</p>
      </div>
    </>
  );
}

export default App;
