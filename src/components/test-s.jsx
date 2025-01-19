


const index = ({ count, setCounter, getDatas}) => {


    const decrement = () => {
        setCounter(count-1)
    }

    console.log("C component re rendering.!!!");


    return (
        <div className="w-auto bg-yellow-100 h-auto p-4 m-5 shadow-md rounded-md">
            <h1>
                test: C
            </h1>

            <button onClick={decrement} className=" mt-3 py-1 px-5 rounded-md bg-blue-600 text-slate-200">
                Decrease
            </button>


            <button onClick={()=>getDatas([5,6,7,8,9])}  className=" mt-3 py-1 px-5 rounded-md bg-green-600 text-slate-200">
                sent data
            </button>
        </div>
    )
}

export default index;