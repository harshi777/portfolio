import ProjectCard from "./ProjectCard";
import oasisWebsite from "../../assets/oasisWebsite.png";
import wildOasis from "../../assets/wildOasis.png";

function Projects() {
  return (
    <div id="projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        <ProjectCard
          title="The Wild Oasis Website"
          main="A customer-facing, full-stack hotel booking platform built with modern web technologies for optimal performance and security"
          image={oasisWebsite}
          demo="https://the-wild-oasis-website-eight-xi.vercel.app/"
          source="https://github.com/harshi777/the-wild-oasis-website"
        />
        <ProjectCard
          title=" The Wild Oasis"
          main="A hotel management platform built with modern front-end technologies to streamline booking management, cabin allocation, and guest records"
          image={wildOasis}
          demo="https://the-wild-oasis-three-snowy.vercel.app/"
          source="https://github.com/harshi777/the-wild-oasis"
        />
      </div>
    </div>
  );
}

export default Projects;
