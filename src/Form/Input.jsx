
import React from "react"

const Input = () =>{
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [rua, setRua] = React.useState('')
    const [cep, setCep] = React.useState('')
    function ClickSubimit(event){
        event.preventDefault();
        
    }
    return(
        
        <form onSubmit={ClickSubimit}>
            <label htmlFor="nome">Nome</label>
            <input 
            type="text"
            id="nome"
            value={nome}
            onChange={({target})=> setNome(target.value)}
             />
             <button>Enviar</button>
             {nome}
        
        <label htmlFor="email">Email</label>
        <input type="text" 
         id="email"
         value ={email}
         onChange={({target})=> setEmail(target.value)}
        />
        {email}

        <label htmlFor="rua">Rua</label>
        <input type="rua" 
         id="rua"
         value ={rua}
         onChange={({target})=> setRua(target.value)}
        />
        {cep}
        <label htmlFor="cep">Cep</label>
        <input type="cep" 
         id="cep"
         value ={cep}
         onChange={({target})=> setCep(target.value)}
        />
        {email}
            
        </form>
    )
}

export default Input; 