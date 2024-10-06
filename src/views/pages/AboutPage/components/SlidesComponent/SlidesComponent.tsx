import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./SlidesComponent.css";

import Slide1 from "../../../../../assets/slides/slide1.png";
import Slide2 from "../../../../../assets/slides/slide2.png";
import Slide3 from "../../../../../assets/slides/slide3.png";
import Slide4 from "../../../../../assets/slides/slide4.png";
import Slide5 from "../../../../../assets/slides/slide5.png";
import Slide6 from "../../../../../assets/slides/slide6.png";
import Slide7 from "../../../../../assets/slides/slide7.png";

const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

const SlideComponent = () => {
  return (
    <Slide>
      {images.map((image, index) => (
        <div
          key={index}
          className="each-slide-effect"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </Slide>
  );
};

export default SlideComponent;
