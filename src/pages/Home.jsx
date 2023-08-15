import githubLogo from "../assets/githubLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import reactLogo from "../assets/reactLogo.png";
import javaLogo from "../assets/javaLogo.png";
import mysqlLogo from "../assets/mysqlLogo.png";
import mongoLogo from "../assets/mongoLogo.png";
import chakraLogo from "../assets/chakraLogo.png";
import Project from "../components/Project";
import Education from "../components/Education";
import Experience from "../components/Experience";


export default function Home() {

  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8" >
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div>
            <h1 className="text-2xl font-bold text-left tracking-tight text-gray-600 sm:text">
              Hi I'm,
            </h1>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text">
              Vivek Santani
            </h1>
            <h1 className="text-2xl font-bold tracking-tight text-gray-700 sm:text">
              Full-Stack Developer
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              A passionate full-stack developer with little experience in
              developing scalable websites/web applications using a range of
              front-end skills like HTML, CSS, JavaScript, React JS, backend
              skills like Node.js, J2EE, ASP .NET and using databases like MongoDB, Mysql,
              and Oracle.
            </p>
            <h1 className="text-xl mt-4 font-bold tracking-tight text-indigo-500 sm:text">
              Connect With Me
            </h1>
            <div className="mt-1 flex items-center justify-start gap-x-6">
              <a
                href="https://www.linkedin.com/in/viveksantani/"
                target="blank"
              >
                <img className="w-10 h-10" src={linkedinLogo} />
              </a>
              <a target="blank" href="https://github.com/viveksantani1017">
                <img className="w-10 h-10" src={githubLogo} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-12">
              TECHSTACK
            </h2>
            <div className="mt-20 container m-auto grid grid-cols-6 ">
              <img
                className="max-h-12 w-full object-contain "
                src={javaLogo}
                alt="SavvyCal"
                width="158"
                height="48"
              />
              <img
                className="max-h-12 w-full object-contain "
                src={nodeLogo}
                alt="Statamic"
                width="158"
                height="48"
              />
              <img
                className="max-h-12 w-full object-contain "
                src={reactLogo}
                alt="Tuple"
                width="158"
                height="48"
              />
              <img
                className="max-h-12 w-full object-contain "
                src={mongoLogo}
                alt="Statamic"
                width="158"
                height="48"
              />
              <img
                className="max-h-12 w-full object-contain "
                src={mysqlLogo}
                alt="Statamic"
                width="158"
                height="48"
              />
              <img
                className="max-h-12 w-full object-contain "
                src={chakraLogo}
                alt="Statamic"
                width="158"
                height="48"
              />
            </div>
          </div>
          <Experience/>
          <Project />
          <Education />
        </div>
      </div>
      </>
  );
}
