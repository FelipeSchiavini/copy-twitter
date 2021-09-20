import './Geral.css'
import Tabs from './items/Tabs'
import Card from './items/Card'
import Message from './items/Message'
import { useEffect, useState } from 'react'
import NewTweet from './items/NewTweet'
import { watchAllTweets } from '../../db/firebaseConfig'


function Geral () {
    const [show, setShow] = useState('is-not-active');
    const handleClose = () => setShow('is-not-active');
    const handleShow = () => setShow('is-active');
    const [tweet, setTweet] = setShow("")

    // const agua = (tweets) => {
    //     console.log(tweets)
    // }

    watchAllTweets(console.log)
    
    // useEffect (() => {
    //     watchAllTweets(agua)
    // }, [])
 

    return (
        <div className="geral-background">
            <NewTweet show={show} handleClose={handleClose}/>
            <div className="container">
                <img src="https://th.bing.com/th/id/R.85fecc00139f87daca1e884efc5b2b14?rik=btf%2f7vWFGK1MqQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_qd7B9IQnZSs%2fTUtqAB7Z69I%2fAAAAAAAAAPE%2fJr0mG_DQuoE%2fs1600%2flogo_twitter_withbird_1000_allblue.png&ehk=xWCXnkkyGATpYN42z4Vwq5sihCCCV15flmZRDFj4Q3M%3d&risl=&pid=ImgRaw&r=0" alt='logo' className ="img-logo"/> 
                <div className="important">
                    <div className ="aside">
                        <Card/>
                        <button class="button is-info" onClick ={handleShow} >Criar novo tweet</button>
                    </div>
                    <div className="body">
                        <Tabs/>
                        <div className="messages">  
                            <Message/>
                            <br/>
                            <Message/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Geral