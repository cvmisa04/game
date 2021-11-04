import React, { useEffect, useState } from 'react'

const Card = ({a,index}) => {
    const[r,setR]=useState([])
  
    return (
      
        
             <div className='broj' key={index} >
            <button style={{ outline: 'none', border: 'none', background: 'transparent', color: 'black' }} onChange={(e)=>setR(e.currentTarget.value)} >{a}</button>

        </div>
        
    )
}

export default Card