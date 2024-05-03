import React from "react";
const Select = ()=>{
const [select,setSelect]= React.useState('')
    return(
        <form>
            <select value={select} onChange={({event})=>setSelect(event.target.value)}> 
                <option value="">Sesi</option>
                <option value="">Senai</option>
                <option value="">IEL</option>
            </select>
            <p>{select}</p>
        </form>
    )
}

export default Select;