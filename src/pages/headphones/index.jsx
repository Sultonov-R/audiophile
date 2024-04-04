import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../../components/header";
import HeaderB from "../../components/headerB";
import Footer from "../../components/footer";
import ProductsInfo from "../../components/products";
import Shopping from "../../components/shopping";
import BestAudioInfo from "../../components/bestAudiosInfo";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

function Headphones() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch(`http://localhost:3000/3`).then((res) => res.json()),
      fetch(`http://localhost:3000/2`).then((res) => res.json()),
      fetch(`http://localhost:3000/1`).then((res) => res.json()),
    ])
      .then(([data, data1, data2]) => {
        setData(data);
        setData1(data1);
        setData2(data2);
        console.log(31, data.categoryImage.desktop);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  

  


  function handleBtnClick(id) {
    if (data.id == id) {
      console.log(id);
      navigate(`/products/${id - 1}`);
    }
    if (data1.id == id) {
      console.log(id);
      navigate(`/products/${id - 1}`);
    }
    if (data2.id == id) {
      console.log(id);
      navigate(`/products/${id - 1}`);
    }
  }



  return (
    <div className="headphones-info-page">
      {isLoading ? (
        <div className="loader">
          <PulseLoader color="#36d7b7" />
        </div>
      ) : (
        <>
          <div className="headphone_header">
            <Header />
          </div>
          <HeaderB title={data.category} />

          <div className="collection_headphones">
            <div className="container">
              <ProductsInfo
                imageSrc={data?.categoryImage?.desktop}
                altText="quloqchin"
                isNewProduct={true}
                title={data.name}
                description={data.description}
                buttonText="PRODUCT SEE"
                onClick={() => handleBtnClick(data.id)}
                order={1}
              />
              <ProductsInfo
                imageSrc={data1?.categoryImage?.desktop}
                altText="quloqchin"
                isNewProduct={true}
                title={data1.name}
                description={data1.description}
                buttonText="PRODUCT SEE"
                onClick={() => handleBtnClick(data1.id)}
                order={2}
              />

              <ProductsInfo
                imageSrc={data2?.categoryImage?.desktop}
                altText="quloqchin"
                isNewProduct={true}
                title={data2.name}
                description={data2.description}
                buttonText="PRODUCT SEE"
                onClick={() => handleBtnClick(data2.id)}
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

export default Headphones;
