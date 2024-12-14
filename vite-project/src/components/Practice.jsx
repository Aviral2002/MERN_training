import React from 'react'

const Practice = ({number}) => {

    const sumTotal = number.reduce((accumulator, currentValue) =>
     accumulator + currentValue, 0);
  return (
    <>
    <div style={{backgroundColor : 'brown'}}>
    <h2 style = {{backgroundColor : 'red'}}>Reduce Function</h2>
    <h3>Array : {JSON.stringify(number)}</h3>
    <div>Total sum is {sumTotal}</div>
    </div>
    </>
  )
}

export default Practice