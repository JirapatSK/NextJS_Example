import React from "react";

const Guard = (Components) => (props) => {
  return (
    <React.Fragment>
      {(() => {
        if (false) {
          return <Components {...props}></Components>;
        } else {
          return <div>Not Found</div>;
        }
      })()}
    </React.Fragment>
  );
};

export default Guard;
