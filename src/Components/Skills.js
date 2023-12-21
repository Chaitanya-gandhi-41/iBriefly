import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import accurate from "../assets/img/accurate.png";
import document from "../assets/img/document.png";
import youtube from "../assets/img/youtube.png";
import quiz from "../assets/img/quiz.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Features</h2>
              <p>
                IBriefly is a one of a kind Youtube Transcripter.<br></br> We
                save your time of watching into actually understanding{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={document} alt="Image" />
                  <h5>Document summarizer</h5>
                </div>
                <div className="item">
                  <img src={youtube} alt="Image" />
                  <h5>Youtube Transcripter</h5>
                </div>
                <div className="item">
                  <img src={quiz} alt="Image" />
                  <h5>Quiz Generator</h5>
                </div>
                <div className="item">
                  <img src={accurate} alt="Image" />
                  <h5>Accurate</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
