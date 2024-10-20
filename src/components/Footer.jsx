import logo from "/assets/images/logo.png";

const Footer = () => {
  return (
    <div className="pt-10 px-10 pb-5">
      <div className="px-5 py-3 bg-gold-200 text-black flex md:flex-row flex-col gap-2 items-center justify-between rounded-full">
        <a href="">
          <div className="flex items-center gap-1">
            <img src={logo} alt="Taku P." width={30} className="rounded-full p-1 bg-black" />
            <p className="text-black text-lg font-semibold">Taku P.</p>
          </div>
        </a>
        <p className="font-semibold">
          &copy; 2024 Taku. All right reserved.
        </p>
        <p className="font-semibold">
          Created by <span className="font-bold">Taku Precious</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
