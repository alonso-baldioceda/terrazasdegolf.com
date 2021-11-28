import React, { useState } from "react";
import classNames from "classnames";
import styled from "styled-components";

// Assets
import ChatIcon from "./../images/svg/chat.svg";
import WhatsappIcon from "./../images/svg/whatsapp.svg";
import MessengerIcon from "./../images/svg/messenger.svg";

// Styles
const StyledChat = styled.div`
  align-items: center;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 1rem;

  @media (min-width: 768px) {
    bottom: 2rem;
    right: 2rem;
  }

  .chat {
    background-color: var(--white);
    border: 2px solid #000;
    border-radius: 50%;
    cursor: pointer;
    height: 62px;
    padding: 10px;
    transition: all 0.25s;
    width: 62px;
    z-index: 99999;

    &.open {
      background-color: var(--gin);
    }
  }

  .whatsapp,
  .messenger {
    bottom: 12px;
    height: 40px;
    position: absolute;
    transition: all 0.25s ease-out;
    width: 40px;

    svg {
      height: 40px;
      width: 40px;
    }
  }

  .whatsapp {
    &.open {
      bottom: 76px;
      height: 46px;
      width: 46px;

      svg {
        height: 46px;
        width: 46px;
      }
    }
  }

  .messenger {
    &.open {
      bottom: 138px;
      height: 44px;
      width: 44px;

      svg {
        height: 44px;
        width: 44px;
      }
    }
  }
`;

// Types
interface IProps {
  wa: string;
  me: string;
}

const Chat: React.FC<IProps> = ({ wa, me }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <StyledChat>
      <a
        href={me}
        target="_blank"
        className={classNames("messenger", { open })}
      >
        <MessengerIcon />
      </a>
      <a href={wa} target="_blank" className={classNames("whatsapp", { open })}>
        <WhatsappIcon />
      </a>
      <div className={classNames("chat", { open })} onClick={handleOpen}>
        <ChatIcon />
      </div>
    </StyledChat>
  );
};

export default Chat;
