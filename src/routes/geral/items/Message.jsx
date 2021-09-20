import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faThumbsUp, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import './items.css'

function Message () {
    return (
    <div class="box">
    <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <div>
            <span class="icon is-medium">
              <FontAwesomeIcon icon = {faThumbsUp}/> 
              <span>
                12
                </span>
            </span>
          </div>
          <div>
            <span class="icon is-small">
            <FontAwesomeIcon icon = {faCommentDots}/> <span>
                12
                </span>
            </span>
          </div>
          <div>
            <span class="icon is-small">
            <FontAwesomeIcon icon = {faTrash}/>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </article>
</div>
)
}

export default Message