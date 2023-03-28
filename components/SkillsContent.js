import Image from "next/image";
import reactimg from "../public/React.png";
import djangoimg from "../public/Django.png";
import databaseimg from "../public/Database.jpg";

export default function SkillsContent() {
  return (
    <div className="mt-6 text-center">
      <div className="rounded-lg shadow-lg hover:shadow-md md:w-1/3 m-auto">
        <h1 className="font-bold text-2xl p-3 text-orange-600 opacity-90 dark:text-red-500">
          About My Skills
        </h1>
      </div>
      <section className="space-y-5 mt-5 xl:grid lg:grid grid-cols-3 gap-4 xl:mt-8">
        <div className="space-y-5  p-8 shadow-xl border-t-2 rounded-lg xl:mt-5 lg:mt-5 lg:w-full">
          <Image
            className="w-full shadow-md rounded-lg h-52"
            src={reactimg}
            alt="website picture"
          />
          <h2 className="dark:text-teal-300 text-center text-teal-900 pb-3 font-bold text-2xl border-b-2 border-teal-600 rounded-full">
            Frontend
          </h2>
          <h4 className="dark:text-gray-100 text-left font-mono font-semibold rounded-lg shadow-md text-teal-900 p-4">
            Next JS, React JS, Javascript, HTML, CSS, Tailwind, Bootstrap, Ajax,
            Redux, jQuery
          </h4>
          <ul className="dark:text-gray-100 text-left font-mono font-semibold rounded-lg shadow-lg text-teal-900 p-4">
            <li>I&apos;m a React medium lavel developer.</li>
            <li>I can make a single page application with React.</li>
            \jsx-eslint\eslint-plugin-react\tree\master\docs\rules\no-unescaped-entities.md
            <li>Can convert any website to React or Next Js.</li>
            <li>And importantly Can make a website fully responsive.</li>
          </ul>
        </div>
        <div className="space-y-5 p-8 shadow-xl border-t-2 rounded-lg">
          <Image
            className="w-full shadow-md rounded-lg h-52"
            src={djangoimg}
            alt="website picture"
          />
          <h2 className="dark:text-teal-300 text-center text-teal-900 pb-3 font-bold text-2xl border-b-2 border-teal-600 rounded-full">
            Backend
          </h2>
          <h4 className="dark:text-gray-100 text-left font-mono font-semibold rounded-lg shadow-md text-teal-900 p-4">
            Django, Django-rest-framework, Python, Flask.
          </h4>
          <ul className="dark:text-gray-100 text-left font-mono font-semibold rounded-lg shadow-lg text-teal-900 p-4">
            <li>I can make api with Django-rest-framwork.</li>
            <li>
              For a website singup, login, contact and user I mostly used
              Django.
            </li>
            <li>Expert for make a any application with Django.</li>
            <li>Can handle a Django application without reload.</li>
          </ul>
        </div>
        <div className="space-y-5 p-8 shadow-xl border-t-2 rounded-lg">
          <Image
            className="w-full shadow-md rounded-lg h-52"
            src={databaseimg}
            alt="website picture"
          />
          <h2 className="dark:text-teal-300 text-center text-teal-900 pb-3 font-bold text-2xl border-b-2 border-teal-600 rounded-full">
            Databases
          </h2>
          <h4 className="dark:text-gray-100 text-left font-mono font-semibold rounded-lg shadow-md text-teal-900 p-4">
            PostgreSQL, SQLite, MySQL, MariaDB, Oracle.
          </h4>
          <ul className="dark:text-gray-100 text-left font-mono font-semibold rounded-lg shadow-lg text-teal-900 p-4">
            <li>I work with databases for user friendly.</li>
            <li>Mostly I do database connection with Django</li>
            <li>At a time maintain a website every clint need Databases.</li>
            <li>
              Databases can help manage business growing amounts of critical
              data centrally.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
