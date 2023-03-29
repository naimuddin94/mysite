import React from "react";
import Image from "next/image";
import Mypic from "../public/mypic12.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
    <section className="">
      <div className="text-center md:grid grid-cols-2">
        <div className="relative md:mt-8 bg-gradient-to-b from-teal-300  mx-auto rounded-lg h-48 w-48 md:h-64 md:w-64">
          <Image
            priority
            src={Mypic}
            alt="Profile pic"
            className="hover:scale-125 rotate-12 bg-gradient-to-b from-teal-300 rounded-lg hover:rotate-0 duration-300"
          />
        </div>
        <div className="">
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
          <p className="text-justify shadow-xl hover:shadow-2xl leading-6 p-5 font-mono font-semibold opacity-70 border-2 border-teal-400 rounded-lg dark:text-gray-100">
            <span className="text-rose-700 text-xl dark:text-sky-300">
              Why should you hire me
            </span>
            <span className="text-blue-600 text-2xl">?</span>
            <br />I build websites{" "}
            <span className="text-red-700 dark:text-orange-500">
              professionally
            </span>
            . And provide fully{" "}
            <span className="text-red-700 dark:text-orange-500">
              customized
            </span>{" "}
            website. You will get newly created website which is not{" "}
            <span className="text-red-700 dark:text-orange-500">copied</span>{" "}
            from other website. If you calculate that, your website will be{" "}
            <span className="text-red-700 dark:text-orange-500">unique</span>.
            The website code will be very{" "}
            <span className="text-red-700 dark:text-orange-500">organized</span>{" "}
            which can be easily developed by anyone else later. Later there will
            be opportunities to
            <span className="text-red-700 dark:text-orange-500">
              {" "}
              develop
            </span>{" "}
            very easily. Finally, as a developer every project is most{" "}
            <span className="text-red-700 dark:text-orange-500">
              important
            </span>{" "}
            to me.
          </p>
        </div>
      </div>
    </section>
  );
}
