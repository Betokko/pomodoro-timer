import { useState, useEffect } from "react";

function App() {
  const initialTime = 25 * 60;
  const [time, setTime] = useState(initialTime);
  const [isCounting, setIsCounting] = useState(false);
  const getPad = (num) => num.toString().padStart(2, "0") 
  const minutes = getPad(Math.floor(time / 60))
  const seconds = getPad(time % 60)

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTime((time) => (time >= 1 ? time - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isCounting]);

  const start = () => {
    setIsCounting(true);
  };
  const pause = () => {
    setIsCounting(false);
  };
  const stop = () => {
    setIsCounting(false);
    setTime(25 * 60);
  };


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-200">
      <div className="text-9xl text-red-600 cursor-default">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="flex justify-center text-green-600">
        <button
          disabled={isCounting}
          onClick={start}
          className={`hover:text-green-700 disabled:text-red-400 ${
            isCounting && "animate-spin"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          disabled={!isCounting}
          onClick={pause}
          className="hover:text-green-700 disabled:text-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <button
          disabled={initialTime === time}
          onClick={stop}
          className="hover:text-green-700 disabled:text-red-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
