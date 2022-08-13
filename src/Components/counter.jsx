import React,{ useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);//Array destructuring is used here
    const incrementCountbyFive = ( ) =>{
        for (var i=0; i<5; i++) {
            setCount((prevCount) => prevCount + 5);
        }
    }

  return (
    <div>
      <button onClick={() => setCount((prev) => prev+1)}>
        Count{count}
      </button>
      <button onClick={incrementCountbyFive}>
        Count{count}
      </button>
    </div>
  );
};

export default Counter;
