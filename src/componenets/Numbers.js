import React,{useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { GET_SELECT_NUMBERS } from '../redux/constans/getNumber';


const Numbers = ({broj,index}) => {
//selektor
const selBrojevi = useSelector((state)=>state.selNumber);
const dispatch = useDispatch();

//ucitavanje selektovanih broja
const loadNumbers=()=>{

  setBrojevi(broj)
}

//useEffect
  useEffect(() => {
    changeColor()

    loadNumbers()
   
  
}, [])

//akcija 
const getSelNum = ()=>{
 return {
    type:GET_SELECT_NUMBERS,
    payload:selBrojevi.push(Izbrojevi)
    
  }
  
}
//state
const [Izbrojevi, setBrojevi] = useState()
const [color, setColor] = useState({ backgroundColor: 'red' })
const [disabled, setDisabled] = useState(false)


//f-ja dodavanje broja i onemogucavanje buttona
const getValue = (i) => {

    setDisabled(true)
  
    dispatch(getSelNum)
   

    if(selBrojevi.length>10){
      
      alert('Dodali ste 10 brojeva')
    }

    loadNumbers()
 
}
  
     
  



//na osnovu indexa setovanje boja loptica
function changeColor (){

    switch (index) {
        case index = 0: return setColor({ backgroundColor: 'brown' })
        case index = 8: return setColor({ backgroundColor: 'brown' })
        case index = 16: return setColor({ backgroundColor: 'brown' })
        case index = 24: return setColor({ backgroundColor: 'brown' })
        case index = 32: return setColor({ backgroundColor: 'brown' })
        case index = 40: return setColor({ backgroundColor: 'brown' })

        case index = 1: return setColor({ backgroundColor: 'orange' })
        case index = 9: return setColor({ backgroundColor: 'orange' })
        case index = 17: return setColor({ backgroundColor: 'orange' })
        case index = 25: return setColor({ backgroundColor: 'orange' })
        case index = 33: return setColor({ backgroundColor: 'orange' })
        case index = 41: return setColor({ backgroundColor: 'orange' })

        case index = 2: return setColor({ backgroundColor: 'red' })
        case index = 10: return setColor({ backgroundColor: 'red' })
        case index = 18: return setColor({ backgroundColor: 'red' })
        case index = 26: return setColor({ backgroundColor: 'red' })
        case index = 34: return setColor({ backgroundColor: 'red' })
        case index = 42: return setColor({ backgroundColor: 'red' })

        case index = 3: return setColor({ backgroundColor: 'pink' })
        case index = 11: return setColor({ backgroundColor: 'pink' })
        case index = 19: return setColor({ backgroundColor: 'pink' })
        case index = 27: return setColor({ backgroundColor: 'pink' })
        case index = 35: return setColor({ backgroundColor: 'pink' })
        case index = 43: return setColor({ backgroundColor: 'pink' })

        case index = 4: return setColor({ backgroundColor: 'purple' })
        case index = 12: return setColor({ backgroundColor: 'purple' })
        case index = 20: return setColor({ backgroundColor: 'purple' })
        case index = 28: return setColor({ backgroundColor: 'purple' })
        case index = 36: return setColor({ backgroundColor: 'purple' })
        case index = 44: return setColor({ backgroundColor: 'purple' })

        case index = 5: return setColor({ backgroundColor: 'blue' })
        case index = 13: return setColor({ backgroundColor: 'blue' })
        case index = 21: return setColor({ backgroundColor: 'blue' })
        case index = 29: return setColor({ backgroundColor: 'blue' })
        case index = 37: return setColor({ backgroundColor: 'blue' })
        case index = 45: return setColor({ backgroundColor: 'blue' })

        case index = 6: return setColor({ backgroundColor: '#97f6fc' })
        case index = 14: return setColor({ backgroundColor: '#97f6fc' })
        case index = 22: return setColor({ backgroundColor: '#97f6fc' })
        case index = 30: return setColor({ backgroundColor: '#97f6fc' })
        case index = 38: return setColor({ backgroundColor: '#97f6fc' })
        case index = 46: return setColor({ backgroundColor: '#97f6fc' })

        case index = 7: return setColor({ backgroundColor: 'green' })
        case index = 15: return setColor({ backgroundColor: 'green' })
        case index = 23: return setColor({ backgroundColor: 'green' })
        case index = 31: return setColor({ backgroundColor: 'green' })
        case index = 39: return setColor({ backgroundColor: 'green' })
        case index = 47: return setColor({ backgroundColor: 'green' })

    }
}

 
    return (
  
      
        <>
       <div className='broj' style={color} key={index}>
                <button style={{outline:'none',border:'none',background:'transparent'}}
                 onClick={()=>getValue(index)} disabled={disabled}  >{broj}</button>
       
      </div>
      

      
      

      
      </>
   
    )
   
}

export default Numbers
