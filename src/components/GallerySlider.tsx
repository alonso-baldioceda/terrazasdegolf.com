import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import { SRLWrapper } from "simple-react-lightbox";
import styled from "styled-components";

// Assets
import LeftArrowIcon from "./../images/svg/arrow-left.svg";
import RightArrowIcon from "./../images/svg/arrow-right.svg";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledGallerySlider = styled.div`
  .slick-slider {
    height: 288px;

    .slick-arrow {
      bottom: -60px;
      display: flex;
      height: 28px;
      width: 28px;

      &:before {
        content: "";
      }

      &.slick-prev {
        left: 0;
        top: inherit;
      }

      &.slick-next {
        left: 50px;
        top: inherit;
      }
    }

    .slick-list {
      height: 288px;

      .slick-slide {
        margin-right: 10px;
      }
    }
  }
`;

// Types
interface IProps {
  images: any;
}

interface IArrowProps {
  className?: string;
  onClick?: () => void;
}

const NextArrow = ({ className, onClick }: IArrowProps) => (
  <div className={className} onClick={onClick}>
    <RightArrowIcon />
  </div>
);

const PrevArrow = ({ className, onClick }: IArrowProps) => (
  <div className={className} onClick={onClick}>
    <LeftArrowIcon />
  </div>
);

const GallerySlider: React.FC<IProps> = ({ images }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "slider variable-width",
    variableWidth: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      <SRLWrapper>
        <Slider {...settings}>
          {images.edges.map((image: any) => {
            const img = getImage(image.node);
            const imgHeight = img?.height !== undefined ? img.height : 0;
            const imgWidth = img?.height !== undefined ? img.width : 0;
            const ratio = imgHeight / imgWidth;

            const newWidth = Math.round(288 / ratio);
            const newHeight = Math.round(newWidth * ratio);

            console.log("width", imgHeight, imgWidth, image.node.id);

            return (
              <div
                key={image.node.id}
                style={{
                  width: newWidth,
                  height: newHeight,
                }}
              >
                <a href={image.node.publicURL} className="d-block">
                  <GatsbyImage
                    image={image.node.childImageSharp.gatsbyImageData}
                    alt={image.node.base.split("-").join(" ").split(".")[0]}
                  />
                </a>
              </div>
            );
          })}
        </Slider>
      </SRLWrapper>
    </StyledGallerySlider>
  );
};

export default GallerySlider;
