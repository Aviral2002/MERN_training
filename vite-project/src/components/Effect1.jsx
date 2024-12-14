








import React, { useEffect, useState, useRef} from 'react'

const Effect1 = () => {

    const [count, setCount] = useState(0);

    //useRef demo

    let a = useRef(0)
    let btnRef = useRef();

    useEffect(() => {
        a.current = a.current + 1;
        console.log(`Value of a is ${a.current}`)
        btnRef.current.style.color = 'yellow'
    }, [count])

    // useEffect(() => {

    //     //Runs while component is rendered
    //     console.log(`rendering ${count}`);


    //     //clean up function that runs when the component is unmounted from DOM
    //     return() => {
    //         console.log(`value of count ${count} is removed`)
    //     }
        
    // }, [count])
  return (
    <>
    <div style = {{backgroundColor : 'blue'}}>
    <div style={{marginTop : '30px', backgroundColor : 'red'}}>
        useEffect and useRef Demo
    </div>

    <div>
        <h2>{count}</h2>
        <button style={{backgroundColor : 'black'}}ref = {btnRef} onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    </div>
    </>
  )
}

export default Effect1