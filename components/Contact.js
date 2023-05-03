import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Popup from "./Popup";

export default function Example() {
  const form = useRef();
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClosePopup = () => {
    setAlert(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");

    await emailjs
      .sendForm(
        "service_nfp5zt6",
        "template_aaxyafi",
        form.current,
        "QvFOwRtWffU7beP-G"
      )
      .then(
        (result) => {
          setAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div>
        {alert && (
          <Popup
            message="Message send successfully"
            onClose={handleClosePopup}
          />
        )}
      </div>
      <div className="mt-[-50px]">
        <div className="isolate max-w-2xl py-24 px-6 sm:py-32 mx-[-20px] lg:px-8">
          <div className="mx-8 pb-8 text-center">
            <h2 className="dark:text-teal-200  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact Me
            </h2>
            <p className="sm:mb-[-70px] dark:text-slate-300 font-semibold font-mono mt-2 text-lg leading-6 text-gray-600">
              I believe in providing exceptional customer service, and that
              starts with being accessible to my users.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="mx-8 sm:mt-20">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="full-name"
                  className="dark:text-slate-300 block text-sm font-semibold leading-6 text-gray-900"
                >
                  Full name
                </label>
                <div className="mt-2.5">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="user_name"
                    autoComplete="given-name"
                    className="xl:text-lg block w-full rounded-md border-0 py-2 px-3.5 dark:bg-gray-400 tracking-wide font-semibold dark:text-black text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:focus:ring-0 dark:focus:outline-2 dark:focus:outline-white focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="full-name"
                  className="dark:text-slate-300 block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="user_email"
                    autoComplete="email"
                    className="xl:text-lg dark:focus:ring-0 dark:focus:outline-2 dark:focus:outline-white dark:bg-gray-400 tracking-wide font-semibold dark:text-black block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="dark:text-slate-300 block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="xl:text-lg dark:focus:ring-0 dark:focus:outline-2 dark:focus:outline-white dark:bg-gray-400 tracking-wide font-semibold dark:text-black block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="block w-full px-3.5 py-2.5 btn">
                Let talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
