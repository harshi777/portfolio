import React from "react";
import harshika from "../../assets/harshika.jpeg";
function About() {
  return (
    <div
      id="about"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className=" md:flex md:items-start md:gap-6 lg:gap-4 xl:gap-2 w-full">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-left">
            About
          </h2>
          <div className="flex justify-center">
            <img
              className="md:w-1/2 md:h-80 rounded-full"
              src={harshika}
              alt="About image"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:mt-12">
          <p className="text-base md:text-lg leading-relaxed text-justify ">
            I am currently pursuing Master of Computer Applications (MCA) at the
            National Institute of Technology Agartala (NITA). I have a strong
            interest in frontend development and enjoy creating visually
            appealing and user-friendly websites. I am a hardworking individual
            who believes in completing tasks efficiently and on time. My keen
            observation skills help me pay attention to even the smallest
            details, which enhances the quality of my work. I take my
            responsibilities seriously and am fully dedicated to whatever I
            commit to. I strive for excellence and am always eager to learn and
            improve my skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
