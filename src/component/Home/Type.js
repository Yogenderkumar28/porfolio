import React from "react";
import Typewriter from "typewriter-effect";
const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "MERN Stack Developer",
          "Coder",
          "Electrical Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
