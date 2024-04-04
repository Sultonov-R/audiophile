import { useNavigate } from "react-router-dom";
import path2 from "../../images/Path2.png";
import "./index.css";

function Shopping(props) {
  const { image_src_a, alt_a, title } = props;
  const navigate = useNavigate();

  function handleSpanClick() {
    if (title == "HEADPHONES") {
      navigate("/headphones");
    }
    if (title == "SPEAKERS") {
      navigate("/speakers");
    }
    if (title == "EARPHONES") {
      navigate("/earphones");
    }
  }

  return (
    <div className="shopping_page">
      <img className="headphone-img" src={image_src_a} alt={alt_a} />

      <h3>{title}</h3>
      <span onClick={handleSpanClick}>
        SHOP <img src={path2} alt="path2" />
      </span>
    </div>
  );
}

export default Shopping;
