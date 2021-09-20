import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faStar, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import './items.css'

function Tabs () {

    return (
        <div class="tabs is-toggle">
            <ul>
                <li>
                    <a class="is-active">
                        <FontAwesomeIcon icon = { faUsers } />
                        <span>Geral</span>
                    </a>
                </li>
                <li>
                    <a>
                        <FontAwesomeIcon icon = { faHouseUser } />  
                        <span>Meu perfil</span>
                    </a>
                </li>
                <li>
                <a>
                    <FontAwesomeIcon icon = { faStar } />  
                    <span>Favoritos</span>
                </a>
                </li>
            </ul>
        </div>
    )
}

export default Tabs