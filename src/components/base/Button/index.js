import { StyledButton } from "./styles";

const Button = ({ onClick, label, type, styles }) => {
  return (
    <StyledButton style={styles ? styles : {}} type={type}>
      {label}
    </StyledButton>
  );
};
export default Button;
