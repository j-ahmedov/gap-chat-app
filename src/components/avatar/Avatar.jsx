import './Avatar.css'
import { requestParams } from '../../constants/request_params'

const Avatar = ({img_source}) => {
  return (
    img_source ? (
    <div className="image-container">
        <img
        src={`${requestParams.url_template}${img_source}`}
        alt="user avatar"              
        />
    </div>
    ) : (
      <i className="fa-regular fa-circle-user fa-xl"></i>
    )
  )
}

export default Avatar