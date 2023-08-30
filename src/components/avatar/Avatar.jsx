import './Avatar.css'

const Avatar = ({img_source}) => {
  return (
    img_source ? (
    <div className="image-container">
        <img
        src= {img_source}
        alt="user avatar"              
        />
    </div>
    ) : (
      <i className="fa-regular fa-circle-user fa-xl"></i>
    )
  )
}

export default Avatar