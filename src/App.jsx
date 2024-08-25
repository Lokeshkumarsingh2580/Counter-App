import { useState } from "react";
import Button from "./Comp/Button";

const App = () => {
  const [count, setCount] = useState(0);
  const [buttonText, setButtonText] = useState(true);

  function sum(e) {
    const text = e.target.innerText;
    if (text === "+") {
      setCount(count + 1);
      setButtonText(true);
    } else if (text === "-" && count > 0) {
      setCount(count - 1);
      setButtonText(false);
    }
  }

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex flex-col  max-w-sm h-screen items-center justify-center">
        <h1 className="font-bold text-5xl text-green-500">Counter</h1>
        <div className="flex justify-between w-full p-2 text-3xl">
          <Button sum={sum}>+</Button>
          <Button sum={sum}>-</Button>
        </div>
        <p
          className="font-semibold text-2xl"
          style={{ color: count > 0 && buttonText ? "green" : "red" }}
        >
          Count: {count}
        </p>
      </div>
    </div>
  );
};

export default App;
