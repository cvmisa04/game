import React, { useEffect, useState } from 'react'

const Card = ({a,index}) => {


    return (
      
        
             <div className='broj' key={index} >
            <button style={{ outline: 'none', border: 'none', background: 'transparent', color: 'black' }}  >{a}</button>

        </div>
        
    )
}

export default Card