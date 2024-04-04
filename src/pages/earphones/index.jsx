import Header from "../../components/header";
import HeaderB from "../../components/headerB";
import ProductsInfo from "../../components/products";
import BestAudioInfo from "../../components/bestAudiosInfo";
import Shopping from "../../components/shopping";
import Footer from "../../components/footer";
import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";

function Earphones() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/0")
      .then((res) => res.json())
      .then((data) => {
        console.log(19, data.categoryImage.desktop);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  function handleBtnClick(id) {
    if (data.id == id) {
      navigate(`/products/${id - 1}`);
    }
  }

  return (
    <div className="item-info-page">
      {isLoading ? (
        <div className="loader">
          <PulseLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          <div className="item_header">
            <Header />
          </div>
          <HeaderB title="EARPHONES" />

          <div className="collection_item">
            <div className="container">
              <ProductsInfo
                imageSrc={data?.categoryImage?.desktop}
                altText="earphone"
                isNewProduct={true}
                title={data.name}
                description={data.description}
                buttonText="PRODUCT SEE"
                onClick={() => handleBtnClick(data.id)}
                order={1}
              />
            </div>
          </div>

          <div className="container">
            <div className="mainShoppingSection">
              <Shopping
                title="HEADPHONES"
                image_src_a="./src/images/headphones.png"
              />
              <Shopping
                title="SPEAKERS"
                image_src_a="./src/images/speakerImg.png"
              />
              <Shopping
                title="EARPHONES"
                image_src_a="./src/images/earphones.png"
              />
            </div>
          </div>

          <div className="container">
            <div className="headphone_item">
              <BestAudioInfo />
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default Earphones;
