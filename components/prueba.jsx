import { useEffect, useState } from "react";

const Prueba = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //A
    console.log("A");
  });
  useEffect(() => {
    //B
    console.log("B");
  }, [count]);
  useEffect(() => {
    //A
    console.log("C");
  }, []);

  const click = () => {
    setCount((v) => v + 1);
  };
  return (
    <div>
      <button onClick={click}>Click</button>
      <span>{count}</span>
    </div>
  );
};

export default Prueba;
