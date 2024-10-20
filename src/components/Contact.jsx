import { AiOutlineSend } from "react-icons/ai";
import { Contacts } from "../data/Contacts";
import whiteCoder from '/assets/images/white coder.png'

const Contact = () => {
  return (
    <div id="contact" className="mainContainer pt-20 text-white">
      <h1 className="text-center text-gold-200 text-5xl font-bold pb-14">
        Connect With Me
      </h1>
      <div className="flex md:flex-row flex-col items-center justify-center gap-4 pb-5">
        {Contacts.map((contact) => (
          <a key={contact.id} href={contact.link} target="_blank">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-full">
              <img src={contact.icon} alt={contact.name} width={40} />
              <p className="text-xl font-semibold text-black"> {contact.name} </p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center">
        <img src={whiteCoder} alt="" />
      </div>
      <div className="m-5 bg-white text-black p-10 rounded-2xl">
        <h1 className="text-4xl text-center font-bold pb-14">Contact Me</h1>
        <form action="" method="post">
          <div className="flex flex-col gap-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  className="px-5 py-3 bg-gray-100 rounded-full w-full"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="px-5 py-3 bg-gray-100 rounded-full w-full"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <input
                  type="tel"
                  name="phoneumber"
                  id="phoneNumber"
                  placeholder="Mobile Number"
                  className="px-5 py-3 bg-gray-100 rounded-full w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="px-5 py-3 bg-gray-100 rounded-full w-full"
                />
              </div>
            </div>

            <div>
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Message"
                rows={4}
                className="px-5 py-3 bg-gray-100 rounded-xl w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-gold-200 w-fit px-10 py-2 rounded-full text-black font-semibold transform transition-transform duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">Send <AiOutlineSend size={20} /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
