import React from "react";
import EmployeeCard from "./EmployeeCard";
import { EmployeesDetails } from "../../constants/employeesDetails";
import { EmployeeContainer } from "./style";
import { pageAnimation } from "../../Animation/animation";

const Employees = () => {
  return (
    <EmployeeContainer
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {EmployeesDetails?.map((data, index) => {
        return (
          <EmployeeCard
            key={index}
            name={data.name}
            role={data.role}
            hobbies={data.hobbies}
            id={data.id}
            cardImage={data.cardPic}
          />
        );
      })}
    </EmployeeContainer>
  );
};

export default Employees;
