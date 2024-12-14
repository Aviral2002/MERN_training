import React, {useState} from 'react'

const Color = () => {

    const [color, setColor] = useState()
    const [color1, setColor1] = useState()
    const [bg, setBg] = useState()
    const [bg1, setBg1] = useState()
    const [txt, setTxt] = useState()
    const [bg2, setBg2] = useState()



  return (
    <>
    <div style={{margin: '40px', backgroundColor : bg1, padding:'10px', border:'3px solid white'}}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
    <input  value={color}
        style={{marginRight :'50px'}}
      onChange={(e) => setColor(e.target.value)}
      type='text' placeholder='Enter color name'></input>

    <input  value={color1}
      onChange={(e) => setColor1(e.target.value)}
      type='text' placeholder='Enter color name'></input>

    </div>

    <button style={{marginRight :'50px'}} onClick={(e) => { e.stopPropagation(); setBg(color); }} >Change color</button>

    <button style={{marginLeft :'100px'}} onClick={(e) => { e.stopPropagation(); setBg1(color1); }} >Change color</button>

    <div style={{height:'100px', weight:'100px', backgroundColor: bg, border:'3px solid black', marginTop:'10px'}}>
        <input style= {{marginTop:'10px'}}onChange={(e) => setTxt(e.target.value)} type = 'text' value = {txt} placeholder='Change text color'></input>
        <button onClick={(e) => {e.stopPropagation(); setBg2(txt)}}>Change</button>
        <h1 style={{color: bg2}}>This is the background</h1>
        </div>
    </div>
    </>
  )
}

export default Color