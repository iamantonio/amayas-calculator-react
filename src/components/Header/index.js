import React from "react";

function AppHeader(props) {
  return (
    <div style={{ placeSelf: `center` }}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default AppHeader;
