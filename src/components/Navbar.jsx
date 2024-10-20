import { useEffect, useState } from "react";
import logo from "/assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Links = [
    { name: "Home", ref: "#home" },
    { name: "About", ref: "#about" },
    { name: "Skills", ref: "#skills" },
    { name: "Projects", ref: "#projects" },
    { name: "Contact", ref: "#contact" },
  ];

  function handleScroll() {
    if (window.scrollY >= 50) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      id="home"
      className={`mainContainer fixed top-0 right-0 left-0 z-10 transition-all duration-500 ease-in-out ${
        fixed
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white shadow-none"
      } md:py-5 py-3`}
    >
      <div className="md:block hidden">
        <div className="flex items-center justify-between">
          <a href="">
            <div className="flex items-center gap-1">
              <img src={logo} alt="Taku P." width={30} />
              <p className="text-gold-100 text-lg font-semibold">Taku P.</p>
            </div>
          </a>
          <div id="navLink" className="font-bold">
            {Links.map((link, index) => (
              <a key={index} href={link.ref} className="px-5">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center">
        <a href="">
          <div className="flex items-center gap-1">
            <img src={logo} alt="Taku P." width={30} />
            <p className="text-gold-100 text-lg font-semibold">Taku P.</p>
          </div>
        </a>
        <div onClick={handleToggle} className="w-fit cursor-pointer">
          <div className="border border-gray-scale-200 bg-gray-scale-50 shadow p-2 rounded-md">
            <GiHamburgerMenu />
          </div>
          <div
            id="navLink"
            className={`lato-heading-bold flex flex-col items-center gap-10 py-10 px-10 absolute z-10 md:static bg-white shadow left-0 w-full transition-all duration-500 ease-in-out capitalize ${
              open ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => (
              <a
                key={index}
                href={`${link.ref}`}
                className="text-black px-5 md:ml-8 text-xl"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
