import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "react-image-lightbox";
import Masonry from "react-masonry-component";
import ClassNames from "classnames";
import "react-image-lightbox/style.css";

// Styles
const StyledAlbum = styled(Masonry)`
  display: flex;
  justify-content: space-between;

  .gallery-item {
    margin: 0 0.5% 1%;
    width: 49%;

    @media (min-width: 992px) {
      width: 24%;
    }

    .border-white {
      border: 5px solid var(--white) !important;
    }

    .border-athens-gray {
      border: 5px solid var(--athens-gray);
    }
  }
`;

// Types
interface IProps {
  images: any;
  border?: string;
  alts?: string[];
}

const Album: React.FC<IProps> = ({ images, border, alts = [""] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const arrayLength = images.edges.length;

  const arrImg = useMemo(
    () =>
      (images.edges as any).map((image: any) => [
        image.node,
        image.node.childImageSharp.gatsbyImageData.images.fallback.src,
      ]),
    [images]
  );

  const sorter = (a: any, b: any) => {
    parseInt(a[1].split("/").pop()) - parseInt(b[1].split("/").pop());
  };

  const arrImgSorted = arrImg.sort(sorter);

  const openLightbox = (event: any) => {
    event.preventDefault();
    setIsOpen(true);
    setPhotoIndex(parseInt(event.target.getAttribute("data-key")));
  };

  const pictures = arrImgSorted.map((img: any, index: number) => {
    const image = getImage(img[0].childImageSharp);

    return (
      <a
        href="/#"
        onClick={(e) => openLightbox(e)}
        key={img[0].id}
        className="gallery-item"
      >
        {image !== undefined ? (
          <GatsbyImage
            image={image}
            alt={alts[index]}
            data-key={index}
            className={ClassNames(
              { "border-white": border === "white" },
              { "border-athens-gray": border === "gray" }
            )}
          />
        ) : null}
      </a>
    );
  });

  const current = photoIndex;
  const next = (photoIndex + 1) % arrayLength;
  const prev = (photoIndex + arrayLength - 1) % arrayLength;

  return (
    <>
      {pictures !== undefined ? (
        <>
          <StyledAlbum elementType={"div"} className={"gallery"}>
            {pictures.map((picture: any) => picture)}
          </StyledAlbum>

          {isOpen && (
            <Lightbox
              mainSrc={`${arrImgSorted[current][1]}`}
              nextSrc={`${arrImgSorted[next][1]}`}
              prevSrc={`${arrImgSorted[prev][1]}`}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex(prev)}
              onMoveNextRequest={() => setPhotoIndex(next)}
            />
          )}
        </>
      ) : null}
    </>
  );
};

export default Album;
