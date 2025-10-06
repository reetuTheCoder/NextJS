import React from "react";

// in the user when we want to go on the user about and profile we follow the path like
// http://localhost:3000/user/about
//http://localhost:3000/user/profile
// now we dont want show user in the path i want like - // http://localhost:3000/about & // http://localhost:3000/profile
// so we will wrap user folder name in the parentheses like - (user) now user will not show in the path url
const About = () => {
  return (
    <div>
      <h2>This is The "User" About Page!!</h2>
    </div>
  );
};

export default About;
