import React from "react"

const Input = ({nome,id,setValue}) => {

    return(
        <>
        <input
        label={nome}
         id={id}
         value={nome}
         onChange={({target})=>setValue(target.value)}
        />
        <p>{nome}</p>
        </>
    )
}