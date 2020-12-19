import React from "react";

const TeacherGuard = (Components) => (props) => {
  return (
    <React.Fragment>
      {(() => {
        if (true) {
          return <Components {...props}></Components>;
        } else {
          return <div>Not Found</div>;
        }
      })()}
    </React.Fragment>
  );
};

export default TeacherGuard;
