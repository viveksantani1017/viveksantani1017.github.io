import React from "react";
import madfarms from "../assets/HomePage.png";
import UrbanClosetAndroid from "../assets/UrbanClosetAndroid.png";
import projectCard from "../assets/Project Card.png";
import PrimeVideoImg from "../assets/PrimeVideoClone.png";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
const Project = () => {
  const callouts = [
    {
      name: "Desk and Office",
      description: "Work from home accessories",
      imageSrc: "../assets/Project Card.png",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
      href: "#",
    },
    {
      name: "Self-Improvement",
      description: "Journals and note-taking",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
      imageAlt:
        "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
      href: "#",
    },
    {
      name: "Travel",
      description: "Github",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
      imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
      href: "#",
    },
  ];
  return (
    <>
      <div id="projects">
        <div className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none ">
            <h2 className="text-2xl font-bold text-gray-900">PROJECTS</h2>
            <div key="2" className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64">
                  <img
                    src={PrimeVideoImg}
                    // alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                    Prime Video Clone
                </h3>
                <a
                  href="https://github.com/viveksantani1017/PrimeVideoClone"
                  className="text-sm leading-6 text-gray-500"
                  target="blank"
                >
                  Github <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div key="2" className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64">
                  <img
                    src={UrbanClosetAndroid}
                    // alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                    Urban Closet Android
                </h3>
                <a
                  href="https://github.com/viveksantani1017/UrbanClosetAndroid"
                  className="text-sm leading-6 text-gray-500"
                  target="blank"
                >
                  Github <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              
              <div key="2" className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1  sm:h-64">
                  <img
                    src={projectCard}
                    // alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                    Urban Closet Web
                </h3>
                <a
                  href="https://github.com/viveksantani1017/UrbanClosetWeb"
                  className="text-sm leading-6 text-gray-500"
                  target="blank"
                >
                  Github <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
