import React, { useState, useEffect } from "react";
import "./ValidateSequence.css";
import { message, Select } from "antd";
const { Option } = Select;
const children = [];

const ValidateSequenceNo = ({ children }) => {
  const [ArrayOptions, setArrayOptions] = useState(children);
  useEffect(() => {
    // for (let i = 1; i < 10; i++) {
    // children.push({
    //   value: i,
    //   bool: true,
    //   key: i,
    // });
    let children1 = children.map((val, index) => ({
      value: val,
      bool: true,
      key: index,
    }));
    children1[0].bool = false;
    // }
    setArrayOptions(children1);
  }, [children]);
  useEffect(() => {
    console.log("ArrayOptions", ArrayOptions);
  }, [ArrayOptions]);
  const handleChange = (Argvalue) => {
    const CurrentSelectedIndex = ArrayOptions.findIndex(
      ({ value }) => value == Argvalue
    );
    const LastBooleanIndex = ArrayOptions.findIndex(({ bool }) => bool == true);

    if (
      ArrayOptions[CurrentSelectedIndex]?.key + 1 ===
      ArrayOptions[LastBooleanIndex]?.key
    )
      ArrayOptions[LastBooleanIndex].bool = false;
    console.log(ArrayOptions);
    setArrayOptions([...ArrayOptions]);
    // }
  };

  return (
    <>
      <Select
        style={{
          width: 120,
        }}
        // open
        onChange={handleChange}
      >
        {ArrayOptions.map(({ value, bool }) => {
          if (value)
            return (
              <Option disabled={bool} key={value}>
                <div
                  style={{
                    width: "100%",
                  }}
                  onClick={() => {
                    if (bool) {
                      message.error("please select the in sequences");
                    }
                  }}
                >
                  {value}
                </div>
              </Option>
            );
        })}
      </Select>
    </>
  );
};

export default ValidateSequenceNo;
