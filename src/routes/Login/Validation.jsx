import { faEnvelope, faKey, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'



function Validation (props) {
    //props items
    const { validateEmail, setValidateEmail, validatePassword, setValidatePassword, password, setPassword, email, setEmail} = props


    //validation
    const checkEmail = () =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setValidateEmail (false)
        }
            else {
            setValidateEmail (true)
        }
    }
    
    const checkPassord = () =>{
        if (password.length < 6) setValidatePassword(true)
        if (password.length > 5) setValidatePassword(false)
    }


    return(
    <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
    <input class="input is-hovered" type="email" placeholder="abc123@gmail.com" onChange ={(evt) => setEmail(evt.target.value)} onBlur ={checkEmail}/>
    <span class="icon is-small is-left">
        <FontAwesomeIcon icon ={faEnvelope} />
    </span>
    <span class="icon is-small is-right">
        { validateEmail &&
            <FontAwesomeIcon icon ={faExclamationTriangle} />
        }
    </span>
    </div>
        { validateEmail &&
            <p class="help is-danger">Email ou senha incorretos</p>
        }
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
        <input class="input is-hovered" type="password" placeholder="digite sua senha" onChange = {(evt) => setPassword(evt.target.value)} onBlur ={checkPassord}/>
    <span class="icon is-small is-left">
        <FontAwesomeIcon icon ={faKey} />
    </span>
    <span class="icon is-small is-right">
        { validatePassword &&
            <FontAwesomeIcon icon ={faExclamationTriangle} />
        }
    </span>
    </div>
        { validatePassword &&
            <p class="help is-danger">A senha precisa ter pelo menos 6 caracteres.</p>
        }
</div>
)
}

export default Validation