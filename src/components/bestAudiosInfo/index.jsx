import "./index.css";
import image4 from '../../images/BitmapP.png';

function BestAudioInfo() {

  return (
    <div className="best_audio_info">
      <div className="audio_info">
        <h1>
          Bringing you the <span>best </span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="audio_img">
        <img src={image4} alt="person" />
      </div>
    </div>
  );
}

export default BestAudioInfo;
