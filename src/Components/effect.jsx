import React, { useEffect, useState } from "react";

const Effect = () => {
  const [effect, setEffect] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();
    // console.log("Effect is executed");
    document.title = `You clicked ${effect} times`;
    let interval = setInterval(() => {
      console.log("Effect is executed");
    }, 2000);
    return () => {
      clearInterval(interval);
      abortController.abort();//cleanup for API calls
    }; //cleanup code
    //AbortController.abort()
    // Aborts a DOM request before it has completed. This is able to abort fetch requests, consumption of any response bodies, and streams.
    //If we use asynchronous execution, the process doesnot stop even if we unmount the DOM, so when we unmount the DOM, we have to cancell all the web API used
    // return () => abortController.abort();//A cleanup function
  }, [effect]);
  //if we passs no argument as the second paramenter then the useeffect will be executed after every render
  //if we pass no argument as the second paramenter then the useeffect will only execute for the initial render

  return (
    <>
      <button onClick={() => setEffect((prev) => prev + 1)}>{effect}</button>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setNumber((prev) => prev + 1)}>{number}</button>
    </>
  );
};

export default Effect;
