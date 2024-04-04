import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";

function Modal({ onClose }) {
  const [data, setData] = useState([]);
  const [img, setImg] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
   const dispatch = useDispatch();

  const count = useSelector(state=>state.counter.value);
  console.log(13, count);


  const handleClose = () => {
    if (typeof onClose === "function") {
      onClose();
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let imageSrc = data?.categoryImage?.desktop;

  useEffect(() => {
    const importComponent = async () => {
      if (imageSrc) {
        imageSrc = "../." + imageSrc;
        const module = await import(imageSrc);
        setImg(module.default);
      }
    };

    importComponent();
  }, [imageSrc]);

  function handleChekout() {
    navigate("./checkout");
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="cart-remove">
          <h3>Cart (4)</h3>
          <span>Remove all</span>
        </div>
        <div className="cart-div-overflow">
          <div className="cart-class">
            <div className="img-title">
              <div className="img-class">
                <img src={img} alt="pngh" />
                <div className="title-price">
                  <h4>{data.title}</h4>
                  <span>${data.price}</span>
                </div>
              </div>
              <div className="span_class">
                <span onClick={()=>dispatch(decrement())}>-</span>
                <span>{count}</span>
                <span onClick={()=>dispatch(increment())}>+</span>
              </div>
            </div>
          </div>
        
        
          
          
        </div>

        <div className="total-price">
          <h3>Total price</h3>
          <span>7,989</span>
        </div>

        <button onClick={handleChekout}>Chekout</button>
      </div>
    </div>
  );
}

export default Modal;
