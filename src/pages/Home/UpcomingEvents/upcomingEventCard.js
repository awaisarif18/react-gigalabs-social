import React from "react";
import { EventOverlay, StyledData, StyledEvent } from "./styledEvents";
import { fadeInAnim } from "../../../Animation/animation";

const UpcomingEventCard = ({
  name,
  venue,
  date,
  duration,
  description,
  image,
}) => {
  return (
    <StyledEvent
      myimage={image}
      variants={fadeInAnim}
      initial="hidden"
      whileInView="show"
    >
      <EventOverlay>
        <StyledData>
          <h3>{name}</h3>
          <p className="location">{venue}</p>
          <p className="description">{description}</p>
          <p className="dates">
            {duration} <span>{date}</span>
          </p>
        </StyledData>
      </EventOverlay>
    </StyledEvent>
  );
};

export default UpcomingEventCard;
