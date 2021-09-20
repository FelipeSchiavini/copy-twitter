import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import './Login.css'
import { useState } from 'react'
import Validation from './Validation'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../db/firebaseConfig'
//bulma.io


function CreateAccount() {
    //component states
    const [username, setUsername ] = useState("");
    const [password, setPassword ] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("")

    const [validateEmail, setValidateEmail] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)

    //routes link
    const historyGeral = useHistory();
    const history = useHistory();

    const redirectToLogin = () => {
        history.push("/login")
    }    

    const errorLogin = (erro) => {
        setError(erro)
    }

    const goGeral = () => {
        historyGeral.push("/geral")
    }

    const sign = () => {
        signUp(username, email, password, goGeral, errorLogin);
    }

    return (
    <div className="login-background">
        <div className = "login-container">
                <img src="https://th.bing.com/th/id/R.85fecc00139f87daca1e884efc5b2b14?rik=btf%2f7vWFGK1MqQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_qd7B9IQnZSs%2fTUtqAB7Z69I%2fAAAAAAAAAPE%2fJr0mG_DQuoE%2fs1600%2flogo_twitter_withbird_1000_allblue.png&ehk=xWCXnkkyGATpYN42z4Vwq5sihCCCV15flmZRDFj4Q3M%3d&risl=&pid=ImgRaw&r=0" alt='logo'/>
                <h1 class="title">Faça seu login</h1>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                    <input class="input is-hovered" type="text" placeholder="fulanodetal123" onChange = {(evt) => { setUsername(evt.target.name)}}/>
                    <span class="icon is-small is-left">
                        <FontAwesomeIcon icon ={faUser} />
                    </span>
                </div>
                </div>
                <Validation password={password} setPassword = {setPassword} setEmail={setEmail} email ={email} validateEmail={validateEmail} setValidateEmail={setValidateEmail} validatePassword={validatePassword} setValidatePassword={setValidatePassword}/>
               
            <div className="button-container">
                <button class="button" onClick = {redirectToLogin}>Já possuo cadastro</button>                   
                <button class="button is-info" onClick = {sign}>Criar conta</button>
            </div>
            {error && 
                <article class="message is-danger">
                    <div class="message-body">
                        {error}
                    </div>
                </article>}
        </div>   
    </div>
    );
  }
  
  export default CreateAccount;