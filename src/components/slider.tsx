import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import styled from "styled-components";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles
const StyledGallerySlider = styled.div`
  .slick-slider {
    height: 300px;

    .slick-arrow {
      background-color: red;
    }

    .slick-slide {
      margin-right: 10px;
    }
  }
`;

// Types
interface IProps {
  images: any;
}

const GallerySlider: React.FC<IProps> = ({ images }) => {
  const { edges } = images || [];

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "slider variable-width",
    variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledGallerySlider>
      {edges.length > 0 ? (
        <Slider {...settings}>
          {edges.map((image: any, index: number) => {
            const img = getImage(image.node);
            const imgHeight = img?.height !== undefined ? img.height : 0;
            const imgWidth = img?.height !== undefined ? img.width : 0;
            const ratio = imgHeight / imgWidth;

            const newWidth = Math.round(288 / ratio);

            return img !== undefined ? (
              <div
                key={index}
                style={{
                  width: newWidth,
                }}
              >
                <GatsbyImage
                  image={img}
                  alt={`gallery image number ${index}`}
                  data-key={index}
                />
              </div>
            ) : null;
          })}
        </Slider>
      ) : (
        ""
      )}
    </StyledGallerySlider>
  );
};

export default GallerySlider;
