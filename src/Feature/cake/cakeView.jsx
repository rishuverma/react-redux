import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ordered,restock } from './cakeSlice';


export const CakeView = () =>{
	const dispatch=useDispatch()
	const [value,setValue]=useState(1);
	const numOfCake=useSelector((state)=>state.cake.numOfCake)
	return(
		<div>
			<h2>Number of Cakes - {numOfCake}</h2>
			<button className="btn btn-primary" style={{margin:10}}onClick={()=>dispatch(ordered())}>Order Cake</button>
			<div className='input-group mb-2' style={{inlineSize:700, marginLeft:600}} >
			<input type='number' className='form-control' style={{textAlign:'center', justifyContent:'center', display:"block", margin:"0 auto"}} aria-label=" Sizing example input"  value={value} onChange={(e)=>setValue(parseInt(e.target.value))}/>
			<span class="input-group-text">Cakes</span>
			</div>
			<button className="btn btn-primary"style={{margin:10}}onClick={()=>dispatch(restock(value))}>Restock Cake</button>
		</div>
	)
}