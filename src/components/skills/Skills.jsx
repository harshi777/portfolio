import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiNodejsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaHtml5 color="#E34F26" size={40} />, name: "HTML5" },
    { icon: <FaCss3 color="#1572B6" size={40} />, name: "CSS3" },
    { icon: <FaReact color="#61DAFB" size={40} />, name: "React" },
    { icon: <FaJs color="#F7DF1E" size={40} />, name: "JavaScript" },
    { icon: <SiNextdotjs color="#FFFFFF" size={40} />, name: "NextJs" },
    { icon: <SiMongodb color="#47A248" size={40} />, name: "Mongodb" },
    { icon: <RiNodejsFill color="#8CC84B" size={40} />, name: "NodeJs" },
    { icon: <SiExpress color="#FFFFFF" size={40} />, name: "Express" },
  ];
  return (
    <div id="skills" className="p-10 md:p-20">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-zinc-900 bg-opacity-60 backdrop-blur-md p-5 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-[0_0_15px_#00f7ff] duration-300"
          >
            {skill.icon}
            <p className="text-white mt-2 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
