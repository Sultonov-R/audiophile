import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductsInfo from "../../components/products";
import BestAudioInfo from "../../components/bestAudiosInfo";
import Button from "../../components/buttons";
import Shopping from "../../components/shopping";
import image3 from "../../images/quloqchin.png";
import headphones from "../../images/headphones.png";
import speaker from "../../images/speakerImg.png";
import earphones from "../../images/earphones.png";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import { PulseLoader } from "react-spinners";

function ProductsDetails() {
  const [data, setData] = useState([]);
  const [img, setImg] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  let imageSrc = data?.categoryImage?.desktop;
  let imgSrc = data?.gallery?.first?.desktop;
  let imgSrc1 = data?.gallery?.second?.desktop;
  let imgSrc2 = data?.gallery?.third?.desktop;

  useEffect(() => {
    const importImages = async () => {
      if (imageSrc && imgSrc) {
        const updatedImageSrc = "../." + imageSrc;
        const updatedImgSrc = "../." + imgSrc;
        const updatedImgSrc1 = "../." + imgSrc1;
        const updatedImgSrc2 = "../." + imgSrc2;

        const [module, module1, module2, module3] = await Promise.all([
          import(updatedImageSrc),
          import(updatedImgSrc),
          import(updatedImgSrc1),
          import(updatedImgSrc2),
        ]);

        setImg(module.default);
        setImg1(module1.default);
        setImg2(module2.default);
        setImg3(module3.default);
      }
    };

    importImages();
  }, [imageSrc, imgSrc, imgSrc1, imgSrc2]);

  if (!data || !data.others || !Array.isArray(data.others)) {
    return null;
  }

  function handleAddCart(id) {}

  function handleBtnClick(index) {
    const clickedItem = data.others[index];
    const slug = clickedItem.slug;
    const matchingData = data.others.find((item) => item.slug === slug);
    console.log(matchingData);
    if (matchingData && matchingData.id) {
      navigate(`/products/${matchingData.id}`);
    }
  }

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <PulseLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          <Header />
          <div className="container">
            <div className="back_span">
              <span className="go_back">Go back</span>
            </div>
          </div>
          <div className="collection_item">
            <div className="container">
              <div className="headphone_types" style={{ display: "flex" }}>
                <div className="img-type">
                  <img style={{ width: "540px" }} src={img} alt="pro" />
                </div>
                <div className="headphones_types_info">
                  <h4>NEW PRODUCT</h4>
                  <h2>{data.name}</h2>
                  <p>{data.description}</p>
                  <span className="price-span">${data.price}</span>
                  <div className="amount-select">
                    <div className="span-class">
                      <span onClick={() => dispatch(decrement())}>-</span>
                      <span>{count}</span>
                      <span onClick={() => dispatch(increment())}>+</span>
                    </div>
                    <div>
                      <button
                        onClick={() => handleAddCart(data.id)}
                        className="btn-class"
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="features-info">
              <div className="features">
                <h2>FEATURES</h2>
                <p>{data.features}</p>
              </div>
              <div className="amountOfItem">
                <h2>in the box</h2>
                <ul>
                  {data &&
                    Array.isArray(data.includes) &&
                    data.includes.map((include, index) => (
                      <li key={index}>
                        <span>{include.quantity}x</span>
                        <p>{include.item}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="images-section">
              <div className="images-classes">
                <img src={img1} alt="pro" />
                <img src={img3} alt="pro" />
              </div>
              <div>
                <img src={img2} alt="pro" />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="like-items">
              <h1>YOU MAY ALSO LIKE</h1>
              <div className="items_new">
                {data &&
                  data.others &&
                  data.others.map((item, index) => {
                    const desktopImagePath = item.image.desktop.replace(
                      /^\.\//,
                      "/src/"
                    );
                    return (
                      <div className="other_items" key={index}>
                        <img src={desktopImagePath} alt={item.name} />
                        <h2>{item.name}</h2>
                        <Button
                          onClick={() => handleBtnClick(index)}
                          className="product-btn"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="mainShoppingSection">
              <Shopping title="HEADPHONES" image_src_a={headphones} />
              <Shopping title="SPEAKERS" image_src_a={speaker} />
              <Shopping title="EARPHONES" image_src_a={earphones} />
            </div>
          </div>

          <div className="container">
            <div className="headphone_item">
              <BestAudioInfo />
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default ProductsDetails;
