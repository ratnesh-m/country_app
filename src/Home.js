import React from "react";
import {useState,useEffect} from "react";
import './App.css';

export default function Home(props){

const [data,setData] = useState([]);
const [input,setInput] = useState("")

// function handleChange(e){
//     console.log(e.target.value)
//     setInput(e.target.value)
//   const search= data.filter((item)=>{
//       return item.name.toLowerCase().includes(e.target.value.toLowerCase())
//    })
//    setData(search)
// }



function handleChange(e){
    console.log(e.target.value)
    setInput(e.target.value)
    const val = data.filter((i)=>{
        return (i.name.toLowerCase().match(e.target.value))
    })
    setData(val)
}


useEffect(()=>{

    let input = fetch('https://restcountries.com/v2/all').then((res) => res.json()).then(val => setData(val))
}, [])

// console.log(data)


    return(
        <>
        <div className="search">
         <input className="input" onChange={handleChange} value={input}/>
         </div>
            {data.map((d,i)=>{
              return (
               <div className="App" key={i}>
                <img style={{height:"170px",width:"170px"}} src={d.flag} />
              <div className="info">
              <h1> {d.name}</h1>
              <h2> {d.capital} </h2>
              <h2> {d.population} </h2>
              <h2> {d.region} </h2>
              <button onClick={()=>
                props.clickData(d)
              }  >Detalis</button>
              </div>
              </div>
              )
            })}
        </>
    )
}