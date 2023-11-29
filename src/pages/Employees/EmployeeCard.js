import React from "react";
import { StyledECard } from "./StyledCard";
import { Link } from "react-router-dom";
import { fadeInAnim } from "../../Animation/animation";

const EmployeeCard = ({ name, role, id, cardImage, hobbies }) => {
  return (
    <StyledECard variants={fadeInAnim} initial="hidden" whileInView="show">
      <Link to={`/employee/${id}`}>
        <img src={cardImage} alt="Card" />
        <div>
          <h2>{name}</h2>
          <h4>{role}</h4>
          <p>{hobbies}</p>
        </div>
      </Link>
    </StyledECard>
  );
};

export default EmployeeCard;
