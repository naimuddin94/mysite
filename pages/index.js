import Head from "next/head";
import MainContent from "@/components/MainContent";
import { BsMoonStarsFill } from "react-icons/bs";
import SkillsContent from "@/components/SkillsContent";
import Contact from "@/components/Contact";
import { useState } from "react";
import WebHistroty from "@/components/WebHistroty";

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>Naim portfolio</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={darkMode ? "dark" : ""}>
        <div className="bg-gray-50 dark:bg-slate-600">
          <main className="sm:mx-8 mx-4">
            <nav className="flex justify-between mb-12 py-6">
              <h1 className="text-3xl text-teal-600 dark:text-teal-400 font-bold">
                Portfolio
              </h1>

              <ul className="flex items-center">
                <li>
                  <BsMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="text-[2.6rem] dark:text-white cursor-pointer hover:bg-blue-200 p-2 rounded-full"
                  />
                </li>
                <li className="px-4 py-2 ml-4 md:ml-8 btn">
                  <a href="/resume.pdf" download>
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <MainContent />
            <SkillsContent />
            <div className="lg:grid grid-cols-2">
              <WebHistroty />
              <Contact />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
