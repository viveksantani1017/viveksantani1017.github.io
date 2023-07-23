import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import githubLogo from "../assets/githubLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import nodeLogo from "../assets/nodeLogo.png";
import reactLogo from "../assets/reactLogo.png";
import javaLogo from "../assets/javaLogo.png";
import mysqlLogo from "../assets/mysqlLogo.png";
import mongoLogo from "../assets/mongoLogo.png";
import chakraLogo from "../assets/chakraLogo.png";
import bootstrapLogo from "../assets/bootstrapLogo.png";


const navigation = [
  { name: "Experience", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Education", href: "#" },
  //   { name: 'Company', href: '#' },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 fixed">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto inline-block" src={logo} alt="" />
              {"   "}
              <span className="inline-block text-md font-semibold leading-6 text-gray-900">
                Vivek Santani
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Download Resume <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <span>Vivek Santani</span>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
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
              skills like Node.js J2EE and using databases like MongoDB, Mysql,
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
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Techstack 
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-20 w-12 h-12 object-contain lg:col-span-1"
            src={htmlLogo}
          />
          <img
            className="col-span-2 max-h-12 w-12 h-12 object-contain lg:col-span-1"
            src={cssLogo}
          />
          <img
            className="col-span-2 max-h-12 w-12 h-12 object-contain lg:col-span-1"
            src={nodeLogo}
          />
          <img
            className="col-span-2 max-h-12 w-12 h-12 object-contain lg:col-span-1"
            src={javaLogo}
          />
          <img
            className="col-span-2 max-h-12 w-12 h-12 object-contain lg:col-span-1"
            src={mysqlLogo}
          />
          <img
            className="col-span-2 max-h-12 w-12 h-12 object-contain lg:col-span-1"
            src={mongoLogo}
          />
          <img
            className="col-span-2 max-h-12 w-12 h-12 object-contain lg:col-span-1"
            src={chakraLogo}
          />
          <img
            className="col-span-2 max-h-12 w-12 h-12 object-contain lg:col-span-1"
            src={bootstrapLogo}
          />
          
        </div>
      </div>
    </div>

      </div>
    </div>
  );
}
