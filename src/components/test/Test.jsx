import { useEffect, useRef, useState } from "react";
import "./style.css";
function Test() {
  // useRef
  const divRef = useRef(false);
  const [counter, setCounter] = useState(0);
  //   const [mount, setMount] = useState(false);
  useEffect(() => {
    // alert(`You added ${counter} flowers`);
    // console.log(divRef.current);
    if (!divRef.current) {
      divRef.current = true;
      return;
    }
    console.log("updated");
  }, [counter]);
  return (
    <div id="test">
      <h1>This is test component</h1>
      <h3>Flowers: {counter} </h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

export default Test;
