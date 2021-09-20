import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css'
import { useState } from 'react'
import Validation from './Validation'
import { useHistory } from 'react-router-dom'
//bulma.io
import { signInWithGoogle, loginWithEmailAndPassword } from '../../db/firebaseConfig'

function Login() {
    //component states
    const [password, setPassword ] = useState("");
    const [email, setEmail] = useState("");
    const [validateEmail, setValidateEmail] = useState(false)
    const [validatePassword, setValidatePassword] = useState(false)
    const [error, setError] = useState("")

    //routes Link
    const history = useHistory();
    const redirectToCreateAccount = () => {
        history.push("/create-account")
    } 

    const goGeral = () => {
        history.push("/geral")
    }

    const errorLogin = (erro) => {
        setError(erro)
    }

    const login = () => {
        loginWithEmailAndPassword(email, password, goGeral, errorLogin)
    }
    
    const signWithGoogle = () => {
        signInWithGoogle(goGeral, errorLogin);
    }

    return (
    <div className="login-background">
        <div className = "login-container">
                <img src="https://th.bing.com/th/id/R.85fecc00139f87daca1e884efc5b2b14?rik=btf%2f7vWFGK1MqQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_qd7B9IQnZSs%2fTUtqAB7Z69I%2fAAAAAAAAAPE%2fJr0mG_DQuoE%2fs1600%2flogo_twitter_withbird_1000_allblue.png&ehk=xWCXnkkyGATpYN42z4Vwq5sihCCCV15flmZRDFj4Q3M%3d&risl=&pid=ImgRaw&r=0" alt='logo'/>
                <h1 class="title">Faça seu login</h1>
                <Validation password={password} setPassword = {setPassword} setEmail={setEmail} email ={email} validateEmail={validateEmail} setValidateEmail={setValidateEmail} validatePassword={validatePassword} setValidatePassword={setValidatePassword}/>
               
            <div className="button-container">
                <button class="button" onClick = {redirectToCreateAccount}> Ainda não possuo cadastro</button>
                <button class="button is-info">
                    <div className ="google-button" onClick = {signWithGoogle}>
                    <FontAwesomeIcon icon ={faGoogle}  />
                    Entrar com Google
                    </div>
                </button>
                    
                <button class="button is-info" onClick ={ login } >Entrar</button>

                {error && 
                <article class="message is-danger">
                    <div class="message-body">
                        {error}
                    </div>
                </article>}

            </div>
        </div>   
    </div>
    );
  }
  
  export default Login;
  