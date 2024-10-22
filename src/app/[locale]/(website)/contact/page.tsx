"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdKeyboardArrowRight } from "react-icons/md";
import { toast } from "react-toastify";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_kbcljzi";
    const templateId = "template_vw43tmu";
    const publicKey = "9bjtBYO7h7dTY_Ejc";

    const template_params = {
      from_name: name,
      from_email: email,
      to_name: "konuz",
      message: message,
      phone: phone,
    };
    emailjs
      .send(serviceId, templateId, template_params, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast.success("Thank you. Send a message", {
          hideProgressBar: true,
          position: "top-right",
        });
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
      })
      .catch((error) => {
        toast.error("Transmission failed", {
          hideProgressBar: true,
          position: "top-right",
        });
        console.error("Error sending email:", error);
      });
  };
  return (
    <>
      <div
        className="w-full flex justify-center items-center flex-col text-1xl
      relative lg:top-[-120px] mb-[80px] lg:mb-5"
      >
        <p className="text-xl sm:text-3xl capitalize text-[#6fc3c5]">
          SEND ME A MESSAGE
        </p>
        <p className="text-xl my-3 text-[#3e6e6f] text-center">
          Please provide your information and I will get back to you.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center mx-auto mt-10"
        >
          <div className="md:px-4 mx-auto md:w-[620px]">
            <div className="">
              <div className="sm:flex sm:flex-wrap -mx-3">
                <div className="sm:w-full px-3 mb-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 text-white p-2 w-full focus:border-[#6fc3c5] outline-none bg-transparent"
                  />
                </div>
                <div className="sm:w-full px-3 mb-3">
                  <input
                    type="email"
                    placeholder="E-mail address"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 text-white p-2 w-full focus:border-[#6fc3c5] outline-none bg-transparent"
                  />
                </div>
                <div className="sm:w-full px-3 mb-3">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="border-2 text-white p-2 w-full focus:border-[#6fc3c5] outline-none bg-transparent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="sm:w-full px-3">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={3}
                    placeholder="Your message here"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-2 text-white p-2 py-1 w-full focus:border-[#6fc3c5] outline-none bg-transparent"
                  ></textarea>
                </div>
              </div>
              <div className="text-right mt-4 md:mt-5 flex justify-end">
                <button className="border-2 flex items-center justify-center cursor-pointer  gap-2 border-[#6fc3c5] rounded px-6 py-2 text-[#6fc3c5] hover:bg-[#6fc3c5] hover:text-white transition-colors duration-300">
                  Send a Message
                  <MdKeyboardArrowRight className="text-[22px] font-bold" />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
