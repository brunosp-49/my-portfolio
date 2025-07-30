import { PulseLoader } from "react-spinners";
import { SpinnerContainer } from "./styled";
import { theme } from "../../global/theme";

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <PulseLoader color={theme.colors.grey[100]} loading={true} size={5} />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
