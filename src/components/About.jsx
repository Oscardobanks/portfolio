import about from "/assets/images/Taku img.png";

const About = () => {
  return (
    <div id="about" className="mainContainer pt-20 text-white">
      <h1 className="text-center text-gold-200 text-5xl font-bold pb-14">
        About Me
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20">
        <img src={about} alt="About Me Image" className="" />
        <div className="flex flex-col gap-10">
          <p className="text-lg">
            I am a passionate full stack developer with a focus on building
            modern and responsive web applications. With a string foundation in
            both frontend and backend technologies, I strive to create seamless
            and efficient user experiences. My expertise spans a range of
            technologies including React, Node.js, and Mongo DB databases,
            allowing me to tackle projects from concept to deployment. I&#39;m
            adept at collaborating within agile teams and thrive in dynamic
            environments where I can continuously learn and grow. I&#39;m eager
            to contribute my skills to a challenging role where I can make a
            significant impact. My portfolio, linked below, showcases my recent
            projects and demonstrates my commitment to delivering high-quality
            results.
          </p>
          <div className="flex sm:flex-row flex-col justify-evenly items-center gap-10">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-extrabold text-gold-200">3+</p>
              <p className="text-xl font-semibold">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-extrabold text-gold-200">15+</p>
              <p className="text-xl font-semibold">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
