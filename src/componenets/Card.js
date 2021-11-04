import React, { useEffect, useState } from 'react'

const Card = ({ a, index }) => {

    const [color, setColor] = useState({ backgroundColor: 'red' })

    useState(()=>{
        changeColor()
    },[color])
//na osnovu vrednosti setovanje boja loptica
function changeColor (){

    switch (a) {
        case a = 1: return setColor({ backgroundColor: 'brown' })
        case a = 9: return setColor({ backgroundColor: 'brown' })
        case a = 17: return setColor({ backgroundColor: 'brown' })
        case a = 25: return setColor({ backgroundColor: 'brown' })
        case a = 35: return setColor({ backgroundColor: 'brown' })
        case a = 41: return setColor({ backgroundColor: 'brown' })

        case a = 2: return setColor({ backgroundColor: 'orange' })
        case a = 10: return setColor({ backgroundColor: 'orange' })
        case a = 18: return setColor({ backgroundColor: 'orange' })
        case a = 26: return setColor({ backgroundColor: 'orange' })
        case a = 34: return setColor({ backgroundColor: 'orange' })
        case a = 42: return setColor({ backgroundColor: 'orange' })

        case a = 3: return setColor({ backgroundColor: 'red' })
        case a = 11: return setColor({ backgroundColor: 'red' })
        case a = 19: return setColor({ backgroundColor: 'red' })
        case a = 27: return setColor({ backgroundColor: 'red' })
        case a = 35: return setColor({ backgroundColor: 'red' })
        case a = 43: return setColor({ backgroundColor: 'red' })

        case a = 4: return setColor({ backgroundColor: 'pink' })
        case a = 12: return setColor({ backgroundColor: 'pink' })
        case a = 20: return setColor({ backgroundColor: 'pink' })
        case a = 28: return setColor({ backgroundColor: 'pink' })
        case a = 36: return setColor({ backgroundColor: 'pink' })
        case a = 44: return setColor({ backgroundColor: 'pink' })

        case a = 5: return setColor({ backgroundColor: 'purple' })
        case a = 13: return setColor({ backgroundColor: 'purple' })
        case a = 21: return setColor({ backgroundColor: 'purple' })
        case a = 29: return setColor({ backgroundColor: 'purple' })
        case a = 37: return setColor({ backgroundColor: 'purple' })
        case a = 45: return setColor({ backgroundColor: 'purple' })

        case a = 6: return setColor({ backgroundColor: 'blue' })
        case a = 14: return setColor({ backgroundColor: 'blue' })
        case a = 22: return setColor({ backgroundColor: 'blue' })
        case a = 30: return setColor({ backgroundColor: 'blue' })
        case a = 38: return setColor({ backgroundColor: 'blue' })
        case a = 46: return setColor({ backgroundColor: 'blue' })

        case a = 7: return setColor({ backgroundColor: '#97f6fc' })
        case a = 15: return setColor({ backgroundColor: '#97f6fc' })
        case a = 23: return setColor({ backgroundColor: '#97f6fc' })
        case a = 31: return setColor({ backgroundColor: '#97f6fc' })
        case a = 39: return setColor({ backgroundColor: '#97f6fc' })
        case a = 47: return setColor({ backgroundColor: '#97f6fc' })

        case a = 8: return setColor({ backgroundColor: 'green' })
        case a = 16: return setColor({ backgroundColor: 'green' })
        case a = 24: return setColor({ backgroundColor: 'green' })
        case a = 32: return setColor({ backgroundColor: 'green' })
        case a = 40: return setColor({ backgroundColor: 'green' })
        case a = 48: return setColor({ backgroundColor: 'green' })

    }
}

    return (


        <div className='arr' key={index} style={color} >
            <button style={{ outline: 'none', border: 'none', background: 'transparent', color: 'white' }} >{a}</button>

        </div>

    )
}

export default Card