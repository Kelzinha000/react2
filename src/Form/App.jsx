import React from "react";
import Input from "./Input";

const App = ()=>{
    const [nome, setNome] = React.useState("")
    
   
    return(
        <>
     <Input 
     label={"Nome"}
     id="nome"
     value={nome}
     setValue={setNome}
    //  placeholder="aaaaa" ira funcionar mesmo que não declarada, por causa da propriedade "...props"
     />


     <p>{nome}</p>


    
     </>
    )
}

export default App; 