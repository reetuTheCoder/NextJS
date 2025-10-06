import React from "react";

// task is header and footer should not show here
const About = () => {
  console.log("admin about also re-render");
  
  return (
    <div>
      <h2>This is The "Admin" about Page!!</h2>
    </div>
  );
};

export default About;
