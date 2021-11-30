import React from "react";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import classNames from "classnames";
import styled from "styled-components";
import BgImg from "gatsby-background-image";

// Styles
const StyledBgImg = styled(BgImg)`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  z-index: -1;
  height: 100vh;

  &.small {
    height: 300px;
  }

  &.full {
    height: 100vh;
  }
`;

const Mask = styled((props) => <div {...props} />)`
  background: ${({ mask }) => mask};
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: -1;
`;

// Types
interface IProps {
  image: any;
  position?: string;
  bgColor?: string;
  height?: string;
  mask?: string | null;
  className: string;
}

const BackgroundImage: React.FC<IProps> = ({
  image,
  position,
  bgColor,
  height,
  mask,
}) => {
  const img = getImage(image);
  const bgImage = convertToBgImage(img);

  return (
    <>
      <StyledBgImg
        Tag="section"
        {...bgImage}
        backgroundColor={bgColor ? bgColor : "bg-gun-powder"}
        preserveStackingContext
        className={classNames(
          {
            "position-absolute": position === "absolute",
          },
          { full: height === "full" },
          { small: height === "small" }
        )}
      />
      {mask && <Mask mask={mask} />}
    </>
  );
};

export default BackgroundImage;
