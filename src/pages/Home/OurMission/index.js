import { StyledMission, StyledText, LineAnimation } from "./styles";
import mission from "../../../assets/images/mission.jpg";
import GImage from "../../../components/base/Image";
import Lottie from "lottie-react";
import lineAnimation from "../../../assets/Animation - 02.json";
import { fadeInAnim } from "../../../Animation/animation";

const Mission = () => {
  return (
    <StyledMission>
      <GImage
        source={mission}
        alternate="Our Mission"
        variants={fadeInAnim}
        initial="hidden"
        whileInView="show"
      />

      <StyledText variants={fadeInAnim} initial="hidden" whileInView="show">
        <h2>
          At <span>Gigalabs</span>, we blend artistry with technology to
        </h2>
        <h2>craft digital experiences that inspire.</h2>
        <h3>
          Our <span>passion</span> is to empower businesses with{" "}
        </h3>

        <h3>captivating websites and engaging media.</h3>

        <h3>
          <span className="lastLine">
            We strive to make your vision come to life, one pixel at a time.
          </span>
        </h3>
      </StyledText>
      <LineAnimation>
        <Lottie type="scroll" animationData={lineAnimation} />
      </LineAnimation>
    </StyledMission>
  );
};

export default Mission;
