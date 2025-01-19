

 import ChildB from "./test-b";


const index = ({count, setCounter, getDatas}) => {

    console.log("A component re rendering.!!!");

    return(
        <div className="w-auto bg-orange-100 h-auto p-4 m-5 shadow-md rounded-md">
            <h1>
                test: A 
            </h1>
            <ChildB count={count} setCounter={setCounter} getDatas={getDatas}/>
        </div>
    )
}

export default index;