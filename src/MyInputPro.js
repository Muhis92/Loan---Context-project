import { useContext } from "react";
import { LoanContext } from "./context/InputContext";
export default function MyInputPro() {
  const inputContext = useContext(LoanContext);
  return (
    <>
      <div>
        <div></div>
        <label>{inputContext.labelTitle}</label>
        <input
          value={inputContext.value}
          onChange={(event) => {
            inputContext.handleChange(event.target.value);
          }}
        />
      </div>
    </>
  );
}
