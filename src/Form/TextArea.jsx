
import React from "react";


const TextArea = () =>{
    const [mensagem, setMensagem] = React.useState('')
    return(
        <form>
            <textarea 
             id="idMensagem"
              rows="5"
              value={mensagem}
              onChange={({target})=>setMensagem(target.value)}
              />
              {mensagem}
        </form>
    )
}
export default TextArea;