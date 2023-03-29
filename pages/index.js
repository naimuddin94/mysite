import Head from "next/head";
import MainContent from "@/components/MainContent";
import Link from "next/link";
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
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
                    className="text-2xl dark:text-white"
                  />
                </li>
                <li className="px-4 py-2 ml-8 btn">
                  <Link href="#">Resume</Link>
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
