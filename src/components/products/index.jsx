import "./index.css";
import Button from "../buttons";
import { useEffect, useState } from "react";


function ProductsInfo(props) {
  const [img, setImg] = useState('');
  let { imageSrc, altText, isNewProduct, title, description, buttonText, order, onClick } = props;


  useEffect(() => {
    const importComponent = async () => { 
      if (imageSrc) {  
        imageSrc = '../.' + imageSrc;
        const module = await import(imageSrc);
        setImg(module.default);
      } 
      
    };

    importComponent();
  }, [imageSrc]);


  return (
    <div className="headphone_types" style={{ display: 'flex' }}>
      <div className="img-type" style={{ order: order === 2 ? 2 : 1 }}>
        <img src={img} alt={altText} />
      </div>
      <div className="headphones_types_info" style={{ display: 'flex', flexDirection: 'column', order: order === 1 ? 2 : 1 }}>
        {isNewProduct && <h4>NEW PRODUCT</h4>}
        <h2>{title}</h2>
        <p>{description}</p>
        <Button onClick={onClick} className="product-btn">{buttonText}</Button>
      </div>
    </div>
  );
}

export default ProductsInfo;
