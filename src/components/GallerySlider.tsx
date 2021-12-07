import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
// import Slider from "react-slick";
import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles
const StyledGallerySlider = styled.div`
  /* margin: 0 auto;
  width: 95%;
  background-color: #fafafa; */

  .slick-slider {
    height: 340px;

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
  thumbs: any;
}

const GallerySlider: React.FC<IProps> = ({ images, thumbs }) => {
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
    <div>
      <SRLWrapper>
        {thumbs.edges.map((e: any, index: number) => {
          return (
            <a
              href={
                images.edges[index].node.childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              key={index}
            >
              <GatsbyImage
                image={e.node.childImageSharp.gatsbyImageData}
                alt={e.node.name}
              />
            </a>
          );
        })}
      </SRLWrapper>
    </div>
  );
};

export default GallerySlider;
