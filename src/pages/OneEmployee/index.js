import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmployeesDetails } from "../../constants/employeesDetails";
import {
  ContentContainer,
  CoverImage,
  EmployeeRole,
  ProfileImages,
  Technologies,
} from "./style";
import { fadeInAnim, pageAnimation } from "../../Animation/animation";
import { motion } from "framer-motion";
import Heading2 from "../../components/base/Heading2.js";

const OneEmployee = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    setEmployeeData(EmployeesDetails.find((el) => el.id === +id));
  }, [id]);

  return (
    <div>
      {employeeData && (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
          <CoverImage myimage={employeeData.coverImg}>
            <h1>{employeeData.hobbies}</h1>
            <motion.div
              className="description"
              variants={fadeInAnim}
              initial="hidden"
              animate="show"
            >
              <p>"{employeeData.description}"</p>
            </motion.div>
          </CoverImage>
          <ContentContainer color={employeeData.color}>
            <EmployeeRole>
              <Heading2 content={employeeData.name} />
              <h3>{employeeData.role}</h3>
            </EmployeeRole>

            <ProfileImages
              variants={fadeInAnim}
              initial="hidden"
              whileInView="show"
            >
              <div className="image">
                <img src={employeeData.pImg1} alt="Employee IMG 01" />
              </div>
              <div className="image">
                <img src={employeeData.pImg2} alt="Employee IMG 02" />
              </div>
              <div className="image">
                <img src={employeeData.pImg3} alt="Employee IMG 03" />
              </div>
            </ProfileImages>

            <Technologies>
              <Heading2 content="Skills" />
              <h4>{employeeData.technologies}</h4>
            </Technologies>
          </ContentContainer>
        </motion.div>
      )}
    </div>
  );
};

export default OneEmployee;
