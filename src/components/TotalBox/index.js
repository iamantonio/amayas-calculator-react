import React from "react";
import { Input } from "semantic-ui-react";

const styles = {
  placeSelf: "center",
  marginTop: "20px"
};

function TotalBox(props) {
  return (
    <Input
      size={`huge`}
      style={styles}
      label={props.label}
      value={props.value}
    />
  );
}

export default TotalBox;
