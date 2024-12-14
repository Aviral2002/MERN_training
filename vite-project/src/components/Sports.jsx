import React, {useContext, useState } from 'react'
import { counterContext } from '../context/context'


const Sports = () => {


    const inpValue = useContext(counterContext)
    const [choice, setChoice] = useState()
    
    const handleSports = (event) => {

        if(event.target.checked){
            setChoice(event.target.value)
        }
    }
  return (
    <>
        <div style={{background:'silver'}}>
        <label>
            <input type='checkbox' value = 'hockey' onChange = {handleSports}></input>
            Hockey
        </label>
        <label>
            <input type='checkbox' value = 'tennis' onChange = {handleSports}></input>
            Tennis
        </label>
        <label>
            <input type='checkbox' value = 'cricket' onChange = {handleSports}></input>
            Cricket
        </label>
        <label>
            <input type='checkbox' value = {inpValue} onChange = {handleSports}></input>
            Todo import
        </label>


            <div style={{widh: '100px', height:'100px', background:'lightBlue'}}>
                <h1>User will play <span style={{color: 'black', fontWeight:'bolder'}}>{choice}</span></h1>
            </div>
        </div>
    </>
  )
}

export default Sports