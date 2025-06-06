import harshika from "../../assets/harshi.jpg";
function Home() {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <p>Hello, I'm Harshika</p>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          MCA student at NIT Agartala with a strong passion for frontend
          development. I enjoy building responsive and user-friendly web
          interfaces using modern technologies.
        </p>
        <a href="#contact">
          <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>
      <div className="w-2/5 flex justify-normal items-start">
        <img
          className="w-full max-w-sm shadow-lg rounded-full "
          src={harshika}
          alt="Harshika"
        />
      </div>
    </div>
  );
}

export default Home;
