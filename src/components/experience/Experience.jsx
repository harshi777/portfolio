import logo from "../../assets/logo.png";

function Experience() {
  const experiences = [
    {
      company: "Velocis",
      icon: logo,
      role: "React Trainee",
      duration: "1st March 2024 - 1st May 2024",
      point: [" - Worked as a React Trainee and develpoed exciting websites."],
    },
  ];
  return (
    <div
      id="experience"
      className="md:flex-wrap md:justify-center mx-0 md:mx-20 bg-black shadow-xl bg-opacity-30 overflow-hidden rounded-lg p-12"
    >
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">
        Experience
      </h1>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-8 p-6 items-center">
            <img
              src={exp.icon}
              alt={`${exp.company} logo`}
              className="w-12 h-12 object-contain"
            />
            <div className="text-white">
              <h2 className="text-lg font-semibold">
                {exp.role}, {exp.company}
              </h2>
              <p className="text-sm font-light">{exp.duration}</p>
              <ul className="text-sm mt-2">
                {exp.point.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
