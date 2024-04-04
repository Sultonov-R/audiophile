import Header from "../../components/header";
import HeaderB from "../../components/headerB";
import ProductsInfo from "../../components/products";
import BestAudioInfo from "../../components/bestAudiosInfo";
import Shopping from "../../components/shopping";
import Footer from "../../components/footer";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

function Speakers() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://localhost:3000/5")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(27, data.categoryImage.desktop);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    fetch("http://localhost:3000/4")
      .then((res) => res.json())
      .then((data) => {
        setData1(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  function handleClickBtn(id) {
    if (data.id == id) {
      navigate(`/products/${id - 1}`);
    }
    if (data1.id == id) {
      navigate(`/products/${id - 1}`);
    }
  }

  return (
    <div className="item-info-page">
    {
      isLoading ? (
        <div className="loader">
          <PulseLoader color="#36d7b7" />
        </div>
      ):(
        <>
          <div className="item_header">
        <Header />
      </div>
      <HeaderB title="SPEAKERS" />

      <div className="collection_item">
        <div className="container">
          <ProductsInfo
            imageSrc={data?.categoryImage?.desktop}
            altText="quloqchin"
            isNewProduct={true}
            title={data.name}
            description={data.description}
            onClick={() => handleClickBtn(data.id)}
            order={1}
          />
          <ProductsInfo
            imageSrc={data1?.categoryImage?.desktop}
            altText="quloqchin"
            isNewProduct={true}
            title={data1.name}
            description={data1.description}
            buttonText="PRODUCT SEE"
            onClick={() => handleClickBtn(data1.id)}
            order={2}
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

      <div>
        <Footer />
      </div>
        </>
      )
    }
    </div>
  );
}

export default Speakers;
