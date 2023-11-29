import React from "react";
import Icons from "../Icons";
import { StyledCopyrights, StyledFooter, StyledTable } from "./style";
import { Link } from "react-router-dom";
import { paths } from "../../constants/paths";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCopyrights>
        <Link to={paths.login}>
          <h1>Gigalabs</h1>
        </Link>
        <div className="icons">
          <Icons />
        </div>
        <h3>@2023 Gigalabs</h3>
        <p>Copyright all rights reserved</p>
      </StyledCopyrights>

      <StyledTable>
        <div>
          <h2>Our Solution</h2>
        </div>

        <div>
          <Link>
            <p>Integrated Security Platform</p>
          </Link>
          <Link>
            <p>Core Features</p>
          </Link>
          <Link>
            <p>Product Features</p>
          </Link>
          <Link>
            <p>Pricing</p>
          </Link>
        </div>
      </StyledTable>
      <StyledTable>
        <div>
          <h2>Your Needs</h2>
        </div>

        <div>
          <Link>
            <p>Integrated Security Platform</p>
          </Link>
          <Link>
            <p>Core Features</p>
          </Link>
          <Link>
            <p>Product Features</p>
          </Link>
          <Link>
            <p>Pricing</p>
          </Link>
        </div>
      </StyledTable>
      <StyledTable>
        <div>
          <h2>Offer</h2>
        </div>

        <div>
          <Link>
            <p>Integrated Security Platform</p>
          </Link>
          <Link>
            <p>Core Features</p>
          </Link>
          <Link>
            <p>Product Features</p>
          </Link>
          <Link>
            <p>Pricing</p>
          </Link>
        </div>
      </StyledTable>
    </StyledFooter>
  );
};

export default Footer;
