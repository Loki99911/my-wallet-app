import { RotatingLines } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="white"
      strokeWidth="3"
      animationDuration="0.5"
      width="25"
      visible={true}
    />
  );
};
