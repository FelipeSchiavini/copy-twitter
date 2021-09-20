import { set } from '@firebase/database'
import { useState } from 'react'
import './items.css'
import { writeNewTweet } from '../../../db/firebaseConfig'

function NewTweet (props) {
    // const textArea = document.getElementById('textarea')
    const [tweet, setTweet] = useState("")
    
    const updateTweet = (evt) => {
        setTweet(evt.target.value)
    }

    const newTweet = () => {
        writeNewTweet(tweet)
        setTweet("")
        // textArea.value = ""
        props.handleClose()
    }

    return (
        <div id={'modal'} className= {`modal ${props.show}`}>
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Create new Tweet</p>
                </header>          
                    <textarea class="textarea" id="textarea" onChange = {updateTweet} value = {tweet} placeholder="e.g. Hello world"></textarea>
                <footer class="modal-card-foot">
                <button class="button is-success" onClick = {newTweet}>Save changes</button>
                <button class="button" onClick= {props.handleClose}>Cancel</button>
                </footer>
            </div>
        </div>
    )
}

export default NewTweet