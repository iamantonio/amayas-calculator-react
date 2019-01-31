import React from "react";
import { Input } from "semantic-ui-react";

const styles = {
  margin: ``,
  padding: `10px`,
  placeSelf: `center`
};

function InputField(props) {
  return (
    <Input
      style={styles}
      size={"large"}
      label={props.label}
      name={props.name}
      value={props.numField}
      onClick={props.clickField}
      onChange={props.inputChange}
    />
  );
}

export default InputField;
