import React from "react";
import { Button, Icon } from "semantic-ui-react";

function AppButton(props) {
  return (
    <Button
      icon
      style={{
        width: `25%`,
        textAlign: `center`,
        placeSelf: `center`,
        margin: `15px 0px`
      }}
      size={props.size}
      name={props.name}
      onClick={props.buttonClick}
    >
      {props.displayName ? props.displayName : <Icon name={props.iconName} />}
    </Button>
  );
}

export default AppButton;
