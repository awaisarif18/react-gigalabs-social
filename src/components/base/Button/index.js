import { StyledButton } from "./styles";

const Button = ({ func, label, type, styles }) => {
  return (
    <StyledButton style={styles ? styles : {}} type={type} onClick={func}>
      {label}
    </StyledButton>
  );
};
export default Button;
