import hero from "/assets/images/hero image.png";
import heroBg from "/assets/images/hero bg.png";

const Hero = () => {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-black text-white text-center pt-40"
    >
      <div className="mainContainer flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Hello! I&#39;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-300 font-extrabold">Taku Precious Toke</span>
        </h1>
        <div className="flex flex-col">
          <p className="text-2xl">
            A <span className="font-bold">Full Stack Web Developer</span>
          </p>
          <p className="text-xl">
            with <span className="font-bold text-gold-200">3+ years</span>{" "}
            experience
          </p>
        </div>
        <div className="flex justify-center w-full mt-10">
          <img src={hero} alt="hero image" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
