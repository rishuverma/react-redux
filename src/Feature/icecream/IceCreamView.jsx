import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered,restock } from './icecreamSlice'

export const IceCreamView = () =>{
	const numOfIceCream=useSelector((state)=>state.icecream.numOfIceCream)
	const dispatch = useDispatch()
	return(
		<div>
			<h2 style={{marginTop:100}}>Number of IceCream - {numOfIceCream}</h2>
			<button className="btn btn-primary"style={{margin:10}}onClick={()=>dispatch(ordered())}>Order IceCream</button>
			<button className="btn btn-primary"style={{margin:10}}onClick={()=>dispatch(restock(5))}>Restock IceCream</button>
		</div>
	)
}