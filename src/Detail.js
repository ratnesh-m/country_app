import React from "react";
import { useContext } from "react";
import { CountryContext } from "./App";

export default function Detail(){

    const country = useContext(CountryContext)
    return(
        <>
        {/* <div><h1>Details About Country: </h1>
    <div  style={{border:"3px solid red" ,margin:"15px" , padding:"15px", width:"160px" ,height:"350px"}}>
        <img style={{height:"100px" , width:"100px"}} src={props.child.flag} />
     <div >
        <h2>{props.child.name}</h2> 
     <h2> {props.child.capital}</h2> 
     <h2> {props.child.population}</h2> 
     <h2> {props.child.region}</h2> </div>
     </div>
        </div> */}

          
<div style={{border:"2px solid black" , width:"400px",margin:"15px",padding:"10px", textAlign:"center"}}>
           <img  style={{height:"100px" ,width:"100px"}} src={country.flag} />
           <div style={{border:"1px solid green"}}>
        <h1>Name:{country.name}</h1>
        <h2>Capital: {country.capital} </h2>
        <h2>Population: {country.population} </h2>
        <h2>Region: {country.region} </h2>
         </div>
        </div>
        </>
    )
}