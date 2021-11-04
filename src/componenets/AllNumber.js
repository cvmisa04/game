import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Numbers from './Numbers'
import Card from './Card'

import { GET_SELECT_NUMBERS } from '../redux/constans/getNumber'



const AllNumber = () => {
    //state
    const [izBrojevi, setIzBrojevi] = useState([])
    const [randomBrojevi, setRandom] = useState([])

//selektori
    const broj = useSelector((state) => state.numReducer)
    const selBr = useSelector((state) => state.selNumber);
    const dispatch = useDispatch();





//ucitavanje selektovanih brojeva
    const loadSel = () => {

        let arr = [];
        while (arr.length < 10) {
        arr.push(selBr)
            
        }
        setIzBrojevi(arr)
        console.log(izBrojevi)
        dispatch(getSelNum)
    }
//useEffect
    useEffect(() => {
        loadSel();


    }, [selBr, broj, randomBrojevi, izBrojevi])
//akcija selektovani br
    const getSelNum = () => {
        return {
            type: GET_SELECT_NUMBERS,
            payload: selBr

        }

    }
//Slucajni brojevi
    const randomize = () => {
        var arr = [];
        while (arr.length < 6) {
            var r = Math.floor(Math.random() * broj.length) + 1;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        let rand = arr.map(ar => {
            selBr.push(ar)

        })

        setRandom(rand)
        return rand

    }

//resetovanje igre
    const reset = () => {
        window.location.reload()
    }

 
    return (
        <div>
            
            <div className="flex-container" >
                {broj.map((value, index) => (

                    <Numbers broj={value} key={index} index={index} />

                ))}
                {/* Dugmici za slucajnih 6 i resetovanje */}
                <button className='ml-3 mt-4' style={{ background: "red", borderRadius: "10px", color: "white" }} onClick={() => randomize()}>Slucajnih 6</button>
                <button className='ml-5 mt-4' style={{ background: "tomato", borderRadius: "10px", color: "black" }} onClick={() => reset()}>Reset</button>


            </div>
                {/* Card za selektovane */}
            <div className="flex-container">

                {selBr && selBr.map((a, index) => (

                    <Card a={a} key={index} />
                ))}

            </div>
            
            {randomBrojevi}
        </div>





    )
}

export default AllNumber
