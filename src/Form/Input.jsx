
                                  // passar vários atributos
const Input = ({label,id,setValue,...props}) =>{
    return(
        <>             
        <label htmlFor={id}>{label}</label>
        <input 
        id={id}
        name={id}            
        onChange={({target})=> setValue(target.value)}
        {...props} //aceita outras propriedades além das que foram mencionadas
         />
        </>
    )
}

export default Input;