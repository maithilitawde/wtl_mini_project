import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  pauseOnHover: true,
  };
  
  const images = [
    {
      id: 1,
      src: "src/images/p1.jpg",
      alt: "Placeholder 1",
      text: "Indian Job Market To Witness 22% Churn In 5 Years: World Economic Forum",
    },
    {
      id: 2,
      src: "src/images/p2.jpg",
      alt: "Placeholder 2",
      text: "India, Russia to explore possibility of accepting RuPay and Mir cards",

      
    },
    {
      id: 3,
      src: "src/images/p3.jpg",
      alt: "Placeholder 3",
      text: "World Bank launches more robust, transparent business climate rankings",
    },
  ];
  
  const Carousel = () => {
    return (
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <div
              style={{
                background: `url(${image.src}) center center / cover no-repeat`,
                height: "400px",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
              }}
            >
              <h2 className="text-white font-bold text-xl m-6 mb-10 bg-mix-blend">{image.text}</h2>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
  
  export default Carousel;
  
