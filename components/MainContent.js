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
        <div className="relative md:mt-8 bg-gradient-to-b  from-teal-300  mx-auto rounded-lg h-48 w-48">
          <Image
            src={Mypic}
            alt="Profile pic"
            className="rotate-12 bg-gradient-to-b  from-teal-300 rounded-lg hover:rotate-0 duration-300"
          />
        </div>
        <div className="">
          <h2 className="font-bold text-3xl pt-5 opacity-70 text-slate-500 dark:text-slate-100">
            MD Naim Uddin
          </h2>
          <h3 className="flex shadow-lg justify-center py-4 rounded-lg text-2xl font-bold mb-4">
            <span className="text-teal-600 dark:text-teal-400">I&apos;nm</span>
            <span className="ml-1 text-orange-600 dark:text-orange-500">
              {text}
              <Cursor cursorColor="#4cd137" />
            </span>
          </h3>
          <p className="text-justify shadow-xl hover:shadow-2xl leading-6 p-5 font-mono font-semibold opacity-70 border-2 border-teal-400 rounded-lg dark:text-gray-100">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
}
