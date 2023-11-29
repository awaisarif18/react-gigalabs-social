import React from "react";
import CEOHeadshot from "../../../assets/images/ceoheadshot.jpg";
import { message } from "../../../constants";
import { CeoMessageContainer, Message } from "./styles";
import GImage from "../../../components/base/Image";
import GParagraph from "../../../components/base/Paragraph";
import { fadeInAnim } from "../../../Animation/animation";

const CEOMessage = () => {
  return (
    <CeoMessageContainer>
      <GImage
        source={CEOHeadshot}
        alternate="CEO"
        variants={fadeInAnim}
        initial="hidden"
        whileInView="show"
      />

      <Message variants={fadeInAnim} initial="hidden" whileInView="show">
        <GParagraph content={message.message1} />
        <GParagraph content={message.message2} />
        <GParagraph content={message.message3} />
      </Message>
    </CeoMessageContainer>
  );
};

export default CEOMessage;
