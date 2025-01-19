
import ChildS from "./test-s"

const index = ({count, setCounter, getDatas}) => {


    console.log("B component re rendering.!!!");


    return(
        <div className="w-auto bg-red-100  h-auto p-4 m-5 shadow-md rounded-md">
            <h1>
                test: 
            </h1>
            <ChildS count={count} setCounter={setCounter} getDatas={getDatas}/>
        </div>
    )
}

export default index;