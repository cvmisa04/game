import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Numbers from './Numbers'
import Card from './Card'

import { GET_ALL_NUMBERS } from '../redux/constans/getNumber'



const AllNumber = () => {

    const broj = useSelector((state) => state.numReducer)
    const selBr = useSelector((state) => state.selNumber);
    const dispatch = useDispatch();

    const [izBrojevi, setIzBrojevi] = useState([])



   

    const loadSel = () => {
        setIzBrojevi(selBr)
        console.log(selBr)
    }

    useState(() => {

        dispatch(loadSel);
        
    },[])


    return (
        <div>
            <div className="flex-container m-4" >
                {broj.map((value, index) => (

                    <Numbers broj={value} key={index} index={index} />

                ))}

                <div className='arr'>1</div> <div className='arr'>1</div> <div className='arr'>1</div>
                <div className='arr'>1</div> <div className='arr'>1</div> <div className='arr'>1</div>
                <div className='arr'>1</div> <div className='arr'>1</div>


            </div>
            <h1>Brojevi</h1>
            <div className="flex-container">
              
              

                {izBrojevi.map((a, index) => (

                    <Card a={a} key={index} />
                ))}

            </div>



        </div>





    )
}

export default AllNumber
