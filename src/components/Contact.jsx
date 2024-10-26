import { AiOutlineSend } from "react-icons/ai";
import { Contacts } from "../data/Contacts";
import whiteCoder from "/assets/images/white coder.png";
import { useState } from "react";

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "7a907ff8-9628-4f7a-98d2-87633be58d37");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitting(false);
      setSuccessMsg(
        "Form Submitted Successfully. Thank you for contacting me."
      );
      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
      event.target.reset();
    } else {
      console.log("Error", data);
      setIsSubmitting(false);
      setSuccessMsg(data.message);
    }
  };

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
              <p className="text-xl font-semibold text-black">
                {" "}
                {contact.name}{" "}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center">
        <img src={whiteCoder} alt="" />
      </div>
      <div className="md:m-5 mt-5 bg-white text-black md:p-10 p-6 pt-10 rounded-2xl">
        <h1 className="text-4xl text-center font-bold md:pb-10 pb-5">
          Contact Me
        </h1>
        {successMsg && (
          <h1 className="text-green-600 text-xl text-center font-bold pb-5">
            {successMsg}
          </h1>
        )}
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-5 pt-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  className="px-5 py-3 bg-gray-100 rounded-full w-full"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="px-5 py-3 bg-gray-100 rounded-full w-full"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="px-5 py-3 bg-gray-100 rounded-full w-full"
                required
              />
            </div>

            <div>
              <textarea
                type="text"
                name="message"
                id="message"
                placeholder="Message"
                rows={4}
                className="px-5 py-3 bg-gray-100 rounded-xl w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gold-200 w-fit px-10 py-2 rounded-full text-black font-semibold transform transition-transform duration-300 hover:scale-105 disabled:bg-opacity-20 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              <span className="flex items-center gap-2">
                {isSubmitting ? "Sending..." : "Send"}{" "}
                <AiOutlineSend size={20} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
