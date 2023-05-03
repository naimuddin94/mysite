import React from "react";
import Image from "next/image";
import Mypic from "../public/mypic_spandan3.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Social from "./Social";

export default function MainContent() {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Next Js Developer",
      "React Developer",
      "Python Developer",
      "Django Developer",
      "Frelancer",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 60,
  });
  return (
    <section className="relative">
      <div className="text-center md:grid grid-cols-12">
        <div className="col-span-5 relative md:mt-8 bg-gradient-to-b from-teal-300  mx-auto rounded-lg h-48 w-48 md:h-64 md:w-64 mb-8">
          <Image
            priority
            src={Mypic}
            alt="Profile pic"
            className="hover:scale-125 rotate-12 bg-gradient-to-b from-teal-300 rounded-lg hover:rotate-0 duration-300"
          />
        </div>
        <div className="col-span-6 md:ml-6 order-last">
          <h2 className="font-bold text-3xl pt-5 opacity-70 text-slate-500 dark:text-slate-100">
            MD Naim Uddin
          </h2>
          <h3 className="flex shadow-lg justify-center py-4 rounded-lg text-2xl font-bold mb-4">
            <span className="text-teal-600 dark:text-teal-400">I&apos;m</span>
            <span className="ml-1 text-orange-600 dark:text-orange-500">
              {text}
              <Cursor cursorColor="#4cd137" />
            </span>
          </h3>
          <p className="text-justify shadow-xl hover:shadow-2xl leading-5 p-5 font-mono font-semibold opacity-70 border-2 border-teal-400 rounded-lg dark:text-gray-100">
            <span className="text-rose-700 text-xl dark:text-sky-300">
              Why should you hire me
            </span>
            <span className="text-blue-600 text-2xl">?</span>
            <br />
            <span>
              I build websites professionally.And provide fully customized
              website. You will get newly created website which is not copied
              from other website.If you calculate that your website will be
              unique.The website code will be very organized which can be easily
              developed by anyone else later.Later there will be opportunities
              to develop very easily.Finally, as a developer every project is
              most important to me.
            </span>
          </p>
        </div>
        <div className="col-span-1 mx-auto h-full">
          <Social />
        </div>
      </div>
    </section>
  );
}
