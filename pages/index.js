import Head from "next/head";
import MainContent from "@/components/MainContent";
import Link from "next/link";
import { BsMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import Logoimg from "../public/mylogo.svg";
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
      </Head>

      <div className={darkMode ? "dark" : ""}>
        <div className="bg-gray-50 dark:bg-slate-600">
          <main className="mx-8">
            <nav className="flex justify-between mb-12 py-6">
              <span>
                <Image
                  src={Logoimg}
                  alt="Logo"
                  className="absolute mt-[-10px]"
                  priority={true}
                  height={70}
                />
              </span>
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
              <Contact className="" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
