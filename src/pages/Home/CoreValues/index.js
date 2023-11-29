import Heading from "../../../components/base/Heading";
import { cardImg } from "../../../constants";
import Card from "./card";
import { CardContainer, StyledValues } from "./styles";

const CoreValues = () => {
  return (
    <StyledValues>
      <div className="header">
        <Heading content="Our Core Values" />
      </div>

      <CardContainer>
        {cardImg.map((data, index) => {
          return (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              image={data.image}
            />
          );
        })}
      </CardContainer>
    </StyledValues>
  );
};

export default CoreValues;
