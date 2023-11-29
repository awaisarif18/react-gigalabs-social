import React from "react";
import { upcomingData } from "../../../constants";
import UpcomingEventCard from "./upcomingEventCard";
import { StyledEventContainer, StyledEvents } from "./styles";
import Heading from "../../../components/base/Heading";

const UpcomingEvents = () => {
  return (
    <StyledEventContainer>
      <Heading content="Our Upcoming Events" />
      <StyledEvents>
        {upcomingData.map((data, index) => {
          return (
            <UpcomingEventCard
              key={index}
              name={data.name}
              venue={data.venue}
              duration={data.duration}
              date={data.date}
              description={data.description}
              image={data.image}
            />
          );
        })}
      </StyledEvents>
    </StyledEventContainer>
  );
};

export default UpcomingEvents;
