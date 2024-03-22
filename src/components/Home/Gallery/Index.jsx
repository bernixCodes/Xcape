import "./index.css";
import image1 from "../../../assets/gallery/1.jpg";
import image2 from "../../../assets/gallery/2.jpg";
import image3 from "../../../assets/gallery/3.jpg";
import image4 from "../../../assets/gallery/4.jpg";
import image5 from "../../../assets/gallery/5.jpg";
// import image6 from "../../../assets/gallery/6.jpg";
// import image7 from "../../../assets/gallery/7.jpg";
// import image8 from "../../../assets/gallery/8.jpg";
import image9 from "../../../assets/gallery/9.jpg";
// import image10 from "../../../assets/gallery/10.jpg";
import image11 from "../../../assets/gallery/11.jpg";
import image12 from "../../../assets/gallery/12.jpg";
import image13 from "../../../assets/gallery/13.jpg";
import image14 from "../../../assets/gallery/14.jpg";
import image15 from "../../../assets/gallery/15.jpg";

const Gallery = () => {
  return (
    <div className="gal-div">
      <div className="container">
        <div className="gallery-intro">
          <h2>PHOTO&apos;S FROM TRAVELLERS</h2>
          <p>
            Experience the world through the lens of Xcape&apos;s Photo Gallery,
            featuring snapshots from our clients&apos; unforgettable journeys.
            From Marriot beaches to Accra&apos;s historic streets, each image
            captures the essence of exploration.{" "}
          </p>
        </div>
        <div className="gallery-maindiv">
          <div className="image-container">
            <img src={image5} alt="" />
            <img src={image3} alt="" />
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image4} alt="" />
          </div>

          <div className="image-container">
            <img src={image2} alt="" />
            <img src={image12} alt="" />
            <img src={image5} alt="" />
            <img src={image9} alt="" />
            <img src={image1} alt="" />
          </div>

          <div className="image-container">
            <img src={image11} alt="" />
            {/* <img src={image12} alt="" /> */}
            <img src={image13} alt="" />
            <img src={image14} alt="" />
            <img src={image15} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
