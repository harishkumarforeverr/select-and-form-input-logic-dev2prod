import React, { useRef } from "react";
import { message } from "antd";

const FormComponent = () => {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const validateTheValue = (args) => {
    const keys = Object.keys(args);
    const values = Object.values(args);
    const Index = values.findIndex((val) => val === "" || val === undefined);
    if (Index === -1) return undefined;
    return keys[Index];
  };
  const fname = "harish";
  const lname = undefined;
  const age = "";
  const handlerSubmit = (e) => {
    e.preventDefault();
    const res = validateTheValue({
      fname: input1.current.value,
      lname: input2.current.value,
      age: input3.current.value,
    });
    if (res) {
      message.error("please fill the " + res);
    } else {
      message.success("evertything went well");
    }
  };
  return (
    <form>
      <br />
      <br />
      fname <input ref={input1} />
      lname <input ref={input2} />
      age <input ref={input3} />
      <button onClick={handlerSubmit}>submit</button>
      <br />
      <br />
    </form>
  );
};
export default FormComponent;
