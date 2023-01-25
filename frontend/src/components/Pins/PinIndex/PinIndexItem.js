import { Link, useHistory } from "react-router-dom";
import "./PinIndex.css";

function PinIndexItem({ pin }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/pins/${pin.id}`);
  };

  return (
    <div className="masonry-item">
      <div onClick={handleClick}>
        <img className="pin-image" src={pin.imageUrl}></img>
        <div className="pin-name">{pin.title}</div>
      </div>
      <Link className="pin-user" to={`/${pin.userId}`}>
        <div id="pin-index-user">{pin.username ? pin.username[0] : ""}</div>
        <div>{pin.username}</div>
      </Link>
    </div>
  );
}
export default PinIndexItem;
