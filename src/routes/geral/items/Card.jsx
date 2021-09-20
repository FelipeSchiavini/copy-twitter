import './items.css'
import { getAuthUser } from "../../../db/firebaseConfig"

function Card () {
    const user = getAuthUser()
    return(
        <div class="card">
            <div class="card-content">
                    <div class="content">
                        Usuário:
                        {user.displayName}
                        <br/> 
                        Logado:
                        {user.email}
                    </div>
            </div>
        </div>
    )
}

export default Card