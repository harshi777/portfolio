import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div
      id="contact"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free to reach out!
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="harshikaasiwal711@gmail.com">harshikaasiwal711@gmail.com</a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a href="linkedin.com/in/harshika-asiwal-70aa39312">
            linkedin.com/in/harshika-asiwal
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a href="https://github.com/harshi777">github.com/harshi777</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
