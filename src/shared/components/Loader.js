import { TailSpin } from "react-loader-spinner";

export default function Loader({ loading }) {
  return (
    <TailSpin
      height="40"
      width="40"
      color="#52B6FF"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass=""
      visible={loading === undefined ? true : loading}
    />
  );
}
