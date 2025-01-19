import { useState } from "react";
import ChildA from "./components/test-a"

const App = () => {


  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4]);

  const getData = (data) => {
    setArr([...arr, ...data ])
  };

  console.log("Parent App component re rendering.!!!");
  


  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="bg-blue-50 p-4  shadow-md mx-auto w-[600px] rounded-sm mt-6">
      <h1>
        PARENT {count}
      </h1>

      <ul>
        {
          arr.map((item, index) => {
            return (
              <li key={index}>
                List Item: {item}
              </li>
            )
          })
        }
      </ul>

      <button onClick={increment} className="py-1 px-5 rounded-md bg-blue-600 text-slate-200">
        increment
      </button>

      <ChildA count={count} setCounter={setCount} getDatas={getData} />
    </div>
  )
}


export default App;